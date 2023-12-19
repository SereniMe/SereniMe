"use client";
import React, { useEffect, useState } from "react";
import SideBar from "../(components)/sidebar";
import Link from "next/link";
import { AudioModel } from "@/db/models/audio";

const AudioPage: React.FC = () => {
  const [audios, setAudios] = useState([]);
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}/api/audios`);

        const data = await response.json();
        if (!response.ok) throw new Error(`Something something error ...`);

        setAudios(data.data);
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
        <div className=" ml-[15rem] flex-grow flex flex-col justify-center items-center dark:bg-gray-900 dark:text-gray-100">
          <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leadi">Audios</h2>
            <div className="flex flex-col justify-center items-end">
              <button className="bg-blue-400 hover:bg-gray-700 rounded-lg text-white font-bold py-2 px-4 border-b-4 hover:text-grey-200 hover:scale-110 transition-all active:scale-90">
                Add New Audio
              </button>
            </div>
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
                    <th className="p-3 border border-gray-300">Audio URL</th>
                    <th className="p-3 border border-gray-300">Audio</th>
                    <th className="p-3 border border-gray-300">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {audios.map((audio: AudioModel, index) => (
                    <tr
                      key={audio.name}
                      className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                    >
                      {/* Number */}
                      <td className="p-3 text-center">
                        <p>{index + 1}</p>
                      </td>
                      {/* Name */}
                      <td className="p-3 text-center">
                        <p>{audio.name}</p>
                      </td>
                      {/* Audio URL */}
                      <td className="p-3 text-center">
                        <Link href={audio.audioUrl}>Link</Link>
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* audio edit */}
      <div className="flex dark:text-gray-100">
        <div className="fixed">
          <SideBar />
        </div>
        <div>
          <section>
            <form
              action=""
              className="flex flex-col justify-center items-center bg-[#6A99AC;]  dark:bg-gray-800 dark:text-gray-50 drop-shadow-sm "
            >
              <fieldset className="flex flex-col justify-center items-center gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-large text-white">Add new Activity</p>
                  <p className="">Please fill out the new information here.</p>
                </div>
                <div className="col-span-full ">
                  <div className="col-span-full">
                    <label htmlFor="name" className="text-sm">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full">
                    <div className="row-span-2 flex flex-row join-vertical justify-center items-center">
                      <td className="p-3 flex flex-col justify-center items-center">
                        <audio controls>
                          <source src="https://docs.google.com/uc?id=1R7PCCYnAGLPsKp0ZvRjrEs2OygizTvX8"></source>
                        </audio>
                      </td>
                    </div>
                    <div className="flex flex-col items-center">
                      <input
                        type="file"
                        id="audio"
                        name="audio"
                        accept="audio/*"
                        className="bg-black text-white rounded-sm"
                      />
                    </div>
                    {/* update button */}
                    <div className="">
                      <button className="mt-5 bg-black text-white hover:bg-gray-200 rounded-md text-[#F4B81F];font-bold py-2 px-4 hover:text-black hover:scale-110 transition-all active:scale-90 ">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </fieldset>

              {/* file input */}

              <div className="grid grid-rows-3"></div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default AudioPage;
