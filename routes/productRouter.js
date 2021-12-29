import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModal.js";

// @description Fetch all product
// @route GET /api/products
// access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @description Fetch all product
// @route GET /api/products/:id
// access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const productItem = await Product.findById(req.params.id);
    if (productItem) {
      res.json(productItem);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
    res.json(productItem);
  })
);

export default router;
