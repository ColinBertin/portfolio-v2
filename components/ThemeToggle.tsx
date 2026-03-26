"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
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
      className="cursor-pointer"
      isOn={currentTheme === "dark"}
      handleToggle={handleToggle}
      onIcon={<BsSun className="h-5 w-5" />}
      offIcon={<BsMoon className="h-5 w-5" />}
    />
  );
}
