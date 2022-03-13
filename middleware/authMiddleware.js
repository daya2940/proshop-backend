import jwt from "jsonwebtoken";
// import User from "../models/userModal";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModal.js";

const protect = expressAsyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password"); // here we are making id visible to all of our protected routes

      next();
    } catch (err) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
