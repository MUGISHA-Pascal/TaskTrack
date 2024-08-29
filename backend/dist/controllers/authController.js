"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup_post = exports.login_post = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const keys_1 = __importDefault(require("../keys"));
const maxAge = 3 * 24 * 60 * 60;
const handleError = (err) => {
    const errors = {};
    if (err.code == 11000) {
        errors["email"] = "email arleady exists";
    }
    if (err.message == "incorrect username") {
        errors["username"] = "username is invalid";
    }
    if (err.message == "incorrect password") {
        errors["password"] = "password is invalid";
    }
    if (err.message.includes("User validation failed")) {
        const errorValues = Object.values(err.errors);
        errorValues.forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
};
const createToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, keys_1.default.jwt_key, { expiresIn: "1h" });
};
const login_post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield user_1.default.login(username, password);
        const token = createToken(user._id.toString());
        res.cookie("jwt", token, { maxAge: maxAge * 1000 });
        console.log(token);
        res.status(200).json({ user });
    }
    catch (error) {
        console.log(handleError(error));
        res.status(400).json({ errors: handleError(error) });
    }
});
exports.login_post = login_post;
const signup_post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const user = yield new user_1.default({ username, email, password }).save();
        const token = createToken(user._id.toString());
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user });
    }
    catch (error) {
        res.status(400).json({ errors: handleError(error) });
    }
});
exports.signup_post = signup_post;
