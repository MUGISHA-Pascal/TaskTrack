import React from "react";
import Navbar from "./Navbar";
import Addtask from "./Addtask";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <Addtask />
        {/* <Alltasks /> */}
      </div>
    </>
  );
};

export default Home;
