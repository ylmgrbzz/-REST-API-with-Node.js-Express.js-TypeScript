import express from "express";
import { healthRouter, calculatorRouter } from "./routes";
import { logger, timeStamp } from "./middlewares";

const app = express();
const port = 3000;

app.use(logger)
app.use(timeStamp)
app.use("/health", healthRouter);
app.use("/calculator", calculatorRouter);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
