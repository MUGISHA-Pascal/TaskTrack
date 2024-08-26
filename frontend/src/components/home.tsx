import React from "react";
import Navbar from "./Navbar";
import Addtask from "./Addtask";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./login";

const Home = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="flex flex-col justify-center items-center">
          <Routes>
            <Route path="/tasks" element={<Addtask />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default Home;
