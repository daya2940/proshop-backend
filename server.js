import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import colors from "colors";
import productRoutes from "./routes/productRouter.js";
import userRoutes from "./routes/userRoutes.js";
import morgan from "morgan";
import bodyParser from "body-parser";

dotenv.config();

connectDB();

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// setup the logger
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT} `.yellow.green
  )
);
