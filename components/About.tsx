"use client";

import SectionContainer from "./SectionContainer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <SectionContainer id="about" title={t.about.title}>
      <div className="mt-6 md:mt-10">
        <div className="flex flex-col md:flex-row">
          {/* Intro */}
          <h3 className="text-xl md:text-3xl font-bold md:leading-[38px] text-secondary m-4 md:m-auto md:mr-10">
            {t.about.heading}
          </h3>

          {/* Main text */}
          <p className="text-secondary md:max-w-[60%] m-4 md:m-0 text-lg">
            {t.about.paragraphOne}
            <br />
            <br />
            {t.about.paragraphTwo}
            {" "}
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
              {t.about.connect}
            </a>
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
