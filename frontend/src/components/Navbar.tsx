import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-row justify-between shadow-md h-14 items-center p-4 ">
        <h2 className="text-gray-500 font-bold text-2xl">TaskTrack</h2>
        <div>
          <button className="rounded-xl font-bold mr-4 ">login</button>
          <button className="bg-gray-500 pl-4 pr-4 h-10 hover:opacity-70 font-bold text-white rounded-xl">
            Home
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
