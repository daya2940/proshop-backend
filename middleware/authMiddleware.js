import jwt from "jsonwebtoken";
// import User from "../models/userModal";
import expressAsyncHandler from "express-async-handler";

const protect = expressAsyncHandler(async (req, res, next) => {
  console.log("Authorization:", req.headers.authorization);
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
          console.log(err);
        }
      });

      next();
    } catch (err) {}
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
