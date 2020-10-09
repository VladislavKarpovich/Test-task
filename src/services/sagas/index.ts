import { all, spawn, call } from "redux-saga/effects";
import { loadProductsSaga } from "./load-products-saga";
import { loadCurrencyRatesSaga } from "./load-currency-rates-saga";

const sagas = [loadProductsSaga, loadCurrencyRatesSaga];

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
