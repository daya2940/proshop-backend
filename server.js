import express from "express";
import products from "./data/product.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();

connectDB();

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

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT} `.yellow.green
  )
);
