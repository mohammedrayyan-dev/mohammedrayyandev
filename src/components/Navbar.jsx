import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ArrowUpRight, Github, Linkedin } from "lucide-react"
import Container from "./common/Container"

const navLinks = [
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
]

const Navbar = () => {
  const { pathname } = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f9f8f6]/90 backdrop-blur-md border-b border-stone-200/80">
      <Container>
        <div className="h-16 sm:h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-1 group py-1"
          >
            <span className="font-bold text-base sm:text-lg tracking-tight text-stone-900 group-hover:text-stone-700 transition-colors">
              Mohammed Rayyan
            </span>
            <span className="text-[#b36b47] font-extrabold text-base sm:text-lg leading-none">
              .
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors relative py-1 ${
                  pathname === "/"
                    ? "text-stone-950 font-semibold"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                Home
                {pathname === "/" && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-stone-950 to-[#b36b47] rounded-full" />
                )}
              </Link>

              {navLinks.map((link) => {
                const isActive = pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors relative py-1 ${
                      isActive
                        ? "text-stone-950 font-semibold"
                        : "text-stone-500 hover:text-stone-900"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-stone-950 to-[#b36b47] rounded-full" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Right Divider & Socials */}
            <div className="h-4 w-[1px] bg-stone-300" />

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/mohammedrayyan-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-stone-500 hover:text-stone-900 transition-colors p-1"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammedrayyan-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-stone-500 hover:text-stone-900 transition-colors p-1"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-stone-950 hover:bg-stone-800 text-white border border-stone-800 shadow-sm transition-all"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#c87d55]" />
              </a>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 border border-stone-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-stone-900" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </Container>

      {/* Mobile Menu Dropdown Bar */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#f9f8f6] px-6 py-4 space-y-3 shadow-lg">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 text-sm font-medium ${
              pathname === "/" ? "text-stone-950 font-bold" : "text-stone-700"
            }`}
          >
            Home
          </Link>

          {navLinks.map((link) => {
            const isActive = pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive ? "text-stone-950 font-bold" : "text-stone-700"
                }`}
              >
                {link.name}
              </Link>
            )
          })}

          <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/mohammedrayyan-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-stone-900 p-1"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammedrayyan-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-stone-900 p-1"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-stone-950 text-white"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar