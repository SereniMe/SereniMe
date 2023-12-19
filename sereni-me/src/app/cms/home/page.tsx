"use client";

import React, { useEffect, useState } from "react";
import SideBar from "../(components)/sidebar";

const HomePage: React.FC = () => {
  const [videos, setVideos] = useState([]);
  const [audios, setAdios] = useState([]);
  const [users, setUsers] = useState([]);
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseVideo = await fetch(`${URL}/api/videos`);
        const dataVideo = await responseVideo.json();
        if (!responseVideo.ok) throw new Error(`Something something error ...`);

        const responseAudio = await fetch(`${URL}/api/audios`);
        const dataAudio = await responseAudio.json();
        if (!responseAudio.ok) throw new Error(`Something something error ...`);

        const responseUser = await fetch(`${URL}/api/users`);
        const dataUser = await responseUser.json();
        if (!responseUser.ok) throw new Error(`Something something error ...`);

        setVideos(dataVideo.data);
        setAdios(dataAudio.data);
        setUsers(dataUser.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex dark:text-gray-100">
        <SideBar />

        {/* user registered */}
        <div className="flex flex-row justify-center items-center dark:bg-gray-900 dark:text-gray-100 p-10 mx-10">
          <button
            type="button"
            className="bg-[#C5E9EF] flex flex-col items-center justify-center p-10 mx-10 h-full w-80 rounded-3xl shadow-lg "
          >
            <div className="">
              <div className="text-center">
                <h1 className="text-3xl font-semibold tracking-tight mb-9">
                  Users
                </h1>
                <h3 className="text-2xl font-semibold ">{users.length}</h3>
              </div>
            </div>
          </button>

          <button
            type="button"
            className="bg-[#C5E9EF] flex flex-col items-center justify-center p-10 mx-10 h-full w-80 rounded-3xl shadow-lg "
          >
            <div className="">
              <div className="text-center">
                <h1 className="text-3xl font-semibold tracking-tight mb-9">
                  Audio
                </h1>
                <h3 className="text-2xl font-semibold ">{audios.length}</h3>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="bg-[#C5E9EF] flex flex-col items-center justify-center p-10 mx-10 h-full w-80 rounded-3xl shadow-lg "
          >
            <div className="">
              <div className="text-center">
                <h1 className="text-3xl font-semibold tracking-tight mb-9">
                  Video
                </h1>
                <h3 className="text-2xl font-semibold ">{videos.length}</h3>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
