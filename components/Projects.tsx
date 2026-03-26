"use client";

import SectionContainer from "./SectionContainer";
import { getProjects } from "@/utils/getProjects";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const projects = getProjects();

  return (
    <SectionContainer id="projects" title={t.sections.projects}>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <div key={project.name} className="w-full max-w-[35.42rem] md:w-[430px]">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
