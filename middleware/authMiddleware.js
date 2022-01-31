import jwt from "jsonwebtoken";
import User from "../models/userModal";

const protect = async((req, res, next) => {
  //   let token;

  console.log(req.header.authoriztion);

  next();
});

export { protect };
