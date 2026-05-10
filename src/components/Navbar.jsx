import { X, Menu, Github, Linkedin } from "lucide-react"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import Container from "./common/Container"

const NavLinksDesktop = [
    { id: 1, name: "Projects", link: "/projects" },
    { id: 2, name: "Skills", link: "/skills" },
    { id: 3, name: "Experience", link: "/experience" },
    { id: 4, name: "Contact", link: "/contact" },
]

const NavLinksMobile = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Skills", link: "/skills" },
    { name: "Experience", link: "/experience" },
    { name: "Contact", link: "/contact" },
]

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)

    const { pathname } = useLocation()

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
        ? "border-b border-[#1a1a1a] bg-[#0f0708]/50 backdrop-blur-md"
        : "border-b border-transparent bg-transparent "}`}
        >
        
        <nav className="py-4 w-full mx-auto">
        
        <Container>
        
        <div className="flex flex-row justify-between">
        
        {/* Logo */}
        <Link
        to="/"
        className={`hover:text-red-500 text-lg lg:text-2xl font-bold transition-all duration-300
        ${pathname !== "/" ? "text-[#ffffff]" : "text-[#dc2626]" }`}>
            MR <span className="text-[#ffffff]">.</span>
        </Link>

        {/* Desktop Navigation Links */}

        <div className="flex flex-row items-center gap-4 md:gap-8">
        
        <div className="flex flex-row items-center gap-6">
        {NavLinksDesktop.map((nav) => (
        <Link 
        key={nav.id} 
        to={nav.link} 
        className={`hidden md:block hover:text-red-500 text-sm lg:text-base font-semibold transition-all duration-300
        ${pathname === nav.link ? "text-[#dc2626]" : "text-[#6b6b6b]" }`}>
            {nav.name}
        </Link>
        ))}
        </div>

        <div className="flex flex-row gap-4">
            <a href="https://www.linkedin.com/in/mohammedrayyan-dev" target="_blank" className="flex items-center justify-center w-4 md:w-5 lg:w-6 cursor-pointer rounded-lg">
            <Linkedin className="text-[#6b6b6b] hover:text-red-500 w-full h-full object-contain" />
            </a>
            <a href="https://github.com/mohammedrayyan-dev" target="_blank" className="flex items-center justify-center w-4 md:w-5 lg:w-6 cursor-pointer rounded-lg">
            <Github className="text-[#6b6b6b] hover:text-red-500 w-full h-full object-contain" />
            </a>
        </div>

        {/* Mobile Hamburger Menu */}

        <div className="block md:hidden">
            <button
            className="flex"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? 
            <X className="text-red-500 w-5 h-5"/>
            : <Menu className="text-[#6b6b6b] w-5 h-5"/>
            }
            </button>
        </div>

        </div>

        </div>
        
        </Container>

        </nav>

        {/* Mobile Hamburger Ui */}

        {menuOpen && (
        <div className="absolute md:hidden flex flex-col items-center text-[#6b6b6b] text-sm font-semibold gap-2 top-16 right-2 bg-[#0f0708]/50 border border-[#1a1a1a] p-3 rounded-xl">
            {NavLinksMobile.map((n) => (
            <Link 
            to={n.link}
            onClick={() => setMenuOpen(false)}>
                {n.name}
            </Link>
            ))}
        </div>
        )}
        
    </header>
  )
}

export default Navbar