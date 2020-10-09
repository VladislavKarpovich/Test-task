import axios from "axios";
import { parseData } from "./parsing";

export const getData = async () => {
  const getDataTask = axios.get("/api/data");
  const getNamesTask = axios.get("/api/names");

  const [dataResponse, namesResponse] = await Promise.all([getDataTask, getNamesTask]);

  const { data } = dataResponse;
  const { data: names } = namesResponse;

  return parseData({ data, names });
};

export const getCurrencyExchangeRates = async () => {
  const reqUrl = "https://api.exchangeratesapi.io/latest?base=USD&symbols=RUB";
  const { data } = await axios.get(reqUrl);
  return data.rates.RUB as number;
};
