import {
  SET_SELECTED_SIZE_TO_CHECKOUT,
} from "../actionTypes";

export const setSelectedSizeToCheckout = (productId, size) => ({
  type: SET_SELECTED_SIZE_TO_CHECKOUT,
  payload: { productId, size },
});

