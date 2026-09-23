import { useState } from "react"
import { ExternalLink, Github, CheckCircle2, ArrowRight } from "lucide-react"
import Container from "../components/common/Container"
import BrowserWindow from "../components/common/BrowserWindow"

// High-Resolution Pure Website Screenshots
import LuluScreenshot from "../assets/images/devices/lulu-screenshot.png"
import QwestScreenshot from "../assets/images/devices/qwest-desktop.png"
import ProfinaScreenshot from "../assets/images/devices/profina-screenshot.png"
import TocosScreenshot from "../assets/images/devices/tocos-screenshot.webp"

const projectsData = [
  {
    id: 1,
    category: "client",
    tag: "Commercial Client Delivery",
    title: "Lulu Furniture",
    role: "Lead Frontend Developer",
    subtitle: "Production E-Commerce & Commercial Catalog Platform",
    description:
      "A production-ready React web application engineered for a real commercial furniture business. Features high-fidelity catalog layouts, responsive touch menus, media optimizations, and cross-device speed.",
    highlights: [
      "Custom responsive product showcase & categorized catalog",
      "Modular, reusable React component hierarchy",
      "Optimized WebP assets for rapid load times across mobile networks",
      "Smooth micro-interactions and touch-friendly mobile layouts",
    ],
    stack: ["React.js", "Tailwind CSS", "Responsive UI", "Production Deploy"],
    image: LuluScreenshot,
    live: "https://www.lulufurniture.in/",
    github: "https://github.com/mohammedrayyan-dev/Lulu-Furniture.git",
  },
  {
    id: 2,
    category: "webapp",
    tag: "Productivity Web App",
    title: "Qwest Task Manager",
    role: "Full Frontend & Auth Architecture",
    subtitle: "Modern Productivity & State-Driven Task Suite",
    description:
      "A modern task management application with secure user authentication. Users can authenticate, create, edit, prioritize, and manage their tasks with real-time feedback and persistent storage.",
    highlights: [
      "Full user authentication and authorization workflow",
      "Dynamic task categorization, prioritization & completion toggles",
      "Clean form validation and interactive state handling",
      "Responsive glassmorphism dashboard built with React and Tailwind CSS",
    ],
    stack: ["React.js", "Tailwind CSS", "Firebase", "State Architecture"],
    image: QwestScreenshot,
    live: "https://qwest-seven.vercel.app/",
    github: "https://github.com/mohammedrayyan-dev/Qwest.git",
  },
  {
    id: 3,
    category: "webapp",
    tag: "Identity & Profile System",
    title: "Profina",
    role: "Frontend Engineer",
    subtitle: "Digital Profile & Identity Hub",
    description:
      "A centralized digital profile management platform allowing users to curate, view, and maintain their personal and professional profiles with structured data management and modern UI styling.",
    highlights: [
      "Centralized identity dashboard for editing contact and professional links",
      "Interactive responsive layout optimized for all viewport sizes",
      "Accessible typography and high-contrast dark theme styling",
      "Deployed on Vercel with automated CI/CD pipeline",
    ],
    stack: ["React.js", "Tailwind CSS", "Vercel", "Component UI"],
    image: ProfinaScreenshot,
    live: "https://profina.vercel.app/",
    github: "https://github.com/mohammedrayyan-dev/Profina.git",
  },
  {
    id: 4,
    category: "webapp",
    tag: "Design System Showcase",
    title: "Tocos UI",
    role: "Frontend Designer & Developer",
    subtitle: "Interactive Modern Web Interface",
    description:
      "A clean, responsive frontend application focused on sleek UI layouts, fluid component states, and modern web aesthetics.",
    highlights: [
      "Modern layout engineering with Tailwind CSS",
      "Component-driven structure with reusability in mind",
      "Fluid transitions and interactive elements",
    ],
    stack: ["React.js", "Tailwind CSS", "Modern Web", "Vite"],
    image: TocosScreenshot,
    live: "https://github.com/mohammedrayyan-dev",
    github: "https://github.com/mohammedrayyan-dev",
  },
]

const ProjectCard = ({ project }) => {

  return (
    <div className="rounded-3xl bg-white border border-stone-200 p-6 sm:p-10 transition-all duration-300 card-shadow hover:shadow-xl flex flex-col lg:flex-row gap-8 lg:gap-12">
      {/* Left Column: Project Information */}
      <div className="flex-1 flex flex-col justify-between gap-6">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-200">
              {project.tag}
            </span>
            <span className="text-xs text-stone-500 font-medium font-mono">
              {project.role}
            </span>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950">
              {project.title}
            </h2>
            <p className="text-xs font-medium text-stone-600">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm text-stone-600 leading-relaxed">
            {project.description}
          </p>

          {/* Highlights List */}
          <div className="space-y-2 pt-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-700 font-mono">
              Key Deliverables
            </p>
            <div className="space-y-1.5">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#b36b47] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-200">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-stone-950 via-stone-900 to-[#27150f] hover:to-[#381d14] text-white text-xs sm:text-sm font-semibold border border-stone-200 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Visit Live Site</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#c87d55]" />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 text-xs sm:text-sm font-medium transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Source Code</span>
          </a>
        </div>
      </div>

      {/* Right Column: Sleek Browser Window Preview */}
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
  )
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === "all") return true
    return project.category === activeTab
  })

  return (
    <div className="py-12 sm:py-16 pb-28">
      <Container>
        <div className="space-y-12">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-stone-200">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold font-mono">
                Portfolio Showcase
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-stone-950 tracking-tight">
                Featured Projects
              </h1>
              <p className="text-sm sm:text-base text-stone-600 max-w-xl">
                A showcase of commercial client builds, responsive productivity suites, and interactive web tools.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-full border border-stone-200">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeTab === "all"
                    ? "bg-gradient-to-r from-stone-950 to-[#27150f] text-white border border-stone-200 shadow-sm"
                    : "text-stone-600 hover:text-stone-950"
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveTab("client")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeTab === "client"
                    ? "bg-gradient-to-r from-stone-950 to-[#27150f] text-white border border-stone-200 shadow-sm"
                    : "text-stone-600 hover:text-stone-950"
                }`}
              >
                Client Work
              </button>
              <button
                onClick={() => setActiveTab("webapp")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeTab === "webapp"
                    ? "bg-gradient-to-r from-stone-950 to-[#27150f] text-white border border-stone-200 shadow-sm"
                    : "text-stone-600 hover:text-stone-950"
                }`}
              >
                Web Apps
              </button>
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* GitHub Callout Banner */}
          <div className="rounded-3xl p-8 sm:p-10 bg-white border border-stone-200 card-shadow flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-stone-950">
                Looking for more repositories & open source code?
              </h3>
              <p className="text-sm text-stone-600 max-w-xl">
                Explore my full commit history, experimental UI builds, and component experiments on GitHub.
              </p>
            </div>

            <a
              href="https://github.com/mohammedrayyan-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-950 hover:bg-stone-800 text-white font-semibold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] flex-shrink-0"
            >
              <Github className="w-4 h-4" />
              <span>Visit GitHub Profile</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Projects