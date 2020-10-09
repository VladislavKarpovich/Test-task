import { createReducer } from "utils/redux";
import { exchangeRatesTypes } from "services/actions/currency-exchange-rates";
import { CurrencyExchangeRateState } from "models/CurrencyExchangeRateState";

const initState: CurrencyExchangeRateState = {
  isLoading: false,
  isLoaded: false,
  wasRefreshed: false,
  rate: 0,
};

const exchangeRequest = (state: CurrencyExchangeRateState): CurrencyExchangeRateState => {
  return { ...state, isLoading: true };
};

const exchangeSuccess = (state: CurrencyExchangeRateState, payload: number): CurrencyExchangeRateState => {
  return { ...state, isLoaded: true, isLoading: false, rate: payload };
};

const exchangeError = (state: CurrencyExchangeRateState): CurrencyExchangeRateState => {
  return { ...state, isLoading: false };
};

const exchangeRefresh = (state: CurrencyExchangeRateState): CurrencyExchangeRateState => {
  return { ...state, isLoading: true, wasRefreshed: true };
};

const exchangeApply = (state: CurrencyExchangeRateState, payload: number): CurrencyExchangeRateState => {
  return { ...state, rate: payload };
};

export const ratesReducer = createReducer(initState, {
  [exchangeRatesTypes.exchangeRequest]: exchangeRequest,
  [exchangeRatesTypes.exchangeSuccess]: exchangeSuccess,
  [exchangeRatesTypes.exchangeError]: exchangeError,
  [exchangeRatesTypes.exchangeRefresh]: exchangeRefresh,
  [exchangeRatesTypes.exchangeApply]: exchangeApply,
});
