import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsState } from "models/ProductsState";
import { productsActions } from "services/actions/products";

const productsSelector = (state: { products: ProductsState }) => state.products;

export const useProducts = () => {
  const state = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsActions.getProductsRequest());
  }, []);

  return state;
};
