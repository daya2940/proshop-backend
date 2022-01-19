import asyncHandler from "express-async-handler";

import Product from "../models/productModal.js";

// @description Fetch all product
// @route GET /api/products
// access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @description Fetch all product
// @route GET /api/products/:id
// access Public
const getProductById = asyncHandler(async (req, res) => {
  const productItem = await Product.findById(req.params.id);
  if (productItem) {
    res.json(productItem);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
  res.json(productItem);
});

export { getProductById, getProducts };
