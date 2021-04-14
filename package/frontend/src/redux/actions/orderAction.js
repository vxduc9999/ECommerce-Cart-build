import * as actionTypes from "../constants/oderConstants";
import axios from "../configAxios";

export const addToOder = (order_id) => async (dispatch, getState) => {
  const { data } = await axios.post(`/pay`, {
    email_user: " @@@",
    order_id: order_id,
    name: "asd ",
    address: " asd",
    phone: " 000",
  });
};

export const getOrder = (user_id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/user/order-list`, {
    params: {
      user_id: user_id,
    },
  });

  dispatch({
    type: actionTypes.ADD_TO_ODER,
    payload: data,
  });
};

export const removeFromOrder = (id) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_ODER,
    payload: id,
  });
  localStorage.setItem("oder", JSON.stringify(getState().oder.oderItem));
};
