import { SET_SELECTED_SIZE_TO_CHECKOUT } from "../actionTypes";

const initialState = {
  selectedSizes: {},
  errorMessage: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SIZE_TO_CHECKOUT:
      return {
        ...state,
        selectedSizes: {
          ...state.selectedSizes,
          [action.payload.productId]: action.payload.size,
        },
      };
    default:
      return state;
  }
};

export default productReducer;
