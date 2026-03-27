import type { Locale } from "@/i18n.config";

export type Dictionary = {
  languageNames: Record<Locale, string>;
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
    languageLabel: string;
  };
  banner: {
    intro: string;
    role: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    heading: string;
    paragraphOne: string;
    paragraphTwo: string;
    connect: string;
  };
  sections: {
    skills: string;
    projects: string;
    contact: string;
  };
  skills: {
    frontend: string;
    backend: string;
    tools: string;
  };
  projectCard: {
    stack: string;
    onGithub: string;
    visitProject: string;
    liveSite: string;
  };
  contact: {
    intro: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sending: string;
    submit: string;
    successToast: string;
    unknownError: string;
    networkError: string;
  };
  footer: {
    copyright: string;
  };
};
