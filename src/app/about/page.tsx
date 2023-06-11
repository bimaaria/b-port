import Image from "next/image"
import bimaPhoto from "../../../public/images/bima.png";

export default function About() {
  return (
    <section className="px-4 py-10" id="about">
      <div className="flex">
        <h1 className="my-auto text-xl font-bold"> 
          Hi! I'm <br />
          <span className="font-bold text-cyan-500">
            Bima Aria Radjasa
          </span>
        </h1>
        <Image 
          src={bimaPhoto}
          alt="bima-photo"
          className="mx-auto my-4 w-[120px] h-[120px]"
        />
      </div>
      <br />
      <p>
        Coding enthusiast with more than 2 years working experience as a <span className="font-bold text-cyan-500">Full Stack Developer</span>. I love to work with <span className="font-bold text-cyan-500">Javascript</span> ecosystem and it's frameworks.
        <br />
        <br />
        So far i have developed 3 real projects. The first two projects that i have developed is web applications for <span className="font-bold text-cyan-500">PT Ki Antaka Rasa</span>. It's more like a dashboard & data management for internal company purpose. The latest one is also a web application called <span className="font-bold text-cyan-500">Safous</span>, which owned by <span className="font-bold text-cyan-500">PT IIJ Global Solutions Indonesia</span>. Basically this project is a <span className="font-bold text-cyan-500">Zero Trust Access</span> application, a topic related to network security.
      </p>
    </section>
  )
}
