import express from "express";

import {
  signupControlller,
  loginController,
  logoutController,
  authController,
} from "../controller/user-controller.js";

//Router Object
const router = express.Router();

//Routing

//Register Routes
router.post("/signup", signupControlller);
//login Routes
router.post("/login", loginController);
//logout Routes
router.get("/logout", logoutController);
//Authenticate routes
router.get("/auth/user", authController);

export default router;
