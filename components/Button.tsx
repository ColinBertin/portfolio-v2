"use client";

export default function Button({ name, href, handleClick }: { name: string; href: string; handleClick: () => void }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        handleClick();

        if (!href.startsWith("#")) return;

        e.preventDefault();
        const sectionId = href.slice(1);
        if (!sectionId) return;

        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="text-secondary transition-colors duration-300 hover:text-pink-500"
    >
      {name}
    </a>
  );
}