import axios from "axios";
import { parseData } from "./parsing";

export const getData = async () => {
  const getDataTask = axios.get("/api/data");
  const getNamesTask = axios.get("/api/names");

  const [dataResponse, namesResponse] = await Promise.all([
    getDataTask,
    getNamesTask,
  ]);

  const { data } = dataResponse;
  const { data: names } = namesResponse;

  return parseData({ data, names });
};
