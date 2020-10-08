import { call, put } from "redux-saga/effects";
import { productsActions } from "services/actions/products";
import { getData } from "services/api";

export function* loadProductsSaga() {
  try {
    const result = yield call(getData);

    yield put(productsActions.getProductsSuccess(result));
    return result;
  } catch (e) {
    console.error(e);
    yield put(productsActions.getProductsError());
  }
}
