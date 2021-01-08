import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ hey: "chief" });
});

const PORT = process.env.PORT;
app.listen(PORT);