import LinkedinIcon from "../assets/images/Icons/LinkedinIcon.png"
import GithubIcon from "../assets/images/Icons/GithubIcon.png"
import { X, Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const NavLinksDesktop = [
    { id: 1, name: "Projects", link: "/projects" },
    { id: 2, name: "Skills & Tools", link: "/skills-&-tools" },
    { id: 3, name: "Experience", link: "/experience" },
    { id: 4, name: "Contact", link: "/contact" },
]

const NavLinksMobile = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Skills & Tools", link: "/skills-&-tools" },
    { name: "Experience", link: "/experience" },
    { name: "Contact", link: "/contact" },
]

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)

    const [active, setActive] = useState(true)

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
     ${scrolled || menuOpen
        ? "border-b border-white/10 bg-transparent backdrop-blur-md"
        : "border-b border-transparent bg-transparent "}`}
        >
    <div className="py-4 px-5 md:px-6 lg:px-20 max-w-[1800px] mx-auto">

        <div className="flex flex-row justify-between">

        <nav className="flex flex-row items-center gap-6">
        <Link
        to="/"
        onClick={() => setActive(null)}
        className={`hover:text-[#7AA2F7] text-lg lg:text-xl font-semibold transition-all duration-300
        ${active ? "text-[#C9D1E3]" : "text-[#7AA2F7]" }`}>
            Mohammed Rayyan
        </Link>
        {NavLinksDesktop.map((nav) => (
        <Link 
        key={nav.id} 
        to={nav.link} 
        onClick={() => setActive(nav.id)}
        className={`hidden md:block hover:text-[#7AA2F7] md:text-sm lg:text-base font-lightbold transition-all duration-300
        ${active === nav.id? "text-[#7AA2F7]" : "text-[#C9D1E3]" }`}>
            {nav.name}
        </Link>
        ))}
        </nav>

        <div className="flex flex-row items-center gap-4">
            <a href="https://www.linkedin.com/in/mohammedrayyan-dev" target="_blank" className="flex items-center justify-center w-4 md:w-5 lg:w-6 cursor-pointer rounded-lg">
            <img src={LinkedinIcon} alt="Linkedin Icon" className="w-full h-full object-contain" />
            </a>
            <a href="https://github.com/mohammedrayyan-dev" target="_blank" className="flex items-center justify-center w-4 md:w-5 lg:w-6 cursor-pointer rounded-lg">
            <img src={GithubIcon} alt="Github Icon" className="w-full h-full object-contain" />
            </a>

            {/* Hamburger Menu */}
            <div className="block md:hidden">
                <button
                className="flex"
                onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? 
                <X className="text-gray-400 w-5 h-5"/>
                : <Menu className="text-gray-400 w-5 h-5"/>
                }
                </button>
            </div>

        </div>

        </div>

        {menuOpen && (
        <div className="absolute md:hidden flex flex-col items-center gap-2 top-16 right-2 bg-[#0F1115]/80 border border-white/10 text-[#C9D1E3] text-sm p-3 rounded-xl">
            {NavLinksMobile.map((n) => (
            <Link 
            to={n.link}
            onClick={() => setMenuOpen(false)}>
                {n.name}
            </Link>
            ))}
        </div>
        )}
        

    </div>
    </header>
  )
}

export default Navbar