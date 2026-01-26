"use client";

import { useTheme } from "next-themes";
import SectionContainer from "./SectionContainer";
import { skillList } from "@/helpers";
import SkillsCard from "./SkillsCard";

export default function Skills() {
  const { theme } = useTheme();
  const skills = skillList({ theme: theme === "dark" ? "dark" : "light" });

  return (
    <SectionContainer id="skills" title="Skills">
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <SkillsCard key={category} title={category} skills={skillList} />
        ))}
      </div>
    </SectionContainer>
  );
}
