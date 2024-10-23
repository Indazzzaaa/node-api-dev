import { debug } from "debug";
import config from "config";
import express from "express";
import morgan from "morgan";

const DEV = "development";
const PROD = "production";

const startupDebugger = debug("app:start");
const app = express();
const PORT = config.get("PORT");

startupDebugger("Welcome to api dev with the nodejs");

if (app.get("env") == DEV) {
  app.use(morgan("tiny"));
  startupDebugger("Morgan enabled");
}

interface IConfig {
  PORT: number;
}

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(config.get<IConfig>("PORT"), () =>
  startupDebugger(`Server started on : http://localhost:${PORT}`)
);
