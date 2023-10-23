import { Request, Router } from "express";
import { ICalculator } from "../types";
import { validateCalculator } from "../middlewares";

export const router = Router();

router.get("/", (req: Request, res) => {
  res.send({
    message: "get all calculations",
    timeStamp: req.time,
    data: [
      { id: 1, name: "calc1", result: 10 },
      { id: 2, name: "calc2", result: 20 },
      { id: 3, name: "calc3", result: 30 },
    ],
  });
});

router.get("/:id", (req: Request, res) => {
  res.send({
    message: "get calculation by id",
    timeStamp: req.time,
    id: req.params.id,
    result: 10,
  });
});

router.post(
  "/",
  validateCalculator,
  (req: Request<{}, any, ICalculator>, res) => {
    const { operator, operand1, operand2 } = req.body;
    let result: number | string;
    switch (operator) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "*":
        result = operand1 * operand2;
        break;
      case "/":
        result = operand1 / operand2;
        break;
      default:
        result = "invalid operator";
    }
    res.send({
      message: "create new calculation",
      timeStamp: req.time,
      data: req.body,
      result,
    });
    console.log(req.body);
  }
);
