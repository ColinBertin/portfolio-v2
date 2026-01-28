import { Skill } from "@/types";
import ent from "../public/images/entertainment.png";
import obj from "../public/images/objectif-crea.png";
import country from "../public/images/countries.webp";
import weather from "../public/images/weather-min.png";
// import kan from "../public/images/kanban.png";

export const skillList = (options: {
  theme: "light" | "dark";
}): Record<string, Skill[]> => {
  const { theme } = options;

  return {
    "Front-end": [
      {
        name: "React",
        url: "https://react.dev",
        class: "devicon-react-plain",
        color: "#63DBFB",
      },
      {
        name: "Next.js",
        url: "https://nextjs.org",
        class: "devicon-nextjs-plain",
        color: theme === "dark" ? "#fff" : "#101829",
      },
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org",
        class: "devicon-typescript-plain",
        color: "#2f73bf",
      },
      {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com",
        class: "devicon-tailwindcss-plain",
        color: "#63DBFB",
      },
      {
        name: "HTML5",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        class: "devicon-html5-plain",
        color: "#E44F26",
      },
      {
        name: "CSS3",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        class: "devicon-css3-plain",
        color: "#1572B6",
      },
    ],
    "Back-end": [
      {
        name: "Express",
        url: "https://expressjs.com",
        class: "devicon-express-original",
        color: theme === "dark" ? "#f5f5f5" : "#101829",
      },
      {
        name: "Ruby",
        url: "https://www.ruby-lang.org/en/",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg",
      },
      {
        name: "Rails",
        url: "https://rubyonrails.org",
        class: "devicon-rails-plain",
        color: "#D4382E",
      },
      {
        name: "Python",
        url: "https://docs.python.org/3/",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        name: "Django",
        url: "https://docs.djangoproject.com/en/5.1/",
        class: "devicon-django-plain",
        color: "#0b4b33",
      },
      {
        name: "PostgreSQL",
        url: "https://www.postgresql.org/",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Node.js",
        url: "https://nodejs.org",
        class: "devicon-nodejs-plain",
        color: "#339933",
      },
    ],
    Tools: [
      {
        name: "Git",
        url: "https://git-scm.com",
        class: "devicon-git-plain",
        color: "#f54d27",
      },
      {
        name: "Vercel",
        url: "https://vercel.com/",
        class: "devicon-vercel-original",
        color: theme === "dark" ? "#fff" : "#101829",
      },
      {
        name: "Heroku",
        url: "https://devcenter.heroku.com",
        class: "devicon-heroku-original",
        color: "#6837AF",
      },
      {
        name: "Figma",
        url: "https://www.figma.com/",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      },
      {
        name: "Docker",
        url: "https://www.docker.com/",
        class: "devicon-docker-plain",
        color: "#2496ED",
      },
      {
        name: "AWS",
        url: "https://aws.amazon.com/",
        class: "devicon-amazonwebservices-plain",
        color: "#FF9900",
      },
    ],
  };
};

export const projectList = () => {
  const express = () => (
    <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">
      <i
        className="devicon-express-original"
        style={{ color: "#F5F5F5" }}
      />
    </a>
  );

  // const django = () => (
  //   <a
  //     href="https://www.djangoproject.com"
  //     target="_blank"
  //     rel="noopener noreferrer"
  //   >
  //     <i className="devicon-django-plain" style={{ color: "#092E20" }} />
  //   </a>
  // );

  // const rails = () => (
  //   <a
  //     href="https://rubyonrails.org"
  //     target="_blank"
  //     rel="noopener noreferrer"
  //   >
  //     <i
  //       className="devicon-rails-plain-wordmark"
  //       style={{ color: "#D4382E" }}
  //     />
  //   </a>
  // );

  const typescript = () => (
    <a
      href="https://www.typescriptlang.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i
        className="devicon-typescript-plain"
        style={{ color: "#2f73bf" }}
      />
    </a>
  );

  // const javascript = () => (
  //   <a
  //     href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  //     target="_blank"
  //     rel="noopener noreferrer"
  //   >
  //     <i
  //       className="devicon-javascript-plain"
  //       style={{ color: "#EFD82F" }}
  //     />
  //   </a>
  // );

  const vercel = () => (
    <a
      href="https://vercel.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="devicon-vercel-original" style={{ color: "#000" }} />
    </a>
  );

  // const heroku = () => (
  //   <a
  //     href="https://devcenter.heroku.com"
  //     target="_blank"
  //     rel="noopener noreferrer"
  //   >
  //     <i
  //       className="devicon-heroku-original-wordmark"
  //       style={{ color: "#6837AF" }}
  //     />
  //   </a>
  // );

  // const html = () => (
  //   <a
  //     href="https://developer.mozilla.org/en-US/docs/Web/HTML"
  //     target="_blank"
  //     rel="noopener noreferrer"
  //   >
  //     <i
  //       className="devicon-html5-plain-wordmark"
  //       style={{ color: "#DD4C30" }}
  //     />
  //   </a>
  // );

  const css = () => (
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/CSS"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i
        className="devicon-css3-plain-wordmark"
        style={{ color: "#3995CF" }}
      />
    </a>
  );

  // const bootstrap = () => (
  //   <a
  //     href="https://getbootstrap.com"
  //     target="_blank"
  //     rel="noopener noreferrer"
  //   >
  //     <i
  //       className="devicon-bootstrap-plain-wordmark"
  //       style={{ color: "#794EF6" }}
  //     />
  //   </a>
  // );

  const react = () => (
    <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
      <i className="devicon-react-plain" style={{ color: "#63DBFB" }} />
    </a>
  );

  const next = () => (
    <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
      <i
        className="devicon-nextjs-plain-wordmark"
        style={{ color: "#FFF" }}
      />
    </a>
  );

  const tailwind = () => (
    <a
      href="https://tailwindcss.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i
        className="devicon-tailwindcss-plain"
        style={{ color: "#63DBFB" }}
      />
    </a>
  );

  const projects = [
    // {
    //   name: "Kanban",
    //   description: "Manage your tasks like a pro",
    //   img: kan,
    //   language: [django(), next(), typescript(), tailwind()],
    //   url: "https://kanban-ten-bay.vercel.app/",
    // },

    {
      name: "Entertainment",
      description: "Create your own watch list",
      img: ent,
      language: [express(), react(), typescript(), tailwind()],
      url: "https://entertainment-lemon.vercel.app/",
      git: "https://github.com/ColinBertin/entertainment_v2",
    },

    {
      name: "My Blog Photographer",
      description: "Photographer portfolio",
      img: obj,
      language: [next(), typescript(), tailwind(), vercel()],
      url: "https://objectif-crea.vercel.app/",
      git: "https://github.com/ColinBertin/objectif-crea",
    },

    {
      name: "Countries infos",
      description: "Get information about country",
      img: country,
      language: [react(), css()],
      url: "https://colinbertin.github.io/countries-flags-infos/",
      git: "https://github.com/ColinBertin/countries-flags-infos",
    },

    // {
    //   name: "TraQ",
    //   description: "Emergency response service...",
    //   img: traq,
    //   language: [rails(), javascript(), heroku()],
    //   url: "https://traq-795.herokuapp.com",
    //   git: "https://github.com/ColinBertin/traq",
    // },

    {
      name: "Weather Forecast",
      description: "Simple Weather app",
      img: weather,
      language: [next(), tailwind(), vercel()],
      url: "https://weather-app-kappa-livid.vercel.app",
      git: "https://github.com/ColinBertin/weather-app",
    },

    // {
    //   name: "Drum JS",
    //   description: "Playing around with event listeners and sound",
    //   img: drump,
    //   language: [html(), css(), javascript()],
    //   url: "https://colinbertin.github.io/JS-drum-kit",
    //   git: "https://github.com/ColinBertin/JS-drum-kit",
    // },
  ];

  return projects;
};
