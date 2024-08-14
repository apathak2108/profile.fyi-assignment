import { INCREASE_COUNTER } from "../actionTypes";

const initialState = {
  counter: 0,
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};
