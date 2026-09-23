import { Link } from "react-router-dom"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import Container from "./common/Container"
import BrowserWindow from "./common/BrowserWindow"

// High-Resolution Pure Website Screenshots
import LuluScreenshot from "../assets/images/devices/lulu-screenshot.png"
import QwestScreenshot from "../assets/images/devices/qwest-desktop.png"
import ProfinaScreenshot from "../assets/images/devices/profina-screenshot.png"

const projects = [
  {
    id: "lulu-furniture",
    tag: "Commercial Client Delivery",
    title: "Lulu Furniture",
    subtitle: "Real-world E-Commerce & Product Showcase Platform",
    description:
      "Engineered and shipped a production React web application for a commercial furniture brand. Built modular product catalogs, responsive touch-optimized navigation, and media optimization for rapid load times.",
    impact: "Live commercial production website serving real customers across mobile and desktop.",
    tech: ["React.js", "Tailwind CSS", "Responsive UI", "Client Delivery"],
    image: LuluScreenshot,
    live: "https://www.lulufurniture.in/",
    github: "https://github.com/mohammedrayyan-dev/Lulu-Furniture.git",
  },
  {
    id: "qwest",
    tag: "Full-Stack Web App",
    title: "Qwest Task Suite",
    subtitle: "State-Driven Productivity & Task Management System",
    description:
      "A modern task suite featuring secure user authentication, priority filtering, and real-time state synchronization. Designed with an emphasis on seamless UX, fast task operations, and zero visual friction.",
    impact: "Comprehensive task state architecture with authentication & responsive dashboard.",
    tech: ["React.js", "Tailwind CSS", "Firebase Auth", "State Architecture"],
    image: QwestScreenshot,
    live: "https://qwest-seven.vercel.app/",
    github: "https://github.com/mohammedrayyan-dev/Qwest.git",
  },
  {
    id: "profina",
    tag: "Profile Management",
    title: "Profina Identity Hub",
    subtitle: "Digital Profile & Identity Platform",
    description:
      "A centralized digital profile platform empowering users to manage, customize, and showcase their personal and professional links through an intuitive responsive interface.",
    impact: "Clean component hierarchy with responsive cross-device layout.",
    tech: ["React.js", "Tailwind CSS", "Component Systems", "Vercel"],
    image: ProfinaScreenshot,
    live: "https://profina.vercel.app/",
    github: "https://github.com/mohammedrayyan-dev/Profina.git",
  },
]

const SelectedProjects = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-stone-200">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold font-mono">
                Featured Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
                Selected Projects
              </h2>
              <p className="text-sm text-stone-600 max-w-lg">
                Production client builds and modern web applications engineered with attention to performance, architecture, and detail.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-800 hover:text-stone-950 bg-white hover:bg-stone-50 border border-stone-200 px-4 py-2 rounded-full transition-colors self-start sm:self-auto shadow-sm"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-600" />
            </Link>
          </div>

          {/* Projects List */}
          <div className="space-y-10">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="group rounded-3xl bg-white border border-stone-200/90 overflow-hidden transition-all duration-300 p-6 sm:p-10 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 card-shadow hover:shadow-xl hover:border-stone-400"
              >
                {/* Left: Metadata & Narrative */}
                <div className="flex-1 flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-stone-100 text-stone-800 border border-stone-200">
                        {project.tag}
                      </span>
                      <span className="text-xs text-stone-400 font-mono">
                        0{idx + 1} //
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-stone-950 group-hover:text-[#b36b47] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-stone-600">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-stone-600 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                      <strong className="text-stone-950 font-semibold">Impact: </strong>
                      {project.impact}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-stone-950 via-stone-900 to-[#27150f] hover:to-[#381d14] text-white border border-stone-200 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#c87d55]" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repository</span>
                    </a>
                  </div>
                </div>

                {/* Right: Sleek Browser Window Preview */}
                <div className="lg:w-[48%] flex items-center justify-center p-2 sm:p-4 group/preview select-none">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                    aria-label={`Visit ${project.title} live site`}
                  >
                    <BrowserWindow
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      url={project.live}
                    />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}

export default SelectedProjects