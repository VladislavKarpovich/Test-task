import { call, put, delay, takeLatest } from "redux-saga/effects";
import { productsActions, productsTypes } from "services/actions/products";
import { getData } from "services/api";

function* loadProductsLoopSaga() {
  try {
    while (true) {
      const result = yield call(getData);
      yield put(productsActions.getProductsSuccess(result));

      yield delay(15 * 1000);
    }
  } catch (e) {
    console.error(e);
    yield put(productsActions.getProductsError());
  }
}

export function* loadProductsSaga() {
  yield takeLatest(productsTypes.getProductsRequest, loadProductsLoopSaga);
}
