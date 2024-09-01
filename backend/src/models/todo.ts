import { ITodo } from "../interfaces/itodo";
import { model, Schema } from "mongoose";

const todoSchema = new Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      // required: true,
    },
    status: {
      type: Boolean,
      // required: true,
    },
    userId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Todo = model<ITodo>("Todo", todoSchema);
export default Todo;
