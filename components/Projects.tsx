import SectionContainer from "./SectionContainer";
import { getProjects } from "@/utils/getProjects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = getProjects();

  return (
    <SectionContainer id="projects" title="Projects">
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
