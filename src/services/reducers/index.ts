import { combineReducers } from "redux";
import { productsReducer } from "./products";
import { basketReducer } from "./basket";
import { ratesReducer } from "./rates";

export const reducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
  rates: ratesReducer,
});
