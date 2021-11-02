const express = require("express");
const products = require("./data/product");

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const productItem = products.find((item) => item._id === req.params.id);
  res.json(productItem);
});

app.listen(5000, console.log("Server running on port 5000"));
