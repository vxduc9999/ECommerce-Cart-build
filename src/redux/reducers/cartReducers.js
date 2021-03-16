import * as actionTypes from "../constants/cartConstants";

export const cartReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItem.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItem: state.cartItem.map((x) => {
            if (
              x.product === item.product &&
              x.qty + item.qty <= x.countInStock
            ) {
              x.qty += item.qty;
              return x;
            } else {
              return x;
            }
          }),
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItem, item],
        };
      }

    case actionTypes.QTY_FROM_CART:
      const it = action.payload;
      const product = state.cartItem.find((x) => x.product === it.product);
      return {
        ...state,
        cartItem: state.cartItem.map((x) => {
          if (x.product === product.product) {
            x.qty = it.qty;
            return x;
          } else {
            return x;
          }
        }),
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItem: state.cartItem.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
