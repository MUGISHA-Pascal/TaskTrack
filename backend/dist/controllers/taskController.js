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
exports.update_status = exports.delete_task = exports.update_task = exports.get_all_task = exports.get_task = exports.add_task = void 0;
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
        const { id } = req.body;
        const todos = yield todo_1.default.findById({ _id: id });
        res.status(201).json({ todos });
    }
    catch (error) {
        console.log(error);
    }
});
exports.get_task = get_task;
const get_all_task = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.default.find();
        res.status(201).json({ todos });
    }
    catch (error) {
        console.log(error);
    }
});
exports.get_all_task = get_all_task;
const update_task = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, status, id } = req.body;
        const updatetodo = yield todo_1.default.findByIdAndUpdate({ _id: id }, { name, description, status });
        const allTodos = yield todo_1.default.find();
        res.status(201).json({
            message: "updated a todo",
            todo: updatetodo,
            allTodos: allTodos,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.update_task = update_task;
const delete_task = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const deletedTask = yield todo_1.default.findByIdAndDelete({ _id: id });
    const allTodos = yield todo_1.default.find();
    res
        .status(201)
        .json({ message: "updated a todo", todo: deletedTask, allTodos: allTodos });
});
exports.delete_task = delete_task;
const update_status = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, status } = req.body;
        const updatestatus = yield todo_1.default.findByIdAndUpdate({ _id: id }, { status });
        yield res.json({ updatestatus });
    }
    catch (error) {
        console.log(error);
    }
});
exports.update_status = update_status;
