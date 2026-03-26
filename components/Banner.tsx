"use client";

import Image from "next/image";
import profilePicture from "../public/images/profile_crop.png";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Banner() {
  return (
    <header className="h-screen w-screen flex flex-col md:flex-row-reverse justify-center items-center pt-24 md:pt-0 md:px-8 md:gap-12 mb-10">
      <Image
        className="rounded-full shadow-[3px_3px_23px_3px_rgba(65,63,63,0.3)] w-[240px] h-[240px]
    sm:w-[360px] sm:h-[360px]"
        src={profilePicture}
        width={360}
        height={360}
        alt="Me"
      />
      <div className="p-8 md:p-0 md:w-4xl">
        <p className="text-pink-500 md:text-xl">Hi, my name is</p>
        <div className="text-2xl md:text-5xl font-bold md:mb-6">
          <h1 className="text-tertiary">Colin Bertin</h1>
          <span className="text-secondary">I am a Full Stack Developer.</span>
        </div>
        <p className="text-lg text-tertiary mb-2 md:max-w-[90%] mb-10">
          I bridge the gap between imagination and functionality, crafting
          responsive web experiences that come alive. I translate visionary
          ideas into user-friendly interfaces and robust back-end solutions,
          ensuring seamless experiences across all devices.
        </p>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="
    group
    hidden md:inline-flex
    px-[15px] py-[10px]
    border border-secondary
    text-[20px] text-secondary
    cursor-pointer
    flex items-center gap-2
    transition-all duration-300
    hover:bg-pink-500 hover:border-pink-500 hover:!text-white
  "
        >
          View Work
          <HiArrowNarrowRight
            className="
      transition-transform duration-300
      group-hover:rotate-90
    "
          />
        </a>
      </div>
    </header>
  );
}
