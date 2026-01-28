import Banner from "@/components/Banner";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Banner />
      <main>
        <About />
        <Skills />
        <Projects />
        {/* <Contact theme={theme} /> */}
      </main>
      {/* <Footer />
        <TopButton /> */}
    </div>
  );
}
