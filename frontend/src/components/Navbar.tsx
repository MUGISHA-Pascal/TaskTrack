import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-row justify-between shadow-md h-14 items-center p-4 ">
        <h2 className="text-gray-500 font-bold text-2xl">TaskTrack</h2>
        <div>
          <Link to="/signup" className="rounded-xl font-bold mr-4 ">
            SignUp
          </Link>
          <Link
            to="/"
            className="bg-gray-500 pl-4 pr-4 p-2 hover:opacity-70  font-bold text-white rounded-xl"
          >
            Home
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
