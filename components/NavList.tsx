"use client";

import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

export default function NavList({
  isOpen,
  handleNavbar,
}: {
  isOpen: boolean;
  handleNavbar: () => void;
}) {
  const navbarItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <ul
      className={`
    bg-bg
    flex flex-col items-center justify-center gap-12 sm:gap-6
    origin-top transition-transform duration-500
    fixed top-14 left-0 z-40 w-full h-[calc(100vh-3.5rem)]
    ${isOpen ? "scale-y-100" : "scale-y-0"}
    md:static md:flex-row md:h-auto md:w-auto md:scale-y-100 md:flex
  `}
    >
      {navbarItems.map((item) => (
        <li key={item.name} className="cursor uppercase text-2xl md:text-base">
          <Button href={item.href} name={item.name} handleClick={handleNavbar} />
        </li>
      ))}
      <ThemeToggle />
    </ul>
  );
}
