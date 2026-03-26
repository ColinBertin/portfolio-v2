import { Skill } from "@/types";

export const skillList = (options: {
  theme: "light" | "dark";
}): Record<string, Skill[]> => {
  void options;

  return {
    "Front-end": [
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        class: "devicon-javascript-plain",
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org",
        class: "devicon-typescript-plain",
        color: "#2f73bf",
      },
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
        color: "var(--primary)",
      },
      {
        name: "Playwright",
        url: "https://playwright.dev",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
      },
      {
        name: "Vitest",
        url: "https://vitest.dev",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg",
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
        name: "RSpec",
        url: "https://rspec.info",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg",
      },
      {
        name: "Node.js",
        url: "https://nodejs.org",
        class: "devicon-nodejs-plain",
        color: "#339933",
      },
      {
        name: "Express",
        url: "https://expressjs.com",
        class: "devicon-express-original",
        color: "var(--primary)",
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
    ],
    Tools: [
      {
        name: "Git",
        url: "https://git-scm.com",
        class: "devicon-git-plain",
        color: "#f54d27",
      },
      {
        name: "GitHub Actions",
        url: "https://github.com/features/actions",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
      },
      {
        name: "Vercel",
        url: "https://vercel.com/",
        class: "devicon-vercel-original",
        color: "var(--primary)",
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
