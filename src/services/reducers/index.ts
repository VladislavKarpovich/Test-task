import { HYDRATE } from "next-redux-wrapper";
import { combineReducers, AnyAction } from "redux";
import { productsReducer } from "./products";
import { basketReducer } from "./basket";

const rootAppReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
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
