"use client";

import React, { useEffect, useState } from "react";
import SideBar from "../(components)/sidebar";
import Link from "next/link";

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
          <section className="">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Content Management System
                </h2>

                <p className="mt-4 text-gray-800 sm:text-xl">
                  The list provided includes SereniMe users, as well as videos
                  and audio associated with the platform. It serves as a
                  comprehensive compilation of SereniMe's user base and
                  multimedia content.
                </p>
              </div>

              <div className="mt-8 sm:mt-12">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Users
                    </dt>

                    <dd className="text-4xl font-extrabold text-black md:text-5xl">
                      {users.length}
                    </dd>
                  </div>

                  <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Video
                    </dt>

                    <dd className="text-4xl font-extrabold text-black md:text-5xl">
                      {videos.length}
                    </dd>
                  </div>

                  <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Audio
                    </dt>

                    <dd className="text-4xl font-extrabold text-black md:text-5xl">
                      {audios.length}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* testing */}
    </>
  );
};

export default HomePage;
