import { promises as fs } from "fs";
import path from "path";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();
const dataFilePath = path.join(serverRuntimeConfig.PROJECT_ROOT, "./data/data.json");

export default async (req, res) => {
  const buffer = await fs.readFile(dataFilePath);
  res.statusCode = 200;
  res.json(buffer.toString());
};
