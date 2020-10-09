import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrencyExchangeRateState } from "models/CurrencyExchangeRateState";
import { exchangeRatesActions } from "services/actions/currency-exchange-rates";

const productsSelector = (state: { rates: CurrencyExchangeRateState }) => state.rates;

export const useCurrencyRates = () => {
  const state = useSelector(productsSelector);
  const dispatch = useDispatch();

  const applyCurrencyExchangeRate = (rate: number) => {
    dispatch(exchangeRatesActions.currencyExchangeApply(rate));
  };

  const refreshCurrencyExchangeRate = () => {
    dispatch(exchangeRatesActions.exchangeRefresh());
  };

  return { ...state, applyCurrencyExchangeRate, refreshCurrencyExchangeRate };
};

export const useCurrencyRatesInitialization = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exchangeRatesActions.currencyExchangeRequest());
  }, []);
};
