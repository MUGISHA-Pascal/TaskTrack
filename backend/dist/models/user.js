"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: [true, "please enter the username"],
    },
    password: {
        type: String,
        required: [true, "please enter the password"],
        minLength: [6, "the password is not six characters"],
    },
    email: {
        type: String,
        unique: true,
        validate: [isEmail_1.default, "your email is not valid"],
    },
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
