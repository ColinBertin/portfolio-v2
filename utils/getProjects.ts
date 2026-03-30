import type { Project, ProjectTech } from "@/types";

const express: ProjectTech = {
  url: "https://expressjs.com",
  class: "devicon-express-original",
  color: "var(--primary)",
};

const django: ProjectTech = {
  url: "https://www.djangoproject.com",
  class: "devicon-django-plain",
  color: "#22c55e",
};

const docker: ProjectTech = {
  url: "https://www.docker.com/",
  class: "devicon-docker-plain",
  color: "#2496ED",
};

const typescript: ProjectTech = {
  url: "https://www.typescriptlang.org",
  class: "devicon-typescript-plain",
  color: "#2f73bf",
};

const vercel: ProjectTech = {
  url: "https://vercel.com",
  class: "devicon-vercel-original",
  color: "var(--primary)",
};

const css: ProjectTech = {
  url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  class: "devicon-css3-plain-wordmark",
  color: "#3995CF",
};

const react: ProjectTech = {
  url: "https://react.dev",
  class: "devicon-react-plain",
  color: "#63DBFB",
};

const next: ProjectTech = {
  url: "https://nextjs.org",
  class: "devicon-nextjs-plain-wordmark",
  color: "var(--primary)",
  linkClass: "next-logo",
};

const tailwind: ProjectTech = {
  url: "https://tailwindcss.com",
  class: "devicon-tailwindcss-plain",
  color: "#63DBFB",
};

const supabase: ProjectTech = {
  url: "https://supabase.com",
  class: "devicon-supabase-plain",
  color: "#3ECF8E",
};

export function getProjects(): Project[] {
  return [
    {
      name: "My Spending",
      description: "Manage your finances like a pro and generate your ledger",
      imageSrc: "/images/ms_1.png",
      images: ["/images/ms_1.png", "/images/ms_2.png", "/images/ms_3.png"],
      technologies: [supabase, next, typescript, tailwind],
      url: "https://my-spending-alpha.vercel.app/",
      git: "https://github.com/ColinBertin/my-spending"
    },
    {
      name: "Kanban",
      description: "Manage your tasks like a pro",
      imageSrc: "/images/kanban.png",
      technologies: [django, next, typescript, tailwind, docker],
      url: "https://kanban-ten-bay.vercel.app/",
    },
    {
      name: "Entertainment",
      description: "Create your own watch list",
      imageSrc: "/images/entertainment.png",
      images: [
        "/images/entertainment.png",
        "/images/entertainment_2.png",
        "/images/entertainment_3.png",
      ],
      technologies: [express, react, typescript, tailwind, supabase],
      url: "https://entertainment-lemon.vercel.app/",
      git: "https://github.com/ColinBertin/entertainment_v2",
    },
    {
      name: "My Blog Photographer",
      description: "Photographer portfolio",
      imageSrc: "/images/objectif-crea.png",
      images: [
        "/images/objectif-crea.png",
        "/images/ob_2.png",
        "/images/ob_3.png",
        "/images/ob_4.png",
      ],
      technologies: [next, typescript, tailwind, vercel],
      url: "https://objectif-crea.vercel.app/",
      git: "https://github.com/ColinBertin/objectif-crea",
    },
    {
      name: "Countries infos",
      description: "Get information about country",
      imageSrc: "/images/countries.webp",
      images: ["/images/countries.webp", "/images/countries_1.png"],
      technologies: [react, css],
      url: "https://colinbertin.github.io/countries-flags-infos/",
      git: "https://github.com/ColinBertin/countries-flags-infos",
    },
    {
      name: "Weather Forecast",
      description: "Simple Weather app",
      imageSrc: "/images/weather-min.png",
      technologies: [next, tailwind, vercel],
      url: "https://weather-app-kappa-livid.vercel.app",
      git: "https://github.com/ColinBertin/weather-app",
    },
  ];
}
