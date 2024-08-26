import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import keys from "./keys";
import taskRoutes from "./routes/taskRoutes";
import cors from "cors";
import authRoutes from "./routes/authRoutes";

const app: Express = express();
mongoose.connect(keys.mongoURL);
app.use(express.json());
app.use(cors());
app.use("/task", taskRoutes);
app.use("/auth", authRoutes);
app.listen(4000, () => {
  console.log("app is running on http://localhost:4000");
});
