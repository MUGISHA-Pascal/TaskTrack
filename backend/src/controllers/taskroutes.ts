import { Request, Response } from "express";
import Todo from "../models/todo";

export const add_task = async (req: Request, res: Response) => {
  try {
    const { name, description, status } = req.body;
    const todos = await new Todo({ name, description, status }).save();
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
    const todos = await Todo.find();
    res.status(201).json({ todos });
  } catch (error) {
    console.log(error);
  }
};
