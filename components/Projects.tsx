"use client";

import { projectList } from "@/helpers";
import SectionContainer from "./SectionContainer";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = projectList();

  return (
    <SectionContainer id="projects" title="Projects">
      <div
        className="
          mx-auto
          mt-8
          md:mt-0 
          flex
          max-w-[1500px]
          flex-wrap
          justify-center
          gap-9
        "
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            img={project.img}
            language={project.language}
            link={project.url}
            git={project.git}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
