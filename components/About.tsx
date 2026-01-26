"use client";

import Link from "next/link";
import SectionContainer from "./SectionContainer";

export default function About() {
  return (
    <SectionContainer title="About Me">
      <div id="about" className="mt-10">
        <div className="flex flex-col md:flex-row">
          {/* Intro */}
          <h3 className="text-2xl md:text-4xl font-bold leading-[38px] text-secondary mb-0 md:m-auto">
            Hi! I&apos;m Colin, nice to meet you. Please take a look around.
          </h3>

          {/* Main text */}
          <p className="text-tertiary md:max-w-[60%] m-4 md:m-0">
            I&apos;m a web developer based in Yokohama, Japan, with a passion
            for crafting user-centric web experiences. Since 2018, I&apos;ve
            honed my skills in building dynamic and responsive websites and
            applications. I&apos;m a strong believer in the power of
            collaboration and bring a positive and results-oriented attitude to
            every project.
            <br />
            Ready to bring your vision to life?{" "}
            <Link
              className="border-b-2 border-pink-500 hover:text-pink-500 cursor-pointer"
              href="#contact"
            >
              Contact me.
            </Link>
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
