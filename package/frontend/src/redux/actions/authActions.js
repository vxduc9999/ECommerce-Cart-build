import * as actionTypes from "../constants/authConstants";
import axios from "../configAxios";
// import { getSession, setSession } from "../../constants/function";

export const getLogin = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.LOGIN_REQUEST });
    const { data } = await axios.post("/signin", {
      email: email,
      password: password
    });

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: {
        user: data,
        loggedIn: true,
      },
    });
    sessionStorage.setItem("users", JSON.stringify(getState().users));
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

export const getLogout = () => async (dispatch) => {
  dispatch({ type: actionTypes.LOGOUT_REQUEST });
  dispatch({
    type: actionTypes.LOGOUT_SUCCESS,
    payload: {
      user: {},
      loggedIn: false,
    },
  });
};

export const getRegister = (email, password,fullname) => async (dispatch,getState) => {
  try {
    dispatch({ type: actionTypes.REGISTER_REQUEST });
    const { data } = await axios.post("/signup", {
      url: "http://localhost:3000",
      email:email ,
      password: password,
      fullname:fullname,
    });

    dispatch({
      type: actionTypes.REGISTER_SUCCESS,
      payload: {
        user: data,
        loggedIn: false,
      },
    });
    sessionStorage.setItem("users", JSON.stringify(getState().users));
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


export const getVerifyEmail = (activation_token) => async (dispatch,getState) => {
  try {
    console.log(`🚀 => file: authActions.js => line 82 => activation_token`, activation_token)
    dispatch({ type: actionTypes.LOGIN_REQUEST });
    const { data } = await axios.post("/verify-email/activation_token", {
       token: activation_token 
    });
    
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: data
    });
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

export const getImportCode = (code) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.LOGIN_REQUEST });
    const { data } = await axios.post("/import-code", {
      code: code,
    });

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: {
        user: data,
        valueIP: true,
      },
    });
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

export const getForgotPassword = (email) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.LOGIN_REQUEST });
    const { data } = await axios.post("/forgot-password", {
      email: email,
    });

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: {
        user: data,
      },
    });
    sessionStorage.setItem("users", JSON.stringify(getState().users));     
    
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

export const getChangePassword = (password,comfirmPassword) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/changepassword", {
      password: password,
      comfirmPassword: comfirmPassword,
      email:getState().users.user.email
    });
    
    console.log(`🚀 => file: authActions.js => line 161 => getState().users`, getState().users)
    

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: {
        user: data,
      },
    });
    
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