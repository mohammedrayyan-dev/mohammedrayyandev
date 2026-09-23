import { Code2, Palette, Wrench, Layout, Zap, ShieldCheck, Sparkles, Database, Server } from "lucide-react"
import Container from "../components/common/Container"

const skillCategories = [
  {
    title: "Core Frontend Development",
    icon: Code2,
    description: "The fundamental technologies and runtime engines powering my client-facing web applications.",
    skills: [
      { name: "React.js", level: "Production", desc: "Hooks, Context API, component hierarchy, modular state patterns" },
      { name: "JavaScript (ES6+)", level: "Production", desc: "Async/await, DOM APIs, modern ES features, functional patterns" },
      { name: "TypeScript", level: "Proficient", desc: "Type safety, clean interfaces, defensive typing practices" },
      { name: "HTML5 & Semantic Web", level: "Production", desc: "Accessible markup, standard SEO meta structure, clean DOM" },
    ],
  },
  {
    title: "Backend & Database Systems",
    icon: Server,
    description: "Server-side runtimes, relational database architecture, and persistent data engineering.",
    skills: [
      { name: "Node.js", level: "Production", desc: "Express architecture, asynchronous runtime, RESTful backend services" },
      { name: "PostgreSQL", level: "Production", desc: "Relational schema design, SQL queries, table indexing, data integrity" },
      { name: "RESTful APIs", level: "Production", desc: "CRUD endpoint architecture, middleware pipelines, error handling" },
      { name: "Database Modeling", level: "Proficient", desc: "Normalized schemas, foreign key relationships, migrations" },
    ],
  },
  {
    title: "Styling & Motion Systems",
    icon: Palette,
    description: "Creating sleek, fluid, and responsive design systems that delight users.",
    skills: [
      { name: "Tailwind CSS", level: "Production", desc: "Utility-first design tokens, responsive breakpoints, custom theme extensions" },
      { name: "Framer Motion", level: "Proficient", desc: "Spring physics, layout animations, gestures, micro-interactions" },
      { name: "Responsive Layouts", level: "Production", desc: "Mobile-first viewports, fluid typography, flexbox and CSS grids" },
      { name: "Material UI", level: "Proficient", desc: "Component libraries, theming tokens, enterprise form layouts" },
    ],
  },
  {
    title: "Tooling, Ecosystem & Workflow",
    icon: Wrench,
    description: "Developer tooling ensuring rapid iterations, reliable builds, and collaborative delivery.",
    skills: [
      { name: "AI-Augmented Engineering", level: "Production", desc: "High-velocity development, Antigravity IDE, agentic workflows, automated refactoring" },
      { name: "Git & GitHub", level: "Production", desc: "Branching strategies, version history, pull requests, collaborative delivery" },
      { name: "Vite & Tooling", level: "Production", desc: "Hot Module Replacement, bundle optimization, rapid environment setup" },
      { name: "Chrome DevTools", level: "Production", desc: "Performance profiling, network payloads, layout debugging" },
      { name: "Figma to Code", level: "Proficient", desc: "Translating design specifications into pixel-perfect frontend code" },
      { name: "VS Code & Antigravity", level: "Production", desc: "Optimized development environments with tailored extensions, ESLint, and Prettier" },
    ],
  },
]

const engineeringPrinciples = [
  {
    icon: Layout,
    title: "Component-Driven Architecture",
    description:
      "I break down complex interfaces into atomic, reusable components that are isolated, self-contained, and easy to maintain as products scale.",
  },
  {
    icon: Zap,
    title: "Performance & Responsive First",
    description:
      "Every layout is built mobile-first with optimized assets and minimal re-renders to guarantee smooth interactions across all devices.",
  },
  {
    icon: ShieldCheck,
    title: "Clean & Maintainable Code",
    description:
      "I write predictable code with clear separation of concerns, defensive prop structures, and readability prioritized for team collaboration.",
  },
  {
    icon: Sparkles,
    title: "Visual Polish & Micro-Interactions",
    description:
      "Great software feels alive. I implement intentional micro-interactions and smooth transitions that guide users without being distracting.",
  },
]

const Skills = () => {
  return (
    <div className="py-12 sm:py-16 pb-28">
      <Container>
        <div className="space-y-16">
          
          {/* Page Header */}
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold font-mono">
              Technical Capabilities
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-stone-950 tracking-tight">
              Skills & Architecture
            </h1>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              A comprehensive breakdown of the programming languages, frameworks, UI libraries, and engineering practices I use to build modern digital products.
            </p>
          </div>

          {/* Categorized Skills Bento Grid (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <div
                  key={category.title}
                  className="rounded-3xl bg-white border border-stone-200 p-6 sm:p-8 flex flex-col justify-between gap-6 card-shadow hover:shadow-xl transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Category Header */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-900">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-lg font-bold text-stone-950">
                        {category.title}
                      </h2>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skill Items List */}
                    <div className="space-y-3 pt-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 transition-all"
                        >
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-sm font-semibold text-stone-900">
                              {skill.name}
                            </span>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-stone-200/80 text-stone-800 font-mono">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-stone-600 leading-snug">
                            {skill.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Engineering Philosophy Section */}
          <div className="pt-10 border-t border-stone-200">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
              <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold font-mono">
                Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950">
                How I Approach Frontend Engineering
              </h2>
              <p className="text-sm text-stone-600">
                Building reliable software requires more than syntax knowledge. Here is what guides my development process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engineeringPrinciples.map((principle) => {
                const Icon = principle.icon
                return (
                  <div
                    key={principle.title}
                    className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 flex items-start gap-4 card-shadow hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-900 flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-stone-950">
                        {principle.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Skills