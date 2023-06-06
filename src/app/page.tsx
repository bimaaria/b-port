import "./page.css";

export default function Home() {
  const navItems = [
    {
      href: "home",
      label: "Home"
    },
    {
      href: "experiences",
      label: "Experiences"
    },
    {
      href: "projects",
      label: "Projects"
    },
    {
      href: "skills",
      label: "Skills"
    },
    {
      href: "about",
      label: "About"
    },
  ]

  return (
    <main className="min-h-screen">
      <input className="hidden side-menu" type="checkbox" id="side-menu"/>
      <label className="hamb cursor-pointer float-right px-[40px] py-[20px]" htmlFor="side-menu">
        <span className="hamb-line bg-white block h-[2px] relative w-[24px]" />
      </label>
      <nav className="fixed w-full mt-10 overflow-hidden transition ease-out delay-500 max-h-0">
        <ul className="flex flex-col justify-center w-full align-middle menu">
          {navItems.map(item => (
            <li key={item.href} className="my-2 text-center">
              <a href={`#${item.href}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col justify-center min-h-screen px-4 py-10 align-middle gap-y-3">
        <h2 className="text-3xl">Hi!</h2>
        <h1 className="text-4xl">I'm <span className="font-bold text-emerald-400">Bima</span></h1>
        <p>
          Coding enthusiast with more than 2 years work experienced as a
          <span className="font-bold text-emerald-500"> Full Stack Developer</span>. 
          I love to work with <span className="font-bold text-emerald-500">Javascript</span>.
        </p>
      </div>
    </main>
  )
}
