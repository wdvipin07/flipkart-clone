import axios from "axios";
import * as actionType from "../constant/ProductConstant";

export const getProducts = () => async (dispatch) => {
  try {
    let { data } = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/products`
    );

    dispatch({ type: actionType.GET_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: actionType.GET_PRODUCT_FAIL, payload: err.message });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`
    );
    dispatch({ type: actionType.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: actionType.GET_PRODUCT_DETAILS_FAIL,
      payload: err.message,
    });
  }
};
