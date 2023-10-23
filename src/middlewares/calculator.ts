import { Request, Response, NextFunction } from "express";
import { ICalculator } from "../types";

export function validateCalculator(
  req: Request<{}, any, ICalculator>,
  res: Response,
  next: NextFunction
) {
  const { operator, operand1, operand2 } = req.body;
  if (typeof operand1 !== "number" || typeof operand2 !== "number") {
    return res.status(400).send({ message: "Invalid data types" });
  }
  if (
    operator !== "+" &&
    operator !== "-" &&
    operator !== "*" &&
    operator !== "/"
  ) {
    return res.status(400).send({ message: "Invalid operator" });
  }
  next();
}
