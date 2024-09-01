"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const authRoutes = (0, express_1.Router)();
authRoutes.use((0, cookie_parser_1.default)());
authRoutes.post("/login", authController_1.login_post);
authRoutes.post("/signup", authController_1.signup_post);
authRoutes.get("/logout", authController_1.logout);
exports.default = authRoutes;
