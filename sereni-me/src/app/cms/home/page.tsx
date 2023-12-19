"use client";

import React from "react";
import SideBar from "../(components)/sidebar";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="flex dark:text-gray-100">
        <SideBar />

        {/* user registered */}
        <div className="flex flex-row justify-center items-center dark:bg-gray-900 dark:text-gray-100 p-10 mx-10">
          <button
            type="button"
            className="flex flex-col items-center justify-center p-10 mx-10 h-full w-80 rounded-3xl shadow-lg  bg-gradient-to-tr from-[#5E7A8B] to-[#E4F2F3] dark:to-[#032332] px-14 py-14 dark:bg-trueGray-800 "
          >
            <div className="">
              <div className="text-center">
                <h1 className="text-3xl font-semibold tracking-tight mb-9">
                  Users
                </h1>
                <h3 className="text-2xl font-semibold ">20</h3>
              </div>
            </div>
          </button>

          <button
            type="button"
            className="flex flex-col items-center justify-center p-10 mx-10 h-full w-80 rounded-3xl shadow-lg  bg-gradient-to-tr from-[#5E7A8B] to-[#E4F2F3] dark:to-[#032332] px-14 py-14 dark:bg-trueGray-800 "
          >
            <div className="">
              <div className="text-center">
                <h1 className="text-3xl font-semibold tracking-tight mb-9">
                  Audio
                </h1>
                <h3 className="text-2xl font-semibold ">20</h3>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="flex flex-col items-center justify-center p-10 mx-10 h-full w-80 rounded-3xl shadow-lg  bg-gradient-to-tr from-[#5E7A8B] to-[#E4F2F3] dark:to-[#032332] px-14 py-14 dark:bg-trueGray-800 "
          >
            <div className="">
              <div className="text-center">
                <h1 className="text-3xl font-semibold tracking-tight mb-9">
                  Video
                </h1>
                <h3 className="text-2xl font-semibold ">20</h3>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
