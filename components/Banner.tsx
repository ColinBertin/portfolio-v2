"use client";

import Image from "next/image";
import profilePicture from "../public/images/profile_crop.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="md:px-8 md:py-10 h-screen max-w-screen-xl flex flex-col md:flex-row-reverse justify-around items-center md:my-5 mx-auto">
      <Image
        className="rounded-full shadow-[3px_3px_23px_3px_rgba(65,63,63,0.3)] w-[240px] h-[240px]
    md:w-[360px] md:h-[360px]"
        src={profilePicture}
        width={360}
        height={360}
        alt="Me"
      />
      <div className="md:m-[50px]">
        <p className="text-pink-500 md:text-lg">Hi, my name is</p>
        <div className="text-4xl md:text-5xl font-bold mb-6">
          <h1 className="text-tertiary">Colin Bertin</h1>
          <span className="text-secondary">I am a Full Stack Developer.</span>
        </div>
        <p className="text-lg text-tertiary mb-2 max-w-lg">
          I bridge the gap between imagination and functionality, crafting
          responsive web experiences that come alive. I translate visionary
          ideas into user-friendly interfaces and robust back-end solutions,
          ensuring seamless experiences across all devices.
        </p>
        <Link
          href="#projects"
          className="
    group
    hidden md:inline-flex
    px-[15px] py-[10px]
    border border-secondary
    text-[20px] text-secondary
    cursor-pointer
    flex items-center gap-2
    transition-all duration-300
    hover:bg-pink-500 hover:border-pink-500 hover:text-primary
  "
        >
          View Work
          <HiArrowNarrowRight
            className="
      transition-transform duration-300
      group-hover:rotate-90
    "
          />
        </Link>
      </div>
    </div>
  );
}
