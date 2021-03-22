import * as actionTypes from "../constants/authConstants";
import axios from "../configAxios";

export const getLogin = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.LOGIN_REQUEST });
    const { data } = await axios.post("/login", {
      email: email,
      password: password,
    });

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: {
        user: data,
        loggedIn: true,
      },
    });

    localStorage.setItem("users", JSON.stringify(getState().users));
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getLogout = () => async (dispatch, getState) => {
  dispatch({ type: actionTypes.LOGOUT_REQUEST });
  dispatch({
    type: actionTypes.LOGOUT_SUCCESS,
    payload: {
      user: {},
      loggedIn: false,
    },
  });

  localStorage.setItem("users", JSON.stringify(getState().users));
};

export const getRegister = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.REGISTER_REQUEST });
    const { data } = await axios.post("/register", {
      url: "http://localhost:3000",
      email:email ,
      password: password,
    });

    dispatch({
      type: actionTypes.REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
