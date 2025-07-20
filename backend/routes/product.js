import express from "express";

import {
  individualProduct,
  productsController,
} from "../controller/product-controller.js";

//Router Object
const router = express.Router();

router.get("/products", productsController);
router.get("/product/:id", individualProduct);

export default router;
