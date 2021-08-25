import express from "express";

const app = express();
const port = process.env.API_PORT || 4000;

app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(port, () => {
  console.info(`App listening on port: ${port}`);
});
