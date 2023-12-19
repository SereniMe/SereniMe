import { useState } from "react";
import Container from "@/components/Container";

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
        <div
          onClick={() => setPlayVideo(!playVideo)}
          className="flex justify-center flex-col h-[30rem] items-center cursor-pointer aspect-w-16 aspect-h-9 border border-white
            dark:border-white"
        >
          {!playVideo && (
            <button className="inset-auto w-16 h-16 text-white transform lg:w-28 lg:h-28 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16  lg:w-28 lg:h-28"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="">Play Video</span>
            </button>
          )}
          {playVideo && (
            <iframe
              src="https://www.youtube.com/embed/XhW_ZsFZZIk?si=DQezYMnhWbJOOV1D&autoplay=1"
              frameBorder="0"
              width="100%"
              height="500px"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Video;
