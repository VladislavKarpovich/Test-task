import { all, spawn, call } from "redux-saga/effects";
import { loadProductsSaga } from "./load-products-saga";

const sagas = [loadProductsSaga];

export function* rootSaga() {
  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error("Root saga failed", e);
          }
        }
      })
    )
  );
}
