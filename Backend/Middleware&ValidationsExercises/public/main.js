function show(outputEl, value) {
  outputEl.textContent =
    typeof value === "string" ? value : JSON.stringify(value, null, 2);
}

async function request(path, opts = {}) {
  const res = await fetch(path, opts);
  let body;
  const text = await res.text();
  try {
    body = JSON.parse(text);
  } catch {
    body = text;
  }
  return { status: res.status, body };
}

// Exercise 1
const ex1Out = document.querySelector("#ex1-out");
document.querySelector("#ping-root").addEventListener("click", async () => {
  const r = await request("/");
  show(ex1Out, r);
});
document.querySelector("#ping-about").addEventListener("click", async () => {
  const r = await request("/about");
  show(ex1Out, r);
});

// Exercise 2
const ex2Out = document.querySelector("#ex2-out");
document.querySelector("#get-users").addEventListener("click", async () => {
  const r = await request("/users");
  show(ex2Out, r);
});
document.querySelector("#get-user").addEventListener("click", async () => {
  const id = document.querySelector("#user-id").value.trim();
  const r = await request(`/users/${encodeURIComponent(id)}`);
  show(ex2Out, r);
});
document.querySelector("#create-user").addEventListener("click", async () => {
  const name = document.querySelector("#new-user-name").value.trim();
  const r = await request("/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  show(ex2Out, r);
});

// Exercise 3
const ex3Out = document.querySelector("#ex3-out");
document.querySelector("#create-post").addEventListener("click", async () => {
  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();
  const tagsCsv = document.querySelector("#post-tags").value.trim();
  const tags = tagsCsv
    ? tagsCsv
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];
  const r = await request("/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, tags }),
  });
  show(ex3Out, r);
});

document.querySelector("#list-posts").addEventListener("click", async () => {
  const r = await request("/posts");
  show(ex3Out, r);
});

document.querySelector("#add-comment").addEventListener("click", async () => {
  const postId = document.querySelector("#comment-post-id").value;
  const email = document.querySelector("#comment-email").value.trim();
  const content = document.querySelector("#comment-content").value.trim();
  const r = await request(`/posts/${encodeURIComponent(postId)}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, content }),
  });
  show(ex3Out, r);
});

document.querySelector("#list-comments").addEventListener("click", async () => {
  const postId = document.querySelector("#comments-post-id").value;
  const r = await request(`/posts/${encodeURIComponent(postId)}/comments`);
  show(ex3Out, r);
});
