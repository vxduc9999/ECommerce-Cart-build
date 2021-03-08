import * as actionTypes from "../constants/productConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.GET_PRODUCT_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case actionTypes.GET_PRODUCT_FAIL:
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getProductsDetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAIL_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        product: action.payload,
        loading: false,
      };
    case actionTypes.GET_PRODUCT_DETAIL_FAIL:
      return {
        error: action.payload,
        loading: false,
      };
    case actionTypes.GET_PRODUCT_DETAIL_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};

export const getCounter = (state = { qty: 1 }, action) => {
  switch (action.type) {
    case actionTypes.GET_COUNTER_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_COUNTER_INCREASE:
      return {
        qty: action.payload,
        loading: false,
      };
    case actionTypes.GET_COUNTER_DECREASE:
      return {
        qty: action.payload,
        loading: false,
      };
    case actionTypes.GET_COUNTER_FAIL:
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
