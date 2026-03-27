"use client";

import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import LanguageSelect from "./LanguageSelect";
import { useI18n } from "@/app/i18n-provider";

export default function NavList({
  isOpen,
  handleNavbar,
}: {
  isOpen: boolean;
  handleNavbar: () => void;
}) {
  const { dictionary: t } = useI18n();

  const navbarItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <ul
      className={`
    bg-bg
    flex flex-col items-center justify-center gap-12 sm:gap-6
    origin-top transition-transform duration-500
    fixed top-14 left-0 z-40 w-full h-[calc(100vh-3.5rem)]
    ${isOpen ? "scale-y-100" : "scale-y-0"}
    md:static md:flex-row md:h-auto md:w-auto md:scale-y-100 md:flex mr-4
  `}
    >
      {navbarItems.map((item) => (
        <li key={item.name} className="cursor uppercase text-2xl md:text-base">
          <Button href={item.href} name={item.name} handleClick={handleNavbar} />
        </li>
      ))}
      <li className="flex items-center gap-3">
        <LanguageSelect />
        <ThemeToggle />
      </li>
    </ul>
  );
}
