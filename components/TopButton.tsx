"use client";

import { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

export default function TopButton() {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isScrolling) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed z-10 flex items-center justify-center
        bottom-[90px] right-[20px]
        sm:bottom-[100px] sm:right-[50px]
        p-2 rounded-full
        bg-tertiary text-primary
        text-[20px] sm:text-[32px]
        transition-colors duration-200
        hover:bg-pink-500
        cursor-pointer
      "
    >
      <IoIosArrowRoundUp />
    </button>
  );
}