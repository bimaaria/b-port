import ExpCard from "./components/Card";
import Navbar from "./components/Navbar";
import "./page.css";

export default function Home() {
  return (
    <div className="min-h-screen" id="wrapper">
      <Navbar />
      <main id="content">
        <section className="flex flex-col justify-center min-h-screen px-4 py-10 align-middle gap-y-3" id="home">
          <h2 className="text-3xl">Hi!</h2>
          <h1 className="text-4xl">I'm 
            <span className="font-bold text-cyan-400"> Bima</span>
          </h1>
          <p>
            <span className="font-bold text-cyan-500">Full Stack Developer </span> 
            who loves to work with 
            <span className="font-bold text-cyan-500"> Javascript </span>
            ecosystem and it's frameworks.
          </p>
          <button className="border rounded w-[120px] h-[36px] border-cyan-500 hover:cursor-pointer" type="button"><a href="#about">Reach me</a></button>
        </section>
        <section className="flex flex-col h-screen min-h-screen px-4 py-10 bg-slate-200" id="experiences">
          <ExpCard />
        </section>
        <section className="min-h-screen" id="projects">
          <h1>Projects</h1>
        </section>
        <section className="min-h-screen" id="skills">
          <h1>Skills</h1>
        </section>
        <section className="min-h-screen" id="about">
          <h1>About</h1>
        </section>
      </main>
    </div>
  )
}
