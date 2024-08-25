import axios from "axios";
const baseURL = "http://localhost:3000/task/";

export const add_task = async (todo: any) => {
  try {
    const formData = {
      name: todo.name,
      description: todo.description,
      status: false,
    };
    const todos = await axios.post(`${baseURL}/add_task`, formData);
    return todos;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const get_task = async () => {
  try {
    const alltodos: ITodo[] = await axios.get(`${baseURL}/get_task`);
    return alltodos;
  } catch (error: any) {
    throw new Error(error);
  }
};

// export const update_task = async (todo) => {
// 	try {

// 	} catch (error: any) {
// 		throw new Error(error);
// 	}
// };
