"use client";
import { useTheme } from "next-themes";
import Link from "next/link";

const Hero = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="w-full h-[100dvh]">
        <div className="ml-12 mt-24 mb-8 absolute z-[10] w-[55%] h-[55%] flex justify-start flex-col gap-8 items-start">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white w-[70%]">
            Feeling overwhelmed? We can help you find your calm again.
          </h1>
          {/* <p className="py-5 text-xl leading-normal text-white lg:text-xl xl:text-2xl dark:text-gray-300 w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempora,
            earum exercitationem, consectetur, aperiam ipsam nihil molestias
            minus magnam hic rem repellat ipsum perspiciatis itaque sit autem
            blanditiis debitis ad.
          </p> */}

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-start sm:flex-row">
            <Link
              href="/signin"
              rel="noopener"
              className="px-6 py-2 text-white hover:text-[#f2e3eb] bg-[#8d7dce] hover:bg-opacity-40 hover:border border-[#8d7dce] rounded-md hover:scale-105 transition ease-in-out
              dark:bg-[#412e33] dark:hover:bg-opacity-40 dark:hover:border dark:border-[#412e33]"
            >
              Start your journey to mental wellness today
            </Link>
          </div>
        </div>
        {/* {theme == "dark" ? <ForestCampScene /> : <LighthouseScene />} */}

        <video
          className="absolute w-auto min-w-full h-[90dvh] overflow-hidden object-cover max-w-none -z-10"
          preload="auto"
          muted
          autoPlay
          loop
        >
          <source
            src={`https://drive.google.com/uc?export=download&id=1mQV8dwFNdKVDUKO5_ngxLpch9fJb8w_J`}
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export default Hero;
