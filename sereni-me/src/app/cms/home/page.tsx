"use client";

import React from "react";
import SideBar from "../(components)/sidebar";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="flex dark:text-gray-100">
        <SideBar />

        {/* user registered */}
        <div className="flex flex-row justify-center items-center dark:bg-gray-900 dark:text-gray-100">
          <div className=" bg-[#C5E9EF] flex flex-col  items-center justify-center p-10 mx-10 h-full w-80 rounded-3xl shadow-lg  ">
            <div className="text-center">
              <h1 className="text-3xl font-semibold tracking-tight mb-10">
                User Registered
              </h1>
              <h3 className="text-2xl font-semibold ">10</h3>
            </div>
            <button
              type="button"
              className="mt-4 w-full p-3 font-semibold tracking-tight rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Read more
            </button>
          </div>

          <div className="bg-[#C5E9EF] flex flex-col items-center justify-center p-10 mx-10 h-full w-80 rounded-3xl shadow-lg ">
            <div className="text-center">
              <h1 className="text-3xl font-semibold tracking-tight mb-10">
                Videos
              </h1>
              <h3 className="text-2xl font-semibold ">20</h3>
            </div>
            <button
              type="button"
              className="mt-4 w-full p-3 font-semibold tracking-tight rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Read more
            </button>
          </div>

          <div className="bg-[#C5E9EF] flex flex-col items-center justify-center p-10 mx-10 h-full w-80 rounded-3xl shadow-lg ">
            <div className="text-center">
              <h1 className="text-3xl font-semibold tracking-tight mb-10">
                Audios
              </h1>
              <h3 className="text-2xl font-semibold ">8</h3>
            </div>
            <button
              type="button"
              className="mt-4 w-full p-3 font-semibold tracking-tight rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
