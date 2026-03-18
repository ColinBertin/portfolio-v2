export type Skill = {
  name: string;
  url: string;
  class?: string;
  color?: string;
  src?: string;
};

export type ProjectTech = {
  url: string;
  class: string;
  color: string;
  linkClass?: string;
};

export type Project = {
  name: string;
  description: string;
  imageSrc: string;
  images?: string[];
  technologies: ProjectTech[];
  url: string;
  git?: string;
};