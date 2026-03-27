"use client";

import { Skill } from "@/types";
import Image from "next/image";

export default function SkillsCard({
  title,
  skills,
}: {
  title: string;
  skills: Skill[];
}) {
  return (
    <div className="border border-secondary h-80 rounded-2xl px-10 py-4 flex flex-col">
      <h4 className="text-2xl font-semibold text-tertiary text-center">
        {title}
      </h4>
      <div className="mt-4 sm:mt-8 sm:mb-4 overflow-y-auto pr-1 w-full flex flex-col sm:flex-wrap">
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-0 items-center gap-3 py-1"
          >
            {skill.class ? (
              <i
                className={`${skill.class} text-[20px]`}
                style={{ color: skill.color }}
              />
            ) : (
              skill.src && (
                <Image
                  src={skill.src}
                  alt={skill.name}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              )
            )}
            <p className="text-secondary text-lg font-semibold leading-tight hover:text-[var(--primary)] transition-colors duration-300">
              {skill.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
