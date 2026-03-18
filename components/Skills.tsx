"use client";

import { useTheme } from "next-themes";
import SectionContainer from "./SectionContainer";
import { skillList } from "@/helpers";
import SkillsCard from "./SkillsCard";
import { useMemo } from "react";

export default function Skills() {
  const { resolvedTheme } = useTheme();
  const skills = useMemo(
    () => skillList({ theme: resolvedTheme === "dark" ? "dark" : "light" }),
    [resolvedTheme],
  );

  return (
    <SectionContainer id="skills" title="Skills">
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, list]) => (
          <SkillsCard key={category} title={category} skills={list} />
        ))}
      </div>
    </SectionContainer>
  );
}
