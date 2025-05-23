import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/heroSection";
import { Projects } from "@/components/shared/Projects";
import Skills from "@/components/shared/Skills";
import Contact from "@/components/shared/contact";
import About from "@/components/shared/About";
import Experience from "@/components/shared/Experience";

export default function Home() {

  return (
    <main className="bg-background text-zinc-400">
      <Navbar />
      <HeroSection />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}

