import { HYDRATE } from "next-redux-wrapper";
import { combineReducers, AnyAction } from "redux";
import { productsReducer } from "./products";

const rootAppReducer = combineReducers({
  products: productsReducer,
});

export const reducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  }

  return rootAppReducer(state, action);
};
