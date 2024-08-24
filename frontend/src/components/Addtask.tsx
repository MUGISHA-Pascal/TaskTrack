import React from "react";

const Addtask = () => {
  return (
    <>
      <section className="flex justify-center">
        <form
          action=""
          className="shadow-md flex flex-col justify-center items-center"
        >
          <h2>Add task</h2>
          <div>
            <label htmlFor="name">name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="password">name:</label>
            <input type="password" name="password" id="password" />
          </div>
        </form>
      </section>
    </>
  );
};

export default Addtask;
