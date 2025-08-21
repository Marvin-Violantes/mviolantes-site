import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Career from "./components/Career";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Career />
      <Projects />
      <Contact />
    </main>
  );
}
