import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import Container from "./common/Container"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="mt-20 border-t border-stone-200/80 bg-stone-100/60 pt-12 pb-8">
      <Container>
        <div className="space-y-10">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-sm">
              <Link to="/" className="text-lg font-bold text-stone-950 tracking-tight flex items-center gap-1">
                <span>Mohammed Rayyan</span>
                <span className="text-stone-950 font-extrabold text-lg leading-none">.</span>
              </Link>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Frontend developer specialized in responsive web applications, component-driven development, and modern UI engineering.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-stone-600">
              <Link to="/" className="hover:text-stone-950 transition-colors">Home</Link>
              <Link to="/projects" className="hover:text-stone-950 transition-colors">Projects</Link>
              <Link to="/skills" className="hover:text-stone-950 transition-colors">Skills</Link>
              <Link to="/experience" className="hover:text-stone-950 transition-colors">Experience</Link>
              <Link to="/contact" className="hover:text-stone-950 transition-colors">Contact</Link>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/mohammedrayyan-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-950 border border-stone-200 shadow-sm transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammedrayyan-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-950 border border-stone-200 shadow-sm transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:mohammedrayyandmr@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-full bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-950 border border-stone-200 shadow-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="p-2.5 rounded-full bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-950 border border-stone-200 shadow-sm transition-colors ml-2"
                title="Scroll back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <p>© {new Date().getFullYear()} Mohammed Rayyan. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <span>Open to opportunities</span>
              <span>•</span>
              <span>Based in India</span>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  )
}

export default Footer