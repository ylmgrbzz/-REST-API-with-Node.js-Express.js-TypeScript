import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/:id", (req, res) => {
  res.send(`Hello ${req.params.id}!`);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});