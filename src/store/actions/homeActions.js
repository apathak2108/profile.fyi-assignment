import { SET_IS_PRODUCT_OPEN, SET_SELECTED_PRODUCT_ITEM_ID } from "../actionTypes";

export const setSelectedProductId = (productId) => ({
  type: SET_SELECTED_PRODUCT_ITEM_ID,
  payload: productId,
});

export const setIsProductOpen = (state) => ({
  type: SET_IS_PRODUCT_OPEN,
  payload: state,
})