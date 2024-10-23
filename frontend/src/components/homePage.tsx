import React from "react";
import { MdPlayCircleOutline } from "react-icons/md";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col">
        <section
          id="manage"
          className="flex mt-[100px] flex-row space-x-[100px]"
        >
          <div className="flex flex-col space-y-[20px]">
            <p className="font-normal text-[70px] leading-[90px] w-[400px]">
              Manage your Tasks Quickly
            </p>
            <p className="text-gray-400 text-[12px] w-[300px]">
              Use the shortest possible time to create tasks, use all the free
              features to make the most of them
            </p>
            <div className="flex flex-row space-x-[20px]">
              <button className="rounded-[10px] text-white bg-gray-400 p-[7px] flex justify-center hover:bg-opacity-80 w-[100px] font-bold mr-4">
                Learn more
              </button>
              <button className="flex flex-row space-x-[10px] justify-center items-center text-[25px] text-gray-400">
                <div className="shadow-lg p-0 rounded-full">
                  <MdPlayCircleOutline />
                </div>
                <p className="text-black text-[14px]  font-bold">Watch video</p>
              </button>
            </div>
          </div>
          <div className="bg-gray-500 w-[300px] h-[400px]"></div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
