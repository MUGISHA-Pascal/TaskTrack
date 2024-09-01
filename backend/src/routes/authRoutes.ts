import { Router } from "express";
import { login_post, signup_post } from "../controllers/authController";
import cookieParser from "cookie-parser";
const authRoutes = Router();
authRoutes.use(cookieParser());

authRoutes.post("/login", login_post);

authRoutes.post("/signup", signup_post);

export default authRoutes;
