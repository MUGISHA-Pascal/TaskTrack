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
        // console.log("Fetched tasks:", data.todos);
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
      // console.log("Updated tasks:", updatedData.todos);
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
    // console.log("Updated tasks:", updatedData.todos);
    setTodos(updatedData.todos);
  };

  return (
    <>
      <section className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="shadow-md flex flex-col justify-center items-center p-4 mt-6 border-2 border-t-gray-500"
        >
          <h2 className="text-gray-500 font-bold text-xl mb-4">Add task</h2>
          <div>
            <label htmlFor="name" className="font-bold mr-4">
              Name:
            </label>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              className="shadow-md border-2 border-gray-500 rounded-lg pl-2 pr-2 h-8 focus:outline-none mr-4"
            />
            <label htmlFor="description" className="font-bold mr-4">
              Description:
            </label>
            <input
              type="text"
              value={description}
              name="description"
              id="description"
              required
              onChange={(e) => setDescription(e.target.value)}
              className="shadow-md border-2 border-gray-500 rounded-lg pl-2 pr-2 h-8 focus:outline-none mr-4"
            />
            <button
              className="bg-gray-500 pl-4 pr-4 h-8 text-sm hover:opacity-70 font-bold text-white rounded-xl"
              type="submit"
            >
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="flex flex-col justify-center mt-10 space-y-4 items-center border-2 w-[725px] border-t-gray-500">
        <h2 className="text-gray-500 font-bold text-xl mt-4 mb-4">My Tasks</h2>
        {todos.map((todo) => (
          <div
            key={todo._id}
            className="flex flex-row w-[725px] p-4 justify-between border-2 border-gray-200 shadow-md"
          >
            <div>
              <h2 className="text-gray-500 font-bold">{todo.name}</h2>
              <p
                className={`font-thin text-sm ${
                  todo.status ? "line-through" : ""
                }`}
              >
                {todo.description}
              </p>
            </div>
            <div>
              <button
                className="border-2 border-gray-500 text-gray-500 mr-4 pl-4 pr-4 h-8 text-sm hover:opacity-70 font-bold rounded-xl"
                onClick={() => {
                  handleComplete(todo._id);
                }}
              >
                Complete
              </button>
              <button className="bg-gray-500 pl-4 pr-4 h-8 text-sm hover:opacity-70 font-bold text-white rounded-xl">
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
