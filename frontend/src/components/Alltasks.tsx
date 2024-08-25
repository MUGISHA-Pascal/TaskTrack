import React, { useEffect, useState } from "react";
const baseURL = "http://localhost:4000/task/";

const Alltasks = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(`${baseURL}get_all_task`)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.todos);
      });
  }, []);
  return (
    <>
      <section className="flex flex-col justify-center mt-10 space-y-4 items-center border-2 w-[725px] border-t-gray-500">
        <h2 className="text-gray-500 font-bold text-xl mt-4 mb-4"> My tasks</h2>
        {todos.map((todo: any) => (
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

export default Alltasks;
