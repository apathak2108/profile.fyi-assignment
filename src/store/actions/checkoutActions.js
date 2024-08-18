import {
  REMOVE_CART_ITEM,
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

export const removeCartItem = (productId) => ({
  type: REMOVE_CART_ITEM,
  payload: productId,
});
