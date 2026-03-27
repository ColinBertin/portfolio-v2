"use client";

import { useTheme } from "next-themes";
import SectionContainer from "./SectionContainer";
import { skillList } from "@/helpers";
import SkillsCard from "./SkillsCard";
import { useMemo } from "react";
import { useI18n } from "@/app/i18n-provider";

export default function Skills() {
  const { resolvedTheme } = useTheme();
  const { dictionary: t } = useI18n();
  const skills = useMemo(
    () => skillList({ theme: resolvedTheme === "dark" ? "dark" : "light" }),
    [resolvedTheme],
  );
  const categoryLabels: Record<string, string> = {
    "Front-end": t.skills.frontend,
    "Back-end": t.skills.backend,
    Tools: t.skills.tools,
  };

  return (
    <SectionContainer id="skills" title={t.sections.skills}>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, list]) => (
          <SkillsCard
            key={category}
            title={categoryLabels[category] ?? category}
            skills={list}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
