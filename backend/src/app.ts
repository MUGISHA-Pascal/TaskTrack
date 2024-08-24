import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import keys from "./keys";
import taskRoutes from "./routes/taskRoutes";

const app: Express = express();
mongoose.connect(keys.mongoURL);
app.use(express.json());
app.use("/task", taskRoutes);
app.listen(3000, () => {
  console.log("app is running on http://localhost:3000");
});
