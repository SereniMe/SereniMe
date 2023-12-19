"use client";
import React from "react";

const UserPage: React.FC = () => {
  const inputFormData = new FormData();

  inputFormData.append("fullName", "fullName");
  inputFormData.append("address", "address");
  inputFormData.append("phone", "phone");
  inputFormData.append("interests", "interests,halo");
  const handleEditProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/profiles`,
      {
        method: "POST",
        body: inputFormData,
      }
    );

    console.log(await response.json());

    const response2 = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/profiles`,
      {
        method: "GET",
      }
    );

    console.log(await response2.json());
  };
  return (
    <>
      <div className="flex flex-row justify-center space-x-2 border border-gray-200 rounded-lg drop-shadow-md ml-60 mt-20">
        {/* <div className="flex space-x-8"></div> */}
        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md sm:px-12 bg-[#5E7A8B;] dark:bg-gray-800 dark:text-gray-100">
          <img
            src="https://source.unsplash.com/150x150/?portrait?3"
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y dark:divide-gray-500">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                Leroy Jenkins
              </h2>
            </div>
            {/* tags */}
            <div className="flex-1">
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* form */}
        <div>
          <section className="flex flex-col justify-center items-center p-6 bg-[#6A99AC;]  dark:bg-gray-800 dark:text-gray-50 drop-shadow-sm">
            <form
              className="container flex flex-col mx-auto space-y-12"
              onClick={(event) => handleEditProfile(event)}
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-medium">Personal Inormation</p>
                  <p className="text-xs">
                    Please fill out your new information here..
                  </p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
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
                    <label htmlFor="address" className="text-sm">
                      Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="phone" className="text-sm">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="interest" className="text-sm">
                      Interest
                    </label>
                    <div className="flex items-center mt-5">
                      <input
                        id="interest"
                        type="checkbox"
                        className="mr-2 focus:ring focus:ring-gray-400 dark:border-gray-700 dark:text-gray-900"
                      />
                      <label htmlFor="interest" className="text-sm mr-5">
                        Stress
                      </label>

                      <input
                        id="interest"
                        type="checkbox"
                        className="mr-2 focus:ring focus:ring-gray-400 dark:border-gray-700 dark:text-gray-900"
                      />
                      <label htmlFor="interest" className="text-sm mr-5">
                        Anxiety
                      </label>

                      <input
                        id="interest"
                        type="checkbox"
                        className="mr-2 focus:ring focus:ring-gray-400 dark:border-gray-700 dark:text-gray-900"
                      />
                      <label htmlFor="interest" className="text-sm mr-5">
                        Focus
                      </label>

                      <input
                        id="interest"
                        type="checkbox"
                        className="mr-2 focus:ring focus:ring-gray-400 dark:border-gray-700 dark:text-gray-900"
                      />
                      <label htmlFor="interest" className="text-sm mr-5">
                        Inner Peace
                      </label>
                    </div>
                    <button className="mt-5 bg-grey-800 hover:bg-gray-200 rounded-md text-white font-bold py-2 px-4 hover:text-black hover:scale-110 transition-all active:scale-90 ">
                      Update
                    </button>
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

export default UserPage;
