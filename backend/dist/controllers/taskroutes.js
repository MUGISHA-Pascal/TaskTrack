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
exports.get_task = exports.add_task = void 0;
const todo_1 = __importDefault(require("../models/todo"));
const add_task = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, status } = req.body;
        const todos = yield new todo_1.default({ name, description, status }).save();
        const allTodos = yield todo_1.default.find();
        res
            .status(201)
            .json({ message: "todo added", todo: todos, allTodos: allTodos });
    }
    catch (error) {
        console.log(error);
    }
});
exports.add_task = add_task;
const get_task = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.default.find();
        res.status(201).json({ todos });
    }
    catch (error) {
        console.log(error);
    }
});
exports.get_task = get_task;
