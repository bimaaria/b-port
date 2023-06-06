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
      <nav>
        <ul className="flex flex-col justify-center align-middle">
          {navItems.map(item => (
            <li key={item.href}>
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
