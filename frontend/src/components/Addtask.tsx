import React, { FormEvent, useEffect, useState } from "react";

interface ITodo {
  _id: string;
  name: string;
  description: string;
  status: boolean;
}

const Addtask: React.FC = () => {
  const baseURL = "http://localhost:4000/task";
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [status, setStatus] = useState(false);
  const [postTodo, setPostTodo] = useState({
    name: "",
    description: "",
    status: status,
  });

  useEffect(() => {
    fetch(`${baseURL}/get_all_task`)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.todos);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newPostTodo = { name, description, status: false };
    setPostTodo(newPostTodo);

    try {
      const postData = await fetch(`${baseURL}/add_task`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPostTodo),
      });

      if (!postData.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await postData.json();
      console.log("Task added:", result);

      const updatedTasks = await fetch(`${baseURL}/get_all_task`);
      const updatedData = await updatedTasks.json();
      setTodos(updatedData.todos);

      setName("");
      setDescription("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleComplete = async (id: string) => {
    const pos = await fetch(`${baseURL}/update_status_task`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id, status: true }),
    });
    const resu = await pos.json();
    const updatedTasks = await fetch(`${baseURL}/get_all_task`);
    const updatedData = await updatedTasks.json();
    setTodos(updatedData.todos);
  };

  const handleDelete = async (id: string) => {
    const response = await fetch(`${baseURL}/delete_task`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const updatedTasks = await fetch(`${baseURL}/get_all_task`);
    const updatedData = await updatedTasks.json();

    setTodos(updatedData.todos);
  };

  return (
    <>
      <section className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="shadow-md flex flex-col lg:flex-row justify-center items-center p-4 mt-6 border-2 border-t-gray-500 w-full max-w-4xl"
        >
          <h2 className="text-gray-500 font-bold text-xl mb-4 lg:mb-0 lg:mr-4">
            Add task
          </h2>
          <div className="w-full lg:w-auto flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center">
              <label htmlFor="name" className="font-bold lg:mr-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                className="shadow-md border-2 border-gray-500 rounded-lg pl-2 pr-2 h-8 focus:outline-none w-full lg:w-auto"
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between lg:items-center">
              <label htmlFor="description" className="font-bold lg:mr-2">
                Description:
              </label>
              <input
                type="text"
                value={description}
                name="description"
                id="description"
                required
                onChange={(e) => setDescription(e.target.value)}
                className="shadow-md border-2 border-gray-500 rounded-lg pl-2 pr-2 h-8 focus:outline-none w-full lg:w-auto"
              />
            </div>
            <button
              className="bg-gray-500 pl-4 pr-4 h-8 text-sm hover:opacity-70 font-bold text-white rounded-xl w-full lg:w-auto"
              type="submit"
            >
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="flex flex-col justify-center mt-10 space-y-4 items-center border-2 w-full max-w-4xl border-t-gray-500">
        <h2 className="text-gray-500 font-bold text-xl mt-4 mb-4">My Tasks</h2>
        {todos.map((todo) => (
          <div
            key={todo._id}
            className="flex flex-col lg:flex-row w-full justify-between p-4 border-2 border-gray-200 shadow-md space-y-4 lg:space-y-0"
          >
            <div>
              <h2
                className={`text-gray-500 font-bold ${
                  todo.status ? "line-through" : ""
                }`}
              >
                {todo.name}
              </h2>
              <p
                className={`font-thin text-sm ${
                  todo.status ? "line-through" : ""
                }`}
              >
                {todo.description}
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                className="border-2 border-gray-500 text-gray-500 pl-4 pr-4 h-8 text-sm hover:opacity-70 font-bold rounded-xl"
                onClick={() => handleComplete(todo._id)}
              >
                Complete
              </button>
              <button
                className="bg-gray-500 pl-4 pr-4 h-8 text-sm hover:opacity-70 font-bold text-white rounded-xl"
                onClick={() => handleDelete(todo._id)}
              >
                Remove Task
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Addtask;
