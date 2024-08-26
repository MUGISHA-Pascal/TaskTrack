// import { response } from "express";
import React, { FormEvent, useEffect, useState } from "react";

const Addtask = () => {
  const baseURL = "http://localhost:4000/task";
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [todos, setTodo] = useState([]);
  const [postTodo, setPostTodo] = useState({
    name: "",
    description: "",
    status: false,
  });

  useEffect(() => {
    fetch(`${baseURL}/get_all_task`)
      .then((response) => response.json())
      .then((data) => setTodo(data.todos))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setPostTodo({ name: name, description: description, status: false });

    const postData = await fetch(`${baseURL}/add_task`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postTodo),
    });
    const results = await postData.json();
    console.log(results);
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
              name :
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              id="name"
              className="shadow-md border-2 border-gray-500 rounded-lg pl-2 pr-2 h-8 focus:outline-none mr-4"
            />
            <label htmlFor="description" className="font-bold mr-4">
              description:
            </label>
            <input
              type="text"
              value={description}
              name="description"
              id="description"
              onChange={(e) => {
                setdescription(e.target.value);
              }}
              className="shadow-md border-2 border-gray-500 rounded-lg pl-2 pr-2 h-8 focus:outline-none mr-4"
            />
            <button
              className="bg-gray-500 pl-4 pr-4 h-8 text-sm hover:opacity-70 font-bold text-white rounded-xl"
              type="submit"
            >
              add task
            </button>
          </div>
        </form>
      </section>
      <section className="flex flex-col justify-center mt-10 space-y-4 items-center border-2 w-[725px] border-t-gray-500">
        <h2 className="text-gray-500 font-bold text-xl mt-4 mb-4"> My tasks</h2>
        {todos.map((todo: ITodo) => (
          <div
            key={todo._id}
            className="flex flex-row w-[725px] p-4 justify-between border-2 border-gray-200  shadow-md"
          >
            <div>
              <h2 className="text-gray-500 font-bold">{todo.name}</h2>
              <p className="font-thin text-sm">{todo.description}</p>
            </div>
            <div>
              <button className="border-2 border-gray-500 text-gray-500 mr-4 pl-4 pr-4 h-8 text-sm hover:opacity-70 font-bold rounded-xl">
                complete
              </button>
              <button className="bg-gray-500 pl-4 pr-4 h-8 text-sm hover:opacity-70 font-bold text-white rounded-xl">
                remove task
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Addtask;
