import React from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Cookies from "js-cookie";
import image from "../assets/image.png";
const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-row space-x-[290px] h-14 items-center p-4 pt-[70px]">
        <h2 className="text-gray-500 font-bold text-2xl ml-[70px]">
          TaskTrack
        </h2>
        <div className="bg-white/10 backdrop-blur-lg p-[10px] text-gray-400 shadow-sm rounded-full space-x-[20px] w-[490px] flex flex-row justify-center items-center border-[1px] border-gray ">
          <RouterLink
            to="/"
            className="hover:cursor-pointer rounded-xl font-bold "
          >
            Home
          </RouterLink>
          <Link
            smooth={true}
            duration={500}
            spy={true}
            className="hover:cursor-pointer rounded-xl font-bold"
            offset={-10}
            to="about"
          >
            About
          </Link>
          <Link
            smooth={true}
            duration={500}
            spy={true}
            className="hover:cursor-pointer rounded-xl font-bold"
            offset={-10}
            to="features"
          >
            Features
          </Link>
          <Link
            smooth={true}
            duration={500}
            spy={true}
            className="hover:cursor-pointer rounded-xl font-bold"
            offset={-10}
            to="superiority"
          >
            superiority
          </Link>
          <Link
            smooth={true}
            duration={500}
            spy={true}
            className="hover:cursor-pointer rounded-xl font-bold"
            offset={-10}
            to="help"
          >
            help
          </Link>
        </div>
        <RouterLink
          to="/signup"
          className="rounded-xl hover:cursor-pointer text-white bg-gray-400 p-[6px] flex justify-center hover:bg-opacity-80 w-[100px] font-bold mr-4"
        >
          SignUp
        </RouterLink>
      </nav>
    </div>
  );
};

export default Navbar;
