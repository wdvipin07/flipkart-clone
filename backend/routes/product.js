import express from "express";

import {
  individualProduct,
  productsController,
} from "../controller/product-controller.js";

//Router Object
const router = express.Router();

router.get("/", productsController);
router.get("/:id", individualProduct);

export default router;
