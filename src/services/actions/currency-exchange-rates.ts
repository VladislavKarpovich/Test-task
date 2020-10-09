export const exchangeRatesTypes = {
  exchangeRequest: "test-task/currency-exchange/get/request",
  exchangeSuccess: "test-task/currency-exchange/get/success",
  exchangeError: "test-task/currency-exchange/get/error",
  exchangeRefresh: "test-task/currency-exchange/refresh",
  exchangeApply: "test-task/currency-exchange/apply",
};

export const exchangeRatesActions = {
  currencyExchangeRequest: () => ({ type: exchangeRatesTypes.exchangeRequest }),
  currencyExchangeSuccess: (rate: number) => ({ type: exchangeRatesTypes.exchangeSuccess, payload: rate }),
  currencyExchangeError: () => ({ type: exchangeRatesTypes.exchangeError }),
  exchangeRefresh: () => ({ type: exchangeRatesTypes.exchangeRefresh }),
  currencyExchangeApply: (rate: number) => ({ type: exchangeRatesTypes.exchangeApply, payload: rate }),
};
