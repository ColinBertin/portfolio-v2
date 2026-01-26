"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../public/logo.png";
import NavList from "./NavList";
import ToggleButton from "./ToggleButton";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  const isMobile = () => window.innerWidth < 768;

  useEffect(() => {
    if (!isMobile()) return;

    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  return (
    <div className="sticky top-0 z-50 h-14 flex justify-between items-center py-1 px-4 bg-bg">
      <Image className="logo" src={Logo} width={50} height={50} alt="logo" />
      {/* Hamburger */}
      <ToggleButton
        isOn={navOpen}
        onIcon={<FaTimes className="h-6 w-6" />}
        offIcon={<FaBars className="h-6 w-6" />}
        handleToggle={toggleNav}
        className="cursor-pointer md:hidden"
      />

      {/* Navigation List */}
      <NavList isOpen={navOpen} handleNavbar={toggleNav} />
    </div>
  );
}
