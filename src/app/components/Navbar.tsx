export default function Navbar() {
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
  ];

  return (
    <header id="header">
      <input className="hidden side-menu" type="checkbox" id="side-menu"/>
      <label className="hamb cursor-pointer fixed right-[20px] top-[20px] z-50" htmlFor="side-menu">
        <span className="hamb-line bg-white block h-[2px] relative w-[24px]" />
      </label>
      <nav className="fixed w-full overflow-hidden transition ease-out delay-500 nav-item-wrapper max-h-0">
        <ul className="flex flex-col justify-center w-full align-middle menu">
          {navItems?.map(item => (
            <li key={item.href} className="my-2 text-center">
              <a href={`#${item.href}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

