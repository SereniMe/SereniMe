import Image from "next/image";
import React from "react";
import Container from "@/components/Container";
import { Avatar } from "./Avatar";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 mx-[10rem]">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full border border-white px-14 rounded-2xl py-14">
            <p className="text-2xl leading-normal ">
              SereniMe has <Mark>transformed my nights!</Mark> I struggled with
              sleep for years, but after using SereniMe's guided sleep
              meditations, I wake up refreshed and ready to tackle the day!
            </p>

            <Avatar
              image="/aliceP.jpg"
              name="Alice P."
              title="Tranquil Sleep Achieved"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full border border-white px-14 rounded-2xl py-14">
            <p className="text-2xl leading-normal ">
              "In the hustle of daily life, stress used to be my constant
              companion. SereniMe has been a <Mark>game-changer</Mark>! The
              mindfulness sessions are my go-to remedy for stress relief."
            </p>

            <Avatar
              image="/CharlieM.jpg"
              name="Charlie M."
              title="Stress Relief Wonder"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full border border-white px-14 rounded-2xl py-14">
            <p className="text-2xl leading-normal">
              Mindfulness was a concept that always intrigued me, but I
              struggled to incorporate it into my routine. SereniMe's
              <Mark>personalized</Mark> mindfulness journeys made it effortless.
            </p>

            <Avatar
              image="/EvaL.webp"
              name="Eva L."
              title="Mindfulness Mastered"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

function Mark(props: { children: string }) {
  return (
    <>
      {" "}
      <mark className="text-black bg-white rounded-md dark:bg-[#412e33] dark:text-white">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
