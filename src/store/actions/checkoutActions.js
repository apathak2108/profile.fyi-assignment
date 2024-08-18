import {
  SET_CART_ITEMS_TO_CHECKOUT,
  SET_SELECTED_QUANTITY,
} from "../actionTypes";

export const setCartItemsToCheckout = (productId) => ({
  type: SET_CART_ITEMS_TO_CHECKOUT,
  payload: productId,
});

export const setSelectedQuantity = (productId, quantity) => ({
  type: SET_SELECTED_QUANTITY,
  payload: { productId, quantity },
});
