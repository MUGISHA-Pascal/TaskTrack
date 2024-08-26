import { Router } from "express";
import { login_post, signup_post } from "../controllers/authController";
const authRoutes = Router();

authRoutes.post("/login", login_post);

authRoutes.post("/signup", signup_post);

export default authRoutes;
