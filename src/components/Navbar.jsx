import LinkedinIcon from "../assets/images/Icons/LinkedinIcon.png"
import GithubIcon from "../assets/images/Icons/GithubIcon.png"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"

const NavLink = [
    { name: "Projects", link: "/projects" },
    { name: "Skills & Tools", link: "/skills-&-tools" },
    { name: "Experience", link: "/experience" },
    { name: "Contact", link: "/contact" },
]

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)

    const [menuOpen, setMenuOpen] = useState(false)

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
        className="text-[#7AA2F7] text-lg md:text-xl font-semibold">
            Mohammed Rayyan
        </a>
        {NavLink.map((nav) => (
        <a key={nav.name} href={nav.link} className="hidden md:block text-[#C9D1E3] hover:text-[#7AA2F7] font-lightbold">
            {nav.name}
        </a>
        ))}
        </nav>

        <div className="flex flex-row items-center gap-4">
            <a href="https://www.linkedin.com/in/mohammedrayyan-dev" target="_blank" className="flex items-center justify-center w-4 md:w-6 cursor-pointer rounded-lg">
            <img src={LinkedinIcon} alt="Linkedin Icon" className="w-full h-full object-contain" />
            </a>
            <a href="https://github.com/mohammedrayyan-dev" target="_blank" className="flex items-center justify-center w-4 md:w-6 cursor-pointer rounded-lg">
            <img src={GithubIcon} alt="Github Icon" className="w-full h-full object-contain" />
            </a>

            {/* Hamburger Menu */}
            <div className="block md:hidden">
                <button
                className="flex"
                onClick={() => setMenuOpen(!menuOpen)}>
                <Menu className="text-gray-400 w-5 h-5"/>
                </button>
            </div>

        </div>

        </div>

        {menuOpen && (
        <div className="absolute md:hidden flex flex-col items-center gap-2 top-16 right-2 bg-[#black90] border border-white/10 text-[#C9D1E3] text-sm p-3 backdrop-blur-md rounded-xl">
            <a href="/projects">Projects</a>
            <a href="/skills-&-tools">Skills & Tools</a>
            <a href="/experience">Experience</a>
            <a href="/contact">Contact</a>
        </div>
        )}
        

    </div>
    </header>
  )
}

export default Navbar