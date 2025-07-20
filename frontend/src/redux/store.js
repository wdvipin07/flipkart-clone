import { configureStore } from "@reduxjs/toolkit";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducer/ProductReducer";
import { cartReducer } from "./reducer/CartReducer";
// import { getProductDetails } from "./action/ProductAction";

const store = configureStore({
  reducer: {
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer,
  },
  devTools: true, // optional: true by default in dev
});

export default store;
