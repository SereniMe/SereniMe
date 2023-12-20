"use client";

import Link from "next/link";
import React, { Dispatch, FormEvent, SetStateAction } from "react";

const ActivityModal = ({
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
                    <label htmlFor="name" className="text-sm">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    ></textarea>
                  </div>
                  <div className="col-span-full">
                    <div className="row-span-2 flex flex-row join-vertical justify-center items-center">
                      <td className="p-3 flex flex-col justify-center items-center">
                        <img
                          className="rounded-3xl my-10"
                          width="300px"
                          src="https://images.unsplash.com/photo-1482100199117-a4a38a64e7e3?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        ></img>
                      </td>
                    </div>
                    <div className="flex flex-col items-center">
                      <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
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

export default ActivityModal;
