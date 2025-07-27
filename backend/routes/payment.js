import express from "express";
import { isLoggedIn } from "../middleware.js";
import {
  addPaymentGateway,
  addStatus,
} from "../controller/payment-controller.js";
//Router Object
const router = express.Router();

router.post("/create-order", isLoggedIn, addPaymentGateway);
router.post("/status", addStatus);
export default router;
