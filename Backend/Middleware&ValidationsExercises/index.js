const express = require("express");
const path = require("path");
const { body, param, validationResult } = require("express-validator");
const Ajv = require("ajv");
const rateLimit = require("express-rate-limit");

const app = express();
app.use(express.json());
// Serve static frontend under /app
app.use(
  "/app",
  express.static(path.join(__dirname, "public"), { extensions: ["html"] })
);

// =========================
// Exercise 1: Global Middlewares
// =========================
let globalRequestCount = 0;

// Logging middleware: [TIMESTAMP] METHOD URL
app.use((req, res, next) => {
  const ts = new Date().toISOString();
  console.log(`[${ts}] ${req.method} ${req.url}`);
  next();
});

// Request counter middleware added to req
app.use((req, res, next) => {
  globalRequestCount += 1;
  req.requestCount = globalRequestCount;
  next();
});

// Basic routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome!", requestCount: req.requestCount });
});

app.get("/about", (req, res) => {
  res.json({ message: "About page", requestCount: req.requestCount });
});

// =========================
// Exercise 2: Route-specific middleware + Errors
// =========================
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

function validateId(req, res, next) {
  const { id } = req.params;
  if (!/^\d+$/.test(id)) {
    const err = new Error("Invalid ID format");
    err.status = 400;
    return next(err);
  }
  next();
}

function checkResourceExists(req, res, next) {
  const idNum = Number(req.params.id);
  const user = users.find((u) => u.id === idNum);
  if (!user) {
    const err = new Error("User not found");
    err.status = 404;
    return next(err);
  }
  req.user = user;
  next();
}

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", validateId, checkResourceExists, (req, res) => {
  res.json(req.user);
});

app.post("/users", (req, res, next) => {
  try {
    const { name } = req.body || {};
    const newUser = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      name,
    };
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (e) {
    next(e);
  }
});

// =========================
// Exercise 3: Blog API with validations
// =========================
// 2) Rate limiting simulation: max 10 req/min/IP (global)
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// In-memory stores
const posts = [];
const comments = [];

// AJV setup for Post
const ajv = new Ajv({ allErrors: true, removeAdditional: true });
const postSchema = {
  type: "object",
  additionalProperties: false,
  required: ["title", "content", "tags"],
  properties: {
    title: { type: "string", minLength: 5, maxLength: 100 },
    content: { type: "string", minLength: 10, maxLength: 1000 },
    tags: { type: "array", items: { type: "string" }, minItems: 0 },
    category: { type: "string" },
  },
};
const validatePost = ajv.compile(postSchema);

// Helpers
const findPostById = (id) => posts.find((p) => p.id === id);

// Blog router with advanced middlewares scoped to /posts
const blog = express.Router();

// 1) Request/response logger with execution time (scoped to blog routes)
blog.use((req, res, next) => {
  const start = process.hrtime.bigint();
  res.on("finish", () => {
    const end = process.hrtime.bigint();
    const ms = Number(end - start) / 1e6;
    console.log(
      `${req.method} ${req.originalUrl} -> ${res.statusCode} (${ms.toFixed(
        1
      )} ms)`
    );
  });
  next();
});

// 3) Content-type validation for POST/PUT (scoped)
blog.use((req, res, next) => {
  if (
    (req.method === "POST" || req.method === "PUT") &&
    !req.is("application/json")
  ) {
    const err = new Error("Content-Type must be application/json");
    err.status = 415;
    return next(err);
  }
  next();
});

// 4) Response formatter middleware (scoped)
blog.use((req, res, next) => {
  const originalJson = res.json.bind(res);
  res.locals._originalJson = originalJson;
  res.json = (data) => originalJson({ success: true, data });
  next();
});

// Routes
// POST /posts - AJV validation
blog.post("/", (req, res, next) => {
  try {
    const valid = validatePost(req.body);
    if (!valid) {
      const err = new Error("Validation failed");
      err.status = 400;
      err.details = validatePost.errors;
      return next(err);
    }
    const newPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags || [],
      category: req.body.category,
    };
    posts.push(newPost);
    res.status(201).json(newPost);
  } catch (e) {
    next(e);
  }
});

// GET /posts - No validation
blog.get("/", (req, res) => {
  res.json(posts);
});

// express-validator for comments
const commentValidators = [
  param("postId")
    .isInt({ min: 1 })
    .withMessage("postId must be a positive integer"),
  body("content").isString().isLength({ min: 5, max: 500 }),
  body("email").isEmail(),
];

// POST /posts/:postId/comments
blog.post("/:postId/comments", commentValidators, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Validation failed");
    err.status = 400;
    err.details = errors.array();
    return next(err);
  }

  const postId = Number(req.params.postId);
  const post = findPostById(postId);
  if (!post) {
    const err = new Error("Post not found");
    err.status = 404;
    return next(err);
  }

  const newComment = {
    id: comments.length ? comments[comments.length - 1].id + 1 : 1,
    postId,
    content: req.body.content,
    email: req.body.email,
  };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// GET /posts/:postId/comments - ID validation only
blog.get(
  "/:postId/comments",
  [param("postId").isInt({ min: 1 })],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Invalid postId");
      err.status = 400;
      err.details = errors.array();
      return next(err);
    }
    const postId = Number(req.params.postId);
    const postComments = comments.filter((c) => c.postId === postId);
    res.json(postComments);
  }
);

// mount blog router
app.use("/posts", blog);

// Centralized error handler (after response wrapper; override success false)
app.use((err, req, res, next) => {
  const status = err.status || 500;
  if (res.headersSent) return next(err);
  const originalJson = res.locals._originalJson || res.json.bind(res);
  res.status(status);
  originalJson({ success: false, error: err.message, details: err.details });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
