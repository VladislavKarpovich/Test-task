import { promises as fs } from "fs";
import path from "path";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();
const namesFilePath = path.join(serverRuntimeConfig.PROJECT_ROOT, "./data/names.json");

export default async (req, res) => {
  const buffer = await fs.readFile(namesFilePath);
  res.statusCode = 200;
  res.json(buffer.toString());
};
