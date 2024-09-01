import { Request, Response } from "express";
import Todo from "../models/todo";
import jwt, { JwtPayload } from "jsonwebtoken";

export const add_task = async (req: Request, res: Response) => {
  try {
    const { name, description, status } = req.body;
    const token = req.cookies.jwt;
    const decoded = (await jwt.decode(token)) as JwtPayload;
    const userId = decoded.id;
    const todos = await new Todo({ name, description, status, userId }).save();
    const allTodos = await Todo.find();
    res
      .status(201)
      .json({ message: "todo added", todo: todos, allTodos: allTodos });
  } catch (error) {
    console.log(error);
  }
};

export const get_task = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const token = req.cookies.jwt;
    const decoded = (await jwt.decode(token)) as JwtPayload;
    const userId = decoded.id;
    const todos = await Todo.findById({ userId, _id: id });
    res.status(201).json({ todos });
  } catch (error) {
    console.log(error);
  }
};

export const get_all_task = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.jwt;
    const decoded = (await jwt.decode(token)) as JwtPayload;
    const userId = decoded.id;
    const todos = await Todo.find({ userId });
    res.status(201).json({ todos });
  } catch (error) {
    console.log(error);
  }
};

export const update_task = async (req: Request, res: Response) => {
  try {
    const { name, description, status, id } = req.body;
    const updatetodo = await Todo.findByIdAndUpdate(
      { _id: id },
      { name, description, status }
    );
    const allTodos = await Todo.find();
    res.status(201).json({
      message: "updated a todo",
      todo: updatetodo,
      allTodos: allTodos,
    });
  } catch (error) {
    console.log(error);
  }
};

export const delete_task = async (req: Request, res: Response) => {
  const { id } = req.body;
  const deletedTask = await Todo.findByIdAndDelete({ _id: id });
  const allTodos = await Todo.find();
  res
    .status(201)
    .json({ message: "updated a todo", todo: deletedTask, allTodos: allTodos });
};

export const update_status = async (req: Request, res: Response) => {
  try {
    const { id, status } = req.body;
    const updatestatus = await Todo.findByIdAndUpdate({ _id: id }, { status });
    await res.json({ updatestatus });
  } catch (error) {
    console.log(error);
  }
};
