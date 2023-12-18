"use client";
import React from "react";
import SideBar from "../(components)/sidebar";

const UserPage: React.FC = () => {
  return (
    <>
      <div className="flex dark:text-gray-100">
        <div className="fixed">
          <SideBar />
        </div>
        <div className="ml-[15rem] flex-grow flex flex-col justify-center items-center dark:bg-gray-900 dark:text-gray-100">
          <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leadi">Users</h2>
            <div className="overflow-x-auto  bg-gray-200 rounded-md">
              <table className="min-w-full text-md">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col className="w-24" />
                </colgroup>
                <thead className="dark:bg-gray-700">
                  <tr className="text-center">
                    <th className="p-3 border border-gray-300">No</th>
                    <th className="p-3 border border-gray-300">Name</th>
                    <th className="p-3 border border-gray-300">Username</th>
                    <th className="p-3 border border-gray-300">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                    <td className="p-3 text-center">
                      <p>1</p>
                    </td>
                    <td className="p-3 text-center">
                      <p>usernumber1</p>
                    </td>
                    <td className="p-3 text-center">
                      <p>user1</p>
                    </td>
                    <td className="p-3 text-center">
                      <p>user1@mail.com</p>
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

export default UserPage;
