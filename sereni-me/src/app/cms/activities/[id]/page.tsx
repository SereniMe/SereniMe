"use client";
import SideBar from "../../(components)/sidebar";

const ActivityPage: React.FC = () => {
  return (
    <>
      {/* edit form */}
      <div className="flex dark:text-gray-100">
        <div className="fixed">
          <SideBar />
        </div>
        <div>
          <section>
            <form
              action=""
              className="grid grid-cols-2 bg-[#6A99AC;]  dark:bg-gray-800 dark:text-gray-50 drop-shadow-sm "
            >
              <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
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
                    <label htmlFor="description" className="text-sm">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    ></textarea>
                  </div>
                </div>
              </fieldset>
              {/* file input */}
              <div className="grid grid-rows-3">
                <div className="row-span-2 flex flex-row join-vertical justify-center items-center">
                  <img
                    className="rounded-3xl my-10"
                    width="50%"
                    src="https://images.unsplash.com/photo-1482100199117-a4a38a64e7e3?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  ></img>
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
                <div className="">
                  <button className="mt-5 bg-black text-white hover:bg-gray-200 rounded-md text-[#F4B81F];font-bold py-2 px-4 hover:text-black hover:scale-110 transition-all active:scale-90 ">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default ActivityPage;
