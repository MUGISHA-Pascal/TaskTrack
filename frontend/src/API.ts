import axios, { AxiosResponse } from "axios";

const baseURL: string = "http://localhost:4000/task";

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseURL + "/get_all_task"
    );
    return todos;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseURL + "/add_task",
      todo
    );
    return saveTodo;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, "status"> = {
      status: true,
    };
    const updateTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseURL}/update_todo/${todo._id}`,
      todoUpdate
    );
    return updateTodo;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deleteTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseURL}/delete_task/${_id}`
    );
    return deleteTodo;
  } catch (error: any) {
    throw new Error(error);
  }
};
