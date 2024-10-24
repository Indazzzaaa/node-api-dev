import { debug } from "debug";
import config from "config";
import express from "express";
import morgan from "morgan";
import userRoute from "./user/userRoute";

enum Environment {
  Development = "development",
  Testing = "test",
  Production = "production",
}

const startupDebugger = debug("app:start");
const app = express();
const PORT = config.get("PORT");

if (app.get("env") == Environment.Development) {
  app.use(morgan("tiny"));
  startupDebugger("[Dev Environment]");
  startupDebugger("Morgan enabled");
} else {
  startupDebugger("[Prod Environment]");
}

// middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

// users route
app.use("/users", userRoute);

// only run if not in test environment
if (app.get("env") !== Environment.Testing) {
  app.listen(config.get("PORT"), () =>
    startupDebugger(`Server started on : http://localhost:${PORT}`)
  );
}

export default app;
