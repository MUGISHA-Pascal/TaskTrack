import React from "react";
import Navbar from "./Navbar";
import Addtask from "./Addtask";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import HomePage from "./homePage";

const Home = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="flex flex-col justify-center items-center">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks" element={<Addtask />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default Home;
