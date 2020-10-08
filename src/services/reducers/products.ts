import { createReducer } from "utils/redux";
import { productsTypes } from "services/actions/products";
import { Group } from "models/Group";
import { ProductsState } from "models/ProductsState";

const initState: ProductsState = {
  isLoading: false,
  isLoaded: false,
  groups: [],
};

const requestStart = (state: ProductsState): ProductsState => {
  return {
    ...state,
    isLoading: true,
  };
};

const requestFinished = (state: ProductsState, payload: Group[]): ProductsState => {
  return {
    ...state,
    isLoaded: true,
    isLoading: false,
    groups: payload,
  };
};

const requestFailed = (state: ProductsState): ProductsState => {
  return { ...state, isLoading: false };
};

export const productsReducer = createReducer(initState, {
  [productsTypes.getProductsRequest]: requestStart,
  [productsTypes.getProductsSuccess]: requestFinished,
  [productsTypes.getProductsError]: requestFailed,
});
