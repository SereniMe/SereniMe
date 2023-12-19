import React from "react";
import Container from "@/components/Container";

type props = {
  align?: string;
  pretitle?: string;
  title?: string;
  children?: string;
};

const SectionTitle = (props: props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 hover:scale-110 transition ease-in-out ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.pretitle && (
        <div className="text-m font-bold tracking-wider text-white dark:text-white">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-[#f2e3eb] lg:leading-tight lg:text-4xl dark:text-[#f0d8d0]">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-[#1c2e14] lg:text-xl xl:text-xl dark:text-{#412e33}">
          {props.children}
        </p>
      )}
    </Container>
  );
};

export default SectionTitle;
