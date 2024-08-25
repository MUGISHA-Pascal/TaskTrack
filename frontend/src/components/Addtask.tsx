import React, { useEffect, useState } from "react";
import { add_task } from "../API";

const Addtask = () => {
  const [description, setdescription] = useState("");
  const [name, setname] = useState("");
  const [todo, setodo] = useState({
    name: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await e.preventDefault();
    setodo({
      name: name,
      description: description,
    });
  };
  useEffect(() => {
    if (todo) {
      add_task(todo);
    }
  }, []);

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
    </>
  );
};

export default Addtask;
