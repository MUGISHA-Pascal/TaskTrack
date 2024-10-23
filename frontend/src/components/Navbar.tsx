import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import image from "../assets/image.png";
const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-row space-x-[300px] h-14 items-center p-4 pt-[70px]">
        <h2 className="text-gray-500 font-bold text-2xl ml-[70px]">
          TaskTrack
        </h2>
        <div className="bg-white/10 backdrop-blur-lg p-[10px] text-gray-400 shadow-sm rounded-full space-x-[20px] w-[350px] flex flex-row justify-center items-center border-[1px] border-gray ">
          <Link to="/" className="rounded-xl font-bold ">
            Home
          </Link>
          <Link to="" className="rounded-xl font-bold mr-4 ">
            About
          </Link>
          <Link to="#" className="rounded-xl font-bold mr-4 ">
            Features
          </Link>
          <Link to="#" className="rounded-xl font-bold">
            help
          </Link>
        </div>
        <Link
          to="/signup"
          className="rounded-xl text-white bg-gray-400 p-[6px] flex justify-center hover:bg-opacity-80 w-[100px] font-bold mr-4"
        >
          SignUp
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
