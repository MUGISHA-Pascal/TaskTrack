import { Router } from "express";
import {
  login_get,
  login_post,
  signup_get,
  signup_post,
} from "../controllers/authController";
const authRoutes = Router();

authRoutes.get("/login", login_get);
authRoutes.post("/login", login_post);
authRoutes.get("/signup", signup_get);
authRoutes.post("/signup", signup_post);

export default authRoutes;
