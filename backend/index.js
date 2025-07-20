import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";
// import "./passport-config.js";

//import Models
import User from "./models/User.js";
import Product from "./models/Product.js";

//import routes
import userRouter from "./routes/user.js";
import productRouter from "./routes/product.js";
import paymentRouter from "./routes/payment.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // frontend ka origin
    credentials: true,
  })
);

const dbUrl = process.env.MONGO_URL;

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
// Initialize the database
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

const sessionOption = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
//session
app.use(session(sessionOption));

//authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Router for All Pages
app.use("/", userRouter);
app.use("/", productRouter);
app.use("/", paymentRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
