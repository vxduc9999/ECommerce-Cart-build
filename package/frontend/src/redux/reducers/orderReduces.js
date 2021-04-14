import * as actionTypes from "../constants/oderConstants";

export const oderReducers = (state = { orderItem: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_ODER:
      const ord = action.payload;
      return {
        ...state,
        orderItem: ord.map((x) => {
          return x;
        }),
      };

    default:
      return state;
  }
};
