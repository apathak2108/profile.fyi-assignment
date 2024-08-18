import {
  REMOVE_CART_ITEM,
  SET_CART_ITEMS_TO_CHECKOUT,
  SET_SELECTED_QUANTITY,
} from "../actionTypes";

const initialState = {
  cartProductIds: [],
  selectedQuantities: {},
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_ITEMS_TO_CHECKOUT:
      if (state.cartProductIds.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        cartProductIds: [...state.cartProductIds, action.payload],
      };
    case SET_SELECTED_QUANTITY:
      return {
        ...state,
        selectedQuantities: {
          ...state.selectedQuantities,
          [action.payload.productId]: action.payload.quantity,
        },
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartProductIds: state.cartProductIds.filter(
          (id) => id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default checkoutReducer;
