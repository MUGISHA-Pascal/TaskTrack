import React from "react";
import { MdPlayCircleOutline } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { IoShieldCheckmark } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { TbCirclePercentageFilled } from "react-icons/tb";
import { GoArrowRight } from "react-icons/go";
const HomePage = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <section
          id="manage"
          className="flex mt-[100px] items-center justify-center flex-row space-x-[100px] pb-[100px]"
        >
          <div className="flex flex-col space-y-[20px]">
            <p className="font-normal text-[70px] leading-[90px] w-[400px]">
              Manage your <span className="text-gray-400">Tasks</span> Quickly
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
        <section
          id="features"
          className="flex bg-gray-100 pt-[70px] pb-[100px] flex-col justify-center items-center p-[10px] space-y-[40px]"
        >
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-[15px] text-gray-600">Feature</p>
            <h2 className="font-bold text-[25px]">Our Special Feature</h2>
          </div>
          <div className="flex flex-row space-x-[20px] items-center justify-center">
            <div className="h-[150px] bg-white flex flex-col space-y-[10px] justify-center shadow-md rounded-[10px] w-[200px] items-center">
              <div className="h-[30px] w-[30px] bg-gray-100 flex justify-center rounded-[5px] items-center">
                <HiMiniUsers />
              </div>
              <h1 className="font-bold">User Friendly</h1>
              <p className="text-gray-400 text-[12px] w-[170px]">
                Easy to use for people who are either new or professional
              </p>
            </div>
            <div className="h-[150px]  bg-white flex flex-col space-y-[10px] justify-center shadow-md rounded-[10px] w-[200px] items-center">
              <div className="h-[30px] w-[30px] bg-gray-100 flex justify-center rounded-[5px] items-center">
                <IoShieldCheckmark />
              </div>
              <h1 className="font-bold">Trusted app</h1>
              <p className="text-gray-400 text-[12px] w-[170px]">
                Official application that is trusted for security
              </p>
            </div>
            <div className="h-[150px] w-[200px] bg-white flex flex-col space-y-[10px] justify-center shadow-md rounded-[10px] items-center">
              <div className="h-[30px] w-[30px] bg-gray-100 flex justify-center rounded-[5px] items-center">
                <TiDocumentText />
              </div>
              <h1 className="font-bold">Flexibility</h1>
              <p className="text-gray-400 text-[12px] w-[170px]">
                Tasking can be opened on all existing devices
              </p>
            </div>
            <div className="h-[150px] w-[200px] bg-white flex flex-col space-y-[10px] justify-center shadow-md rounded-[10px] items-center">
              <div className="h-[30px] w-[30px] bg-gray-100 flex justify-center rounded-[5px] items-center">
                <TbCirclePercentageFilled />
              </div>
              <h1 className="font-bold">100% Free</h1>
              <p className="text-gray-400 text-[12px] w-[170px]">
                This application is completely free without any charges
              </p>
            </div>
          </div>
        </section>
        <section
          id="superiority"
          className="flex flex-row pb-[100px] space-x-[140px] bg-white pt-[100px] items-center justify-center"
        >
          <div className="bg-gray-400 h-[300px] w-[300px]"></div>
          <div className="flex flex-col items-center justify-center space-y-[30px]">
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-[15px] text-gray-600">Feature</p>
              <h2 className="font-bold text-[25px]">Our Special Feature</h2>
            </div>
            <p className="text-gray-400 text-[12px] w-[300px]">
              Tasking is very easy to use ,bedides that it also has many
              excellent features that other task manager applications don't have
              , so task management can be done easily
            </p>
            <button className="rounded-[10px] text-white bg-gray-400 p-[7px] flex justify-center hover:bg-opacity-80 w-[100px] font-bold mr-4">
              Learn more
            </button>
          </div>
        </section>
        <section
          id="working"
          className="flex flex-row pb-[100px] space-x-[140px] bg-gray-100 pt-[100px] items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center space-y-[30px]">
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-[15px] text-gray-600">Feature</p>
              <h2 className="font-bold text-[25px]">Our Special Feature</h2>
            </div>
            <p className="text-gray-400 text-[12px] w-[300px]">
              Tasking is very easy to use ,bedides that it also has many
              excellent features that other task manager applications don't have
              , so task management can be done easily
            </p>
            <button className="rounded-[10px] text-white bg-gray-400 p-[7px] flex justify-center hover:bg-opacity-80 w-[100px] font-bold mr-4">
              Learn more
            </button>
          </div>
          <div className="bg-gray-400 h-[300px] w-[300px]"></div>
        </section>
        <section
          id="features"
          className="flex bg-white pt-[70px] pb-[100px] flex-col justify-center items-center p-[10px] space-y-[40px]"
        >
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-[15px] text-gray-600">Feature</p>
            <h2 className="font-bold text-[25px]">Our Special Feature</h2>
          </div>
          <div className="flex flex-row space-x-[20px] items-center justify-center">
            <div className="bg-white flex flex-col space-y-[10px] shadow-md rounded-[10px] w-[250px] p-[10px]">
              <div className="h-[200px] bg-gray-300 w-full flex justify-center rounded-[5px] items-center"></div>
              <h1 className="font-md text-gray-500 text-[12px]">TECHNOLOGY</h1>
              <p className="text-gray-900 text-[17px] w-[170px] font-bold">
                Easy to use for peop
              </p>
              <button className=" font-bold text-[14px] w-[170px] p-[10px] flex flex-row space-x-[10px] items-start">
                <p>read more</p>
                <div className="mt-[5px]">
                  <GoArrowRight />
                </div>
              </button>
            </div>
            <div className="bg-white flex flex-col space-y-[10px] shadow-md rounded-[10px] w-[250px] p-[10px]">
              <div className="h-[200px] bg-gray-300 w-full flex justify-center rounded-[5px] items-center"></div>
              <h1 className="font-md text-gray-500 text-[12px]">TECHNOLOGY</h1>
              <p className="text-gray-900 text-[17px] w-[170px] font-bold">
                Easy to use for peop
              </p>
              <button className=" font-bold text-[14px] w-[170px] p-[10px] flex flex-row space-x-[10px] items-start">
                <p>read more</p>
                <div className="mt-[5px]">
                  <GoArrowRight />
                </div>
              </button>
            </div>
            <div className="bg-white flex flex-col space-y-[10px] shadow-md rounded-[10px] w-[250px] p-[10px]">
              <div className="h-[200px] bg-gray-300 w-full flex justify-center rounded-[5px] items-center"></div>
              <h1 className="font-md text-gray-500 text-[12px]">TECHNOLOGY</h1>
              <p className="text-gray-900 text-[17px] w-[170px] font-bold">
                Easy to use for peop
              </p>
              <button className=" font-bold text-[14px] w-[170px] p-[10px] flex flex-row space-x-[10px] items-start">
                <p>read more</p>
                <div className="mt-[5px]">
                  <GoArrowRight />
                </div>
              </button>
            </div>
            <div className="bg-white flex flex-col space-y-[10px] shadow-md rounded-[10px] w-[250px] p-[10px]">
              <div className="h-[200px] bg-gray-300 w-full flex justify-center rounded-[5px] items-center"></div>
              <h1 className="font-md text-gray-500 text-[12px]">TECHNOLOGY</h1>
              <p className="text-gray-900 text-[17px] w-[170px] font-bold">
                Easy to use for peop
              </p>
              <button className=" font-bold text-[14px] w-[170px] p-[10px] flex flex-row space-x-[10px] items-start">
                <p>read more</p>
                <div className="mt-[5px]">
                  <GoArrowRight />
                </div>
              </button>
            </div>
          </div>
        </section>
        <footer className="p-[30px] pb-[20px] pt-[40px] text-white bg-gray-400 flex flex-col space-y-[30px]">
          <div className="w-full flex flex-row space-x-[120px] items-start justify-center">
            <div className="flex flex-col space-y-[10px]">
              <h2 className="font-bold text-[30px]">Tasking</h2>
              <p className="w-[200px] text-gray-200">
                Use the shortest possible to create tasks, use all the free
                features to make the most of them
              </p>
              <div className="grid grid-cols-3"></div>
            </div>
            <div className="flex flex-col space-y-[10px]">
              <h2 className="font-bold text-[20px]">About</h2>
              <a href="#" className="text-gray-200">
                About Us
              </a>
              <a href="#" className="text-gray-200">
                Features
              </a>
              <a href="#" className="text-gray-200">
                News & Articles
              </a>
            </div>
            <div className="flex flex-col space-y-[10px]">
              <h2 className="font-bold text-[20px]">Support Us</h2>
              <a href="#" className="text-gray-200">
                FAQ's
              </a>
              <a href="#" className="text-gray-200">
                Contact us
              </a>
              <a href="#" className="text-gray-200">
                Support Center
              </a>
              <a href="#" className="text-gray-200">
                Security
              </a>
            </div>
            <div className="flex flex-col space-y-[10px]">
              <h2 className="font-bold text-[20px]">Partner</h2>
              <a href="#" className="text-gray-200">
                Our Partner
              </a>
              <a href="#" className="text-gray-200">
                Subscribe
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-[10px] items-center">
            <div className="border-t-[1px] border-gray-300 w-[1000px]"></div>
            <p>All rights reserved @tasking.co</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
