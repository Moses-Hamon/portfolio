import express from "express";

const app = express();
const port = process.env.API_PORT || 4000;

app.listen(port, () => {
  console.info(`App listening on port: ${port}`);
});
