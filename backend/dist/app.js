"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const keys_1 = __importDefault(require("./keys"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const app = (0, express_1.default)();
mongoose_1.default.connect(keys_1.default.mongoURL);
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );
app.use((0, cors_1.default)());
app.use("/task", taskRoutes_1.default);
app.use("/auth", authRoutes_1.default);
app.listen(4000, () => {
    console.log("app is running on http://localhost:4000");
});
