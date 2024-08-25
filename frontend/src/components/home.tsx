import React from "react";
import Navbar from "./Navbar";
import Addtask from "./Addtask";
import Alltasks from "./Alltasks";

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
