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
  } catch (error) {
    console.log(error);
  }
};

export const get_task = async () => {
  try {
    const alltodos = await axios.get(`${baseURL}/get_task`);
    return alltodos;
  } catch (error) {
    console.log(error);
  }
};
