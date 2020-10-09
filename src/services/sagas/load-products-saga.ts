import { call, put, delay, takeLatest } from "redux-saga/effects";
import { productsActions, productsTypes } from "services/actions/products";
import { getData } from "services/api";

function* loadProductsLoopSaga() {
  try {
    // Execute request in this loop with 15s delay
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
  // Start the loop on  getProductsRequest action,
  // if getProductsRequest called again, stop executing loop and start new. Implemented using takeLatest function
  yield takeLatest(productsTypes.getProductsRequest, loadProductsLoopSaga);
}
