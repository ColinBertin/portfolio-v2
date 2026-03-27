"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import ToggleButton from "./ToggleButton";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) return;

  const handleToggle = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <ToggleButton
      className="cursor-pointer font-extrabold"
      isOn={currentTheme === "dark"}
      handleToggle={handleToggle}
      onIcon={<FiSun className="h-5 w-5 text-secondary" />}
      offIcon={<FiMoon className="h-5 w-5 text-secondary" />}
    />
  );
}
