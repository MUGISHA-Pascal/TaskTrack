"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const keys_1 = __importDefault(require("./keys"));
const app = (0, express_1.default)();
mongoose_1.default.connect(keys_1.default.mongoURL);
app.use(express_1.default.json());
app.listen(3000, () => {
    console.log("app is running on http://localhost:3000");
});
