import { call, put, takeEvery } from "redux-saga/effects";
import { exchangeRatesActions, exchangeRatesTypes } from "services/actions/currency-exchange-rates";
import { getCurrencyExchangeRates } from "services/api";

function* getCurrencyRates() {
  try {
    const result = yield call(getCurrencyExchangeRates);
    yield put(exchangeRatesActions.currencyExchangeSuccess(result));
  } catch (e) {
    console.error(e);
    yield put(exchangeRatesActions.currencyExchangeError());
  }
}

export function* loadCurrencyRatesSaga() {
  // takeEvery - Run new saga without stopping executing saga
  // Run getCurrencyRates Saga on app init and on refresh currency rate button click
  yield takeEvery(exchangeRatesTypes.exchangeRefresh, getCurrencyRates);
  yield takeEvery(exchangeRatesTypes.exchangeRequest, getCurrencyRates);
}
