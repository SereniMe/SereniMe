"use client";
import React, { useEffect, useState } from "react";
import SideBar from "../(components)/sidebar";
import { ActivityModel } from "@/db/models/activities";

const ActivityPage: React.FC = () => {
  const [activities, setActivities] = useState([]);
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}/api/activities`);

        const data = await response.json();
        if (!response.ok) throw new Error(`Something something error ...`);

        setActivities(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

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
                  {activities.map((activity: ActivityModel, index) => (
                    <tr
                      key={activity.name}
                      className={`border-b border-opacity-20 dark:border-gray-700 ${
                        index % 2 === 0 ? "dark:bg-gray-900" : ""
                      }`}
                    >
                      <td className="py-2 px-4">
                        <p>{index + 1}</p>
                      </td>
                      <td className="py-2 px-4">
                        <p>{activity.name}</p>
                      </td>
                      <td className="py-2 px-4">
                        <p>{activity.content}</p>
                      </td>
                      <td className="py-2 px-4">
                        <img
                          className="rounded-lg"
                          src={activity.thumbnail}
                          alt={activity.name}
                          width="fit"
                        />
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
                  ))}
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
