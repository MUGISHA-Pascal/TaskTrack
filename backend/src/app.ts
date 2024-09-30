import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import keys from "./keys";
import taskRoutes from "./routes/taskRoutes";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";

const app: Express = express();
dotenv.config();

const connect = async () => {
  console.log("hello database");
  await mongoose.connect(process.env.MONGODB_URI as string).then(() => {
    console.log("connected");
  });
};
connect();

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("app is running on on port ", PORT);
});
