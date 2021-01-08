import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ hey: "guy" });
});

const PORT = process.env.PORT;
app.listen(PORT);