import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
  res.send({
    message: "gell all calculations",
    data: [
      { id: 1, name: "calc1", result: 10 },
      { id: 2, name: "calc2", result: 20 },
      { id: 3, name: "calc3", result: 30 },
    ],
  });
});

router.get("/:id", (req, res) => {
  res.send({
    message: "get calculation by id",
    id : req.params.id,
    result: 10,
});
});
