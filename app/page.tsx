import Image from "next/image";
import profilePicture from "../public/images/profile_crop.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import Banner from "@/components/Banner";
// import { BsMoon, BsSun } from "react-icons/bs";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center transition-all duration-300">
      <div className="container mx-auto px-4 ">
        <Banner />
        {/* <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Banner />
        <main>
          <About />
          <Skills theme={theme} />
          <Projects />
          <Contact theme={theme} />
        </main>
        <Footer />
        <TopButton /> */}
      </div>
    </div>
  );
}
