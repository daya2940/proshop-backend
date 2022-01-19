import asyncHandler from "express-async-handler";

import Product from "../models/productModal.js";

// @description Auth user & get token
// @route POST /api/user/login
// access Public
const authUser = asyncHandler(async (req, res) => {});

export { authUser };
