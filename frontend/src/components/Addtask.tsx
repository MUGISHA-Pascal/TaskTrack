import React from "react";

const Addtask = () => {
  return (
    <>
      <section className="flex justify-center">
        <form
          action=""
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
              id="name"
              className="shadow-md border-2 border-gray-500 rounded-lg pl-2 pr-2 h-8 focus:outline-none mr-4"
            />
            <label htmlFor="description" className="font-bold mr-4">
              description:
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="shadow-md border-2 border-gray-500 rounded-lg pl-2 pr-2 h-8 focus:outline-none mr-4"
            />
            <button className="bg-gray-500 pl-4 pr-4 h-8 text-sm hover:opacity-70 font-bold text-white rounded-xl">
              add task
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Addtask;
