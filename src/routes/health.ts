import { Request, Router } from "express";
import { timeStamp } from "../middlewares/time";

export const router = Router();

router.get("/", (req: Request, res) => {
  res.send({ message: "ok", timeStamp: req.time });
});
