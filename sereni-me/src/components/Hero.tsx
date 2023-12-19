"use client";
import { useTheme } from "next-themes";
import Link from "next/link";

const Hero = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="w-[99dvw] h-[100dvh]">
        <div className="mb-8 absolute z-[10] w-[95%] h-[85%] flex justify-center flex-col gap-8 items-center">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white w-[70%]">
            Feeling overwhelmed? We can help you find your calm again.
          </h1>
          <p className="py-5 text-xl leading-normal text-white lg:text-xl xl:text-2xl dark:text-gray-300 w-[70%]">
            Taking care of your mental wellness is super important—it's about
            feeling good emotionally and mentally. Try things like exercise,
            good sleep, happy relationships, and managing stress to keep your
            mental health in check. SereniMe will help you achieve that with our
            currated activities meditation tools.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <Link
              href="/signin"
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-[#6A99AC] rounded-md "
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
