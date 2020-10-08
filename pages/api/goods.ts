import { promises as fs } from "fs";
import path from "path";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

const dataFilePath = path.join(
  serverRuntimeConfig.PROJECT_ROOT,
  "./data/data.json"
);
const namesFilePath = path.join(
  serverRuntimeConfig.PROJECT_ROOT,
  "./data/names.json"
);

const readFiles = async () => {
  const readDataTask = fs.readFile(dataFilePath);
  const readNamesTask = fs.readFile(namesFilePath);

  const [dataBuffer, namesBuffer] = await Promise.all([
    readDataTask,
    readNamesTask,
  ]);

  const data = JSON.parse(dataBuffer.toString());
  const names = JSON.parse(namesBuffer.toString());

  return { data, names };
};

export default async (req, res) => {
  const result = await readFiles();
  res.statusCode = 200;
  res.json(result);
};
