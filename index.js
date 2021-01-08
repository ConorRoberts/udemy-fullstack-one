import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ hey: "pal" });
});

const PORT = process.env.PORT;
app.listen(PORT);