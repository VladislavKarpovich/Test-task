import { Product } from "./Product";

export interface BasketState {
  products: {
    [key: number]: {
      product: Product;
      amount: number;
    };
  };
}
