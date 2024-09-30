import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import keys from "./keys";
import taskRoutes from "./routes/taskRoutes";
// import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes";

const app: Express = express();
mongoose.connect(
  "mongodb+srv://pascal:tasktrack@tasktrack.9wydl.mongodb.net/?retryWrites=true&w=majority&appName=tasktrack"
);
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true,
// };
app.use(cookieParser());
app.use(express.json());
// app.use(cors());
app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);
app.listen(4000, () => {
  console.log("app is running on");
});
