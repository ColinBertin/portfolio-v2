"use client";

import SectionContainer from "./SectionContainer";

export default function About() {
  return (
    <SectionContainer id="about" title="About Me">
      <div className="mt-6 md:mt-10">
        <div className="flex flex-col md:flex-row">
          {/* Intro */}
          <h3 className="text-xl md:text-3xl font-bold md:leading-[38px] text-secondary m-4 md:m-auto md:mr-10">
            Hi! I&apos;m Colin, nice to meet you. Please take a look around.
          </h3>

          {/* Main text */}
          <p className="text-secondary md:max-w-[60%] m-4 md:m-0 text-lg">
            I&apos;m a frontend-focused full-stack developer based in
            Yokohama, Japan, passionate about building user-centric web
            applications. Over the past few years, I&apos;ve developed and maintained
            production-ready systems using TypeScript, React, and Next.js, with
            a strong emphasis on performance, reliability, and clean
            architecture. 
            <br />
            <br />
            I enjoy translating complex ideas into intuitive,
            responsive interfaces, and I thrive in collaborative environments
            where thoughtful design and solid engineering come together to
            deliver real value. Ready to bring your vision to life?
            <br />
            <br />
            Ready to bring your vision to life?{" "}
            <a
              className="text-secondary border-b-2 border-pink-500 hover:text-pink-500 cursor-pointer"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Let’s connect.
            </a>
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
