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
try {
  mongoose.connect(
    "mongodb+srv://pascal:tasktrack@tasktrack.9wydl.mongodb.net/?retryWrites=true&w=majority&appName=tasktrack"
  );
  console.log("Connected to the database");
} catch (error) {
  console.log("an error occured while connecting");
}
const corsOptions = {
  origin: "https://task-track-peach.vercel.app/",
  credentials: true,
};
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));
app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);
app.listen(process.env.PORT || 4000, () => {
  console.log("app is running on");
});
