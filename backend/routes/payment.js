import express from "express";
import { isLoggedIn } from "../middleware.js";
import {
  addPaymentGateway,
  addStatus,
} from "../controller/payment-controller.js";
//Router Object
const router = express.Router();

router.post("/create-order", addPaymentGateway);
router.get("/status", addStatus);
export default router;
