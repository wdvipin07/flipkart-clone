import * as actionType from "../constant/ProductConstant";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_SUCCESS:
      return { products: action.payload };
    case actionType.GET_PRODUCT_FAIL:
      return { products: action.payload };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case actionType.GET_PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case actionType.GET_PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case actionType.GET_PRODUCT_DETAILS_RESET:
      return { product: {} };
    default:
      return state;
  }
};
