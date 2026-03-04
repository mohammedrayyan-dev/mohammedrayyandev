import LinkedinIcon from "/src/assets/images/Icons/LinkedinIcon.png"
import GithubIcon from "/src/assets/images/Icons/GithubIcon.png"
import { useState, useEffect } from "react"

const NavLink = [
    { name: "Projects", link: "/projects" },
    { name: "Skills & Tools", link: "/skills-&-tools" },
    { name: "Experience", link: "/experience" },
    { name: "Contact", link: "/contact" },
]

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (

    <header className={`sticky top-0 z-50 transition-all duration-300
     ${scrolled 
        ? "border-b border-white/10 bg-transparent backdrop-blur-md"
        : "border-b border-transparent bg-transparent "}`}
        >
    <div className="py-4 px-5 md:px-6 lg:px-20 max-w-[1800px] mx-auto">

        <div className="flex flex-row justify-between">

        <nav className="flex flex-row items-center gap-6">
        <a 
        href="/"
        className="text-[#7AA2F7] text-xl font-semibold">
            Mohammed Rayyan
        </a>
        {NavLink.map((nav) => (
        <a key={nav.name} href={nav.link} className="text-[#C9D1E3] hover:text-[#7AA2F7] font-lightbold">
            {nav.name}
        </a>
        ))}
        </nav>

        <div className="flex flex-row gap-2">
            <a href="https://www.linkedin.com/in/mohammedrayyan-dev" target="_blank" className="flex items-center justify-center w-9 h-9 hover:bg-white/10 cursor-pointer rounded-lg">
            <img src={LinkedinIcon} alt="Linkedin Icon" className="w-6 object-contain" />
            </a>
            <a href="https://github.com/mohammedrayyan-dev" target="_blank" className="flex items-center justify-center w-9 h-9 hover:bg-[#FFFFFF10] cursor-pointer rounded-lg">
            <img src={GithubIcon} alt="Github Icon" className="w-6 object-contain" />
            </a>
        </div>

        </div>

    </div>
    </header>
  )
}

export default Navbar