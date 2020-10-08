import { Product } from "models/Product";

export const basketTypes = {
  addNewToBasket: "test-task/basket/add-new",
  incrementInBasket: "test-task/basket/increment",
  removeOneFromBasket: "test-task/basket/remove-one",
  removeAllFromBasket: "test-task/basket/remove-all",
};

export const basketActions = {
  addNewToBasket: (product: Product) => ({ type: basketTypes.addNewToBasket, payload: product }),
  incrementInBasket: (id: number) => ({ type: basketTypes.incrementInBasket, payload: id }),
  removeOneFromBasket:  (id: number) => ({ type: basketTypes.removeOneFromBasket, payload: id }),
  removeAllFromBasket:  (id: number) => ({ type: basketTypes.removeAllFromBasket, payload: id }),
};
