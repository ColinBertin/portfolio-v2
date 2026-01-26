import Banner from "@/components/Banner";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Banner />
      <main>
        <About />
        {/* <Skills theme={theme} />
          <Projects />
          <Contact theme={theme} /> */}
      </main>
      {/* <Footer />
        <TopButton /> */}
    </div>
  );
}
