export const i18n = {
  defaultLocale: "en",
  locales: ["en", "fr", "ja"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export type Translation = {
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

export const translations: Record<Locale, Translation> = {
  en: {
    languageNames: {
      en: "English",
      fr: "Francais",
      ja: "Japanese",
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      languageLabel: "Language",
    },
    banner: {
      intro: "Hi, my name is",
      role: "I am a Full Stack Developer.",
      description:
        "I build responsive, production-ready web applications using TypeScript, React, and Next.js. I focus on creating intuitive user interfaces backed by reliable systems, translating complex ideas into seamless, maintainable experiences.",
      cta: "View Work",
    },
    about: {
      title: "About Me",
      heading: "Hi! I am Colin, nice to meet you. Please take a look around.",
      paragraphOne:
        "I am a frontend-focused full-stack developer based in Yokohama, Japan, passionate about building user-centric web applications. Over the past few years, I have developed and maintained production-ready systems using TypeScript, React, and Next.js, with a strong emphasis on performance, reliability, and clean architecture.",
      paragraphTwo:
        "I enjoy translating complex ideas into intuitive, responsive interfaces, and I thrive in collaborative environments where thoughtful design and solid engineering come together to deliver real value.",
      connect: "Let's connect.",
    },
    sections: {
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    skills: {
      frontend: "Front-end",
      backend: "Back-end",
      tools: "Tools",
    },
    projectCard: {
      stack: "Stack",
      onGithub: "on GitHub",
      visitProject: "Visit",
      liveSite: "Live site",
    },
    contact: {
      intro: "Have a project in mind? Send me a message and I will get back to you.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sending: "Sending...",
      submit: "Let's Collaborate",
      successToast: "Message received. Thank you.",
      unknownError: "Something went wrong. Please try again.",
      networkError: "Network error. Please try again.",
    },
    footer: {
      copyright: "© Colin Bertin JP 2026, All rights reserved.",
    },
  },
  fr: {
    languageNames: {
      en: "Anglais",
      fr: "Français",
      ja: "Japonais",
    },
    nav: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
      languageLabel: "Langue",
    },
    banner: {
      intro: "Bonjour, je m'appelle",
      role: "Je suis développeur full stack.",
      description:
        "Je construis des applications web réactives et prêtes pour la production avec TypeScript, React et Next.js. Je crée des interfaces intuitives appuyées par des systèmes fiables, en transformant des idées complexes en expériences fluides et maintenables.",
      cta: "Voir les projets",
    },
    about: {
      title: "À propos",
      heading: "Salut ! Je suis Colin, ravi de vous rencontrer. Bonne visite.",
      paragraphOne:
        "Je suis un développeur full stack orienté front-end basé à Yokohama, au Japon, passionné par la création d'applications web centrées sur l'utilisateur. Ces dernières années, j'ai développé et maintenu des systèmes prêts pour la production avec TypeScript, React et Next.js, avec une attention particulière à la performance, la fiabilité et une architecture propre.",
      paragraphTwo:
        "J'aime transformer des idées complexes en interfaces intuitives et réactives, et je m'épanouis dans des environnements collaboratifs où design réfléchi et ingénierie solide se rejoignent pour apporter une vraie valeur.",
      connect: "Discutons ensemble.",
    },
    sections: {
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    skills: {
      frontend: "Front-end",
      backend: "Back-end",
      tools: "Outils",
    },
    projectCard: {
      stack: "Stack",
      onGithub: "sur GitHub",
      visitProject: "Visiter",
      liveSite: "Site en ligne",
    },
    contact: {
      intro:
        "Vous avez un projet en tête ? Envoyez-moi un message et je vous répondrai rapidement.",
      nameLabel: "Nom",
      emailLabel: "Email",
      messageLabel: "Message",
      sending: "Envoi...",
      submit: "Collaborons ensemble",
      successToast: "Message reçu. Merci.",
      unknownError: "Une erreur est survenue. Veuillez réessayer.",
      networkError: "Erreur réseau. Veuillez réessayer.",
    },
    footer: {
      copyright: "© Colin Bertin JP 2026, Tous droits réservés.",
    },
  },
  ja: {
    languageNames: {
      en: "英語",
      fr: "フランス語",
      ja: "日本語",
    },
    nav: {
      about: "自己紹介",
      skills: "スキル",
      projects: "プロジェクト",
      contact: "お問い合わせ",
      languageLabel: "言語",
    },
    banner: {
      intro: "こんにちは、私は",
      role: "フルスタック開発者です。",
      description:
        "TypeScript、React、Next.js を使って、レスポンシブで本番運用可能な Web アプリケーションを開発しています。複雑なアイデアを、保守しやすく直感的な体験に落とし込むことを大切にしています。",
      cta: "実績を見る",
    },
    about: {
      title: "自己紹介",
      heading: "はじめまして、Colin です。ぜひご覧ください。",
      paragraphOne:
        "横浜を拠点に活動する、フロントエンド志向のフルスタック開発者です。ここ数年は TypeScript、React、Next.js を中心に、本番運用向けシステムの開発と保守を行ってきました。性能、信頼性、そしてクリーンな設計を重視しています。",
      paragraphTwo:
        "複雑な課題を直感的で使いやすい UI に変換することが得意です。丁寧なデザインと堅実な実装が合わさるチーム環境で、価値あるプロダクトを届けることにやりがいを感じています。",
      connect: "ぜひご連絡ください。",
    },
    sections: {
      skills: "スキル",
      projects: "プロジェクト",
      contact: "お問い合わせ",
    },
    skills: {
      frontend: "フロントエンド",
      backend: "バックエンド",
      tools: "ツール",
    },
    projectCard: {
      stack: "技術スタック",
      onGithub: "を GitHub で見る",
      visitProject: "アクセス",
      liveSite: "公開サイト",
    },
    contact: {
      intro: "プロジェクトのご相談があれば、メッセージをお送りください。",
      nameLabel: "お名前",
      emailLabel: "メール",
      messageLabel: "メッセージ",
      sending: "送信中...",
      submit: "相談する",
      successToast: "メッセージを受け取りました。ありがとうございます。",
      unknownError: "エラーが発生しました。もう一度お試しください。",
      networkError: "ネットワークエラーです。もう一度お試しください。",
    },
    footer: {
      copyright: "© Colin Bertin JP 2026, All rights reserved.",
    },
  },
};

export function getLanguageFromLocale(locale: string | undefined): Locale {
  if (!locale) return i18n.defaultLocale;
  const normalized = locale.toLowerCase();
  if (normalized.startsWith("fr")) return "fr";
  if (normalized.startsWith("ja")) return "ja";
  return i18n.defaultLocale;
}
