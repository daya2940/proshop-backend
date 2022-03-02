import jwt from "jsonwebtoken";
// import User from "../models/userModal";
import expressAsyncHandler from "express-async-handler";

const protect = expressAsyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // console.log(req.headers.authorization);
      token = req.headers.authorization.split(" ")[2];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      next();
    } catch (err) {}
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
