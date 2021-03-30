import * as actionTypes from "../constants/cartConstants";
import axios from "../configAxios";

export const addToCart = (slug, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/detail/${slug}`);
  console.log("Hello");
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data.id,
      name: data.product_name,
      imageUrl: data.product_thumbnail,
      price: data.product_price,
      countInStock: data.product_quantity,
      slug: data.product_slug,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItem));
};

export const qtyToCart = (id, qty) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.QTY_FROM_CART,
    payload: {
      product: id,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItem));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItem));
};
