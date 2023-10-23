import { Request, Router } from "express";
import { logger } from "../middlewares";
import { timeStamp } from '../middlewares/time';

export const router = Router();

router.get("/", (req : Request , res) => {
  res.send({
    message: "gell all calculations",
    timeStamp: req.time,
    data: [
      { id: 1, name: "calc1", result: 10 },
      { id: 2, name: "calc2", result: 20 },
      { id: 3, name: "calc3", result: 30 },
    ],
  });
});

router.get("/:id", (req : Request, res) => {
  res.send({
    message: "get calculation by id",
    timeStamp: req.time,
    id: req.params.id,
    result: 10,
  });
});
