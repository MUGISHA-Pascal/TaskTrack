import React from "react";
import Navbar from "./Navbar";
import Addtask from "./Addtask";
import Alltasks from "./Alltasks";

const Home = () => {
  return (
    <>
      <Navbar />
      <Addtask />
      <Alltasks />
    </>
  );
};

export default Home;
