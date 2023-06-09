export default function Home() {
  return (
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
  )
}

