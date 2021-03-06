import { useDispatch, useSelector } from "react-redux";
import { BasketState } from "models/BasketState";
import { basketActions } from "services/actions/basket";

const basketSelector = (state: { basket: BasketState }) => state.basket;

export const useBasket = () => {
  const state = useSelector(basketSelector);
  const dispatch = useDispatch();

  const incrementInBasket = (productId: number) => {
    dispatch(basketActions.incrementInBasket(productId));
  };

  const removeAllFromBasket = (productId: number) => {
    dispatch(basketActions.removeAllFromBasket(productId));
  };

  const removeOneFromBasket = (productId: number) => {
    dispatch(basketActions.removeOneFromBasket(productId));
  };

  const products = Object.values(state.products);
  const sum = products.map((pr) => pr.amount * pr.product.priceUsd).reduce((sum, product) => sum + product, 0);

  return { products, sum, incrementInBasket, removeAllFromBasket, removeOneFromBasket };
};
