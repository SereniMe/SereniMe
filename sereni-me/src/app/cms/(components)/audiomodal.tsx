"use client";

import Link from "next/link";
import React, { Dispatch, FormEvent, SetStateAction } from "react";

const AudioModal = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault;
    setOpen(false);
  };
  return (
    <>
      <div className="flex justify-center items-center  dark:text-gray-100 w-screen h-screen bg-black m-0 p-0 absolute left-0 right-0 top-0 bottom-0 bg-opacity-50">
        <div>
          <section>
            <form
              onSubmit={(e) => submitHandler(e)}
              // className="flex flex-col justify-center items-center bg-gradient-to-tr from-[#ccb0be] to-[#9389bd] bg-opacity-70 dark:bg-[#70605b] drop-shadow-sm rounded-lg "
              className="flex flex-col justify-center items-center bg-gradient-to-r from-20%-[#9389bd] via-500%-[#ccb0be] to-30%-[#9389bd] bg-opacity-70 dark:bg-[#70605b] drop-shadow-md rounded-lg "
            >
              <fieldset className="flex flex-col justify-center items-center gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-large text-white">Add new Audio</p>
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
                    <div className="flex flex-col justify-center items-center">
                      <button className="mt-5 bg-black text-white hover:bg-gray-200 rounded-md text-[#F4B81F];font-bold py-2 px-4 hover:text-black hover:scale-110 transition-all active:scale-90 ">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default AudioModal;
