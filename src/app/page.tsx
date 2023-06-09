import Navbar from "./components/Navbar";
import Experiences from "./experiences/page";
import "./page.css";
import Summary from "./summary/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import About from "./about/page";

export default function Home() {
  return (
    <div className="min-h-screen" id="wrapper">
      <Navbar />
      <main id="content">
        <Summary />
        <Experiences />
        <Projects />
        <Skills />
        <About />
      </main>
    </div>
  )
}
