import express from "express";
import { healthRouter, calculatorRouter } from "./routes";
import { errorHandler, logger, timeStamp } from "./middlewares";

const app = express();
const port = 3000;

app.use(logger);
app.use(timeStamp);
app.use(express.json());
app.use("/health", healthRouter);
app.use("/calculator", calculatorRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
