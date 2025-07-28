import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";
import MongoStore from "connect-mongo";

// File path setup (for ES Modules)
import path from "path";
import { fileURLToPath } from "url";

// Import Models
import User from "./models/User.js";
import Product from "./models/Product.js";

// Import routes
import userRouter from "./routes/user.js";
import productRouter from "./routes/product.js";
import paymentRouter from "./routes/payment.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

// CORS setup
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173", // Frontend origin (change accordingly)
    credentials: true,
  })
);

// MongoDB connection
const dbUrl = process.env.MONGO_URL;
main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

app.set("trust proxy", 1); // Trust first proxy for secure cookies in production

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", () => {
  console.log("ERROR in MONGO SESSION STORE", err);
});

// Session configuration (dynamic for prod/local)
const sessionOption = {
  store,
  secret: process.env.SECRET || "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "None",
    secure: true,
  },
};
app.use(session(sessionOption));

// Passport authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// API Routes
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/payments", paymentRouter);

// React Frontend Serve Code (For Deployment)
// if (process.env.NODE_ENV === "production") {
// Serve the static files from React's production build
app.use(express.static(path.join(__dirname, "../frontend/dist")));
// Catch-all route to serve index.html for any request
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});
// }

// Server Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
