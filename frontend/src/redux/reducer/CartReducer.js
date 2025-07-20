import * as actionType from "../constant/CartConstant";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = action.payload;
      const exist = state.cartItems.find((product) => product.id === item.id);

      let updatedCart;

      if (exist) {
        updatedCart = state.cartItems.map((product) =>
          product.id === exist.id ? item : product
        );
      } else {
        updatedCart = [...state.cartItems, item];
      }

      localStorage.setItem("cartItems", JSON.stringify(updatedCart));

      return {
        ...state,
        cartItems: updatedCart,
      };

    case actionType.REMOVE_FROM_CART:
      const filteredCart = state.cartItems.filter(
        (product) => product.id !== action.payload
      );

      //  localStorage
      localStorage.setItem("cartItems", JSON.stringify(filteredCart));

      return {
        ...state,
        cartItems: filteredCart,
      };

    default:
      return state;
  }
};
