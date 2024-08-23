import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import keys from "./keys";

const app: Express = express();
mongoose.connect(keys.mongoURL);
app.use(express.json());
app.listen(3000, () => {
  console.log("app is running on http://localhost:3000");
});
