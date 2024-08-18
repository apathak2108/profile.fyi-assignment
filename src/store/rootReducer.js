import { combineReducers } from "redux";
import { homeReducer } from "./reducers/homeReducer";
import productReducer from "./reducers/productReducers";
import checkoutReducer from "./reducers/checkoutReducer";

const rootReducer = combineReducers({
  home: homeReducer,
  product: productReducer,
  checkout: checkoutReducer,
});

export default rootReducer;
