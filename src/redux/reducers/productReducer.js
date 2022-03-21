import { actionTypes } from "../constants/actionTypes";

const intialState = {
  products: [{
      id : 1,
      title : "Deep",
      catogery : "Programmer",
  }],
};

export const productReducer = (state=intialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return state;

    default:
      break;
  }
  return <></>;
};
