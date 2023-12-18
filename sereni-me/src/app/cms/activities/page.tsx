"use client";
import React from "react";
import SideBar from "../(components)/sidebar";

const ActivityPage: React.FC = () => {
  return (
    <>
      <div className="flex dark:text-gray-100">
        <div className="fixed">
          <SideBar />
        </div>
        <div className="ml-[15rem] flex flex-col justify-center items-center dark:bg-gray-900 dark:text-gray-100">
          <div className="container p-2 mx-auto sm:p-4  dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leadi">Activities</h2>
            <div className="overflow-x-auto bg-gray-200 rounded-md">
              <table className="min-w-full text-md">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col className="w-24" />
                </colgroup>
                <thead className="dark:bg-gray-700 ">
                  <tr className="text-center ">
                    <th className="py-2 px-4 border border-gray-300">No</th>
                    <th className="py-2 px-4 border border-gray-300">Name</th>
                    <th className="py-2 px-4 border border-gray-300">
                      Description
                    </th>
                    <th className="py-2 px-4 border border-gray-300 ">File</th>
                    <th className="py-2 px-4 border border-gray-300">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                    <td className="py-2 px-4">
                      <p>1</p>
                    </td>
                    <td className="py-2 px-4">
                      <p>Breath Exercise for 1 Minute</p>
                    </td>
                    <td className="py-2 px-4">
                      <p>
                        A one-minute breathing exercise offers a brief yet
                        impactful practice for relaxation and stress relief. By
                        focusing on slow, deep breaths, individuals can quickly
                        enhance mindfulness, promote a sense of calm, and
                        improve overall mental well-being in just 60 seconds.
                      </p>
                    </td>
                    <td className="py-2 px-4">
                      <img
                        className="rounded-lg"
                        src="https://images.unsplash.com/photo-1508175749578-259ded3db070?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="auto"
                      ></img>
                    </td>
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

export default ActivityPage;
