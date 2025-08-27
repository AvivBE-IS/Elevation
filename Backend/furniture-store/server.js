const express = require("express");
const { request } = require("http");

const app = express();
require("express");
const path = require("path");

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

const port = 3000;

app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});

app.get("/status", function (request, response) {
  console.log("Server is up and running smoothly");
  response.send("Server is up and running smoothly");
});

app.get("/priceCheck/:name", function (request, response) {
  console.log("price tab");
  let ob = store.find((p) => p.name === request.params.name);
  if (ob) response.send({ price: +ob.price });
  else {
    response.send({ price: null });
  }
});

app.get("/buy", function (request, response) {
  const name = request.query.name;
  let ob = store.find((p) => p.name === name);
  if (ob && ob.inventory > 0) {
    ob.inventory--;
    response.send({ success: true, inventory: ob.inventory });
  } else {
    response.send({
      success: false,
      message: "Item not found or out of stock",
    });
  }
});

app.get("/sale", function (request, response) {
  const isAdmin = request.query.admin === "true";
  if (isAdmin) {
    store.forEach((item) => {
      if (item.inventory > 10) {
        item.price = item.price / 2;
      }
    });
  }
  response.send(store);
});

//   app.get("/landing/:username", function (request, response) {
//     response.send(`Hi there, ${request.params.username}`);
//   });

// app.get("/details", (request, response) => {
//   let params = request.query;
//   response.send(params);
//   console.log(request.query.city);
// });
//http://localhost:3000/details/?zipcode=6863155&city=Ankh Morpork&middleName=Wilfred
