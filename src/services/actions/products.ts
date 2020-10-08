import { Group } from "models/Group";

export const productsTypes = {
  getProductsRequest: "test-task/products/get/request",
  getProductsSuccess: "test-task/products/get/success",
  getProductsError: "test-task/products/get/error",
};

export const productsActions = {
  getProductsRequest: () => ({ type: productsTypes.getProductsRequest }),
  getProductsSuccess: (groups: Group) => ({ type: productsTypes.getProductsSuccess, payload: groups }),
  getProductsError: () => ({ type: productsTypes.getProductsError }),
};
