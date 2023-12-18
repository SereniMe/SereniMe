"use client";
import React from "react";
import SideBar from "../(components)/sidebar";
import Link from "next/link";

const AudioPage: React.FC = () => {
  return (
    <>
      <div className="flex dark:text-gray-100">
        <div className="fixed">
          <SideBar />
        </div>
        <div className=" ml-[15rem] flex-grow flex flex-col justify-center items-center dark:bg-gray-900 dark:text-gray-100">
          <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leadi">Audios</h2>
            <div className="overflow-x-auto bg-gray-200 rounded-md">
              <table className="min-w-full text-md">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col className="w-24" />
                </colgroup>
                <thead className="dark:bg-gray-700">
                  <tr className="text-center">
                    <th className="p-3 border border-gray-300">No</th>
                    <th className="p-3 border border-gray-300">Name</th>
                    <th className="p-3 border border-gray-300">Video URL</th>
                    <th className="p-3 border border-gray-300">Video</th>
                    <th className="p-3 border border-gray-300">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                    {/* Number */}
                    <td className="p-3 text-center">
                      <p>1</p>
                    </td>
                    {/* Name */}
                    <td className="p-3 text-center">
                      <p>Breath Exercise for 1 Minute</p>
                    </td>
                    {/* Audio URL */}
                    <td className="p-3 text-center">
                      <Link
                        href={
                          "https://docs.google.com/uc?id=1R7PCCYnAGLPsKp0ZvRjrEs2OygizTvX8"
                        }
                      >
                        Link
                      </Link>
                    </td>
                    {/* Audio Player */}
                    <td className="p-3 flex flex-col justify-center items-center">
                      <audio controls>
                        <source src="https://docs.google.com/uc?id=1R7PCCYnAGLPsKp0ZvRjrEs2OygizTvX8"></source>
                      </audio>
                    </td>

                    {/* Action Button */}
                    <td className="py-2 px-4 text-right">
                      <div className="font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900 flex flex-row justify-center items-center">
                        <div className="mr-5">
                          <button className="bg-blue-700 hover:bg-gray-500 rounded-md text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:text-black hover:scale-110 transition-all active:scale-90 ">
                            Edit
                          </button>
                        </div>
                        <div className="">
                          <button className="bg-red-700 hover:bg-gray-400 rounded-md text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:text-black hover:scale-110 transition-all active:scale-90 ">
                            Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPage;
