import {
  SET_IS_PRODUCT_OPEN,
  SET_SELECTED_PRODUCT_ITEM_ID,
} from "../actionTypes";

const initialState = {
  selectedProductId: "",
  isProductOpen: false,
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PRODUCT_ITEM_ID:
      return {
        ...state,
        selectedProductId: action.payload,
      };
    case SET_IS_PRODUCT_OPEN:
      return { ...state, isProductOpen: action.payload };
    default:
      return state;
  }
};
