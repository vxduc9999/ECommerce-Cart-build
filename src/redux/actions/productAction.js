import * as actionTypes from "../constants/productConstants";
import axios from "../configAxios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_REQUEST });
    const { data } = await axios.get("/");
    dispatch({
      type: actionTypes.GET_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetails = (slug) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_REQUEST });
    const { data } = await axios.get(`/detail/${slug}`);
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const increase = (qty) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_COUNTER_REQUEST });
    dispatch({
      type: actionTypes.GET_COUNTER_INCREASE,
      payload: qty + 1,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_COUNTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_DETAIL_REQUEST,
  });
};

export const decrease = (qty) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_COUNTER_INCREASE,
      payload: qty - 1,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_COUNTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
