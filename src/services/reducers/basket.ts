import { createReducer } from "utils/redux";
import { basketTypes } from "services/actions/basket";
import { Product } from "models/Product";
import { BasketState } from "models/BasketState";

const initState: BasketState = {
  products: {},
};

const addNewToBasket = (state: BasketState, payload: Product): BasketState => {
  const existingProduct = state.products[payload.id];

  if (!existingProduct) {
    return {
      ...state,
      products: {
        ...state.products,
        [payload.id]: {
          product: payload,
          amount: 1,
        },
      },
    };
  }

  return {
    ...state,
    products: {
      ...state.products,
      [payload.id]: {
        ...existingProduct,
        amount: existingProduct.amount + 1,
      },
    },
  };
};

const incrementInBasket = (state: BasketState, payload: number): BasketState => {
  return {
    ...state,
    products: {
      ...state.products,
      [payload]: {
        ...state.products[payload],
        amount: state.products[payload].amount + 1,
      },
    },
  };
};

const removeOneFromBasket = (state: BasketState, payload: number): BasketState => {
  return {
    ...state,
    products: {
      ...state.products,
      [payload]: {
        ...state.products[payload],
        amount: state.products[payload].amount - 1,
      },
    },
  };
};

const removeAllFromBasket = (state: BasketState, payload: number): BasketState => {
  const newState = { ...state };
  delete newState.products[payload];
  return newState;
};

export const basketReducer = createReducer(initState, {
  [basketTypes.addNewToBasket]: addNewToBasket,
  [basketTypes.incrementInBasket]: incrementInBasket,
  [basketTypes.removeOneFromBasket]: removeOneFromBasket,
  [basketTypes.removeAllFromBasket]: removeAllFromBasket,
});
