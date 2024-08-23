import express, { Express, Request, Response } from "express";

const app: Express = express();

app.listen(3000, () => {
  console.log("app is running on http://localhost:3000");
});
