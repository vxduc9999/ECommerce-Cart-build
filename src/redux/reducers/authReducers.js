import * as actionTypes from "../constants/authConstants";

export const loginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return action.payload;
    case actionTypes.LOGIN_FAIL:
      return {
        error: action.payload,
      };
    case actionTypes.LOGOUT_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

export const registerReducer = (state = { message: {} }, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actionTypes.REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
