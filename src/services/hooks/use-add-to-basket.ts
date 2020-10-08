import { useDispatch } from "react-redux";
import { basketActions } from "services/actions/basket";
import { Product } from "models/Product";

export const useAddToBasket = () => {
  const dispatch = useDispatch();

  const addToBasket = (product: Product) => {
    dispatch(basketActions.addNewToBasket(product));
  };

  return { addToBasket };
};
