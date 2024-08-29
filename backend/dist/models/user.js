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
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
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
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcryptjs_1.default.genSalt();
        this.password = yield bcryptjs_1.default.hash(this.password, salt);
        next();
    });
});
userSchema.statics.login = function (username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield this.findOne({ username });
        console.log(user);
        if (user) {
            const auth = yield bcryptjs_1.default.compare(password, user.password);
            if (auth) {
                return user;
            }
            else {
                throw Error("incorrect password");
            }
        }
        else {
            throw Error("incorrect username");
        }
    });
};
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
