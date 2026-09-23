import { Code2, Layers, Cpu, Database, Palette, Wrench, Globe, Terminal, Server, GitBranch } from "lucide-react"
import Container from "./common/Container"

const skills = [
  { name: "React.js", category: "Frontend Core", icon: Code2, desc: "Hooks, Context, Component Patterns" },
  { name: "TypeScript", category: "Language", icon: Terminal, desc: "Type Safety, Clean Interfaces" },
  { name: "JavaScript (ES6+)", category: "Core Language", icon: Cpu, desc: "Async/Await, DOM, Modern APIs" },
  { name: "Node.js", category: "Backend Runtime", icon: Server, desc: "Express Architecture, REST Services" },
  { name: "PostgreSQL", category: "Relational Database", icon: Database, desc: "SQL Schemas, Data Modeling, Queries" },
  { name: "Tailwind CSS", category: "Styling System", icon: Palette, desc: "Responsive Grids, Design Tokens" },
  { name: "Framer Motion", category: "Motion Systems", icon: Layers, desc: "Fluid Transitions, Micro-Gestures" },
  { name: "REST APIs", category: "API Integration", icon: Globe, desc: "Axios, Fetch, State Architecture" },
  { name: "Git & GitHub", category: "Version Control", icon: GitBranch, desc: "Branching, Pull Requests, Code Review" },
  { name: "Vite", category: "Build Tooling", icon: Wrench, desc: "Rapid Build Bundling, Fast HMR" },
]

const TechStackMarquee = () => {
  return (
    <section className="py-12 border-y border-stone-200/80 bg-stone-100/50">
      <Container>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#b36b47]" />
              <h3 className="text-xs uppercase tracking-widest font-semibold text-stone-700 font-mono">
                Core Technical Arsenal
              </h3>
            </div>
            <span className="text-xs text-stone-500 font-mono">
              10 battle-tested tools used in production
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <div
                  key={skill.name}
                  className="group p-4 rounded-2xl bg-white border border-stone-200 transition-all duration-200 card-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-900 group-hover:bg-stone-950 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-stone-950 group-hover:text-stone-700 transition-colors">
                        {skill.name}
                      </p>
                      <p className="text-[10px] text-stone-500 font-mono">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-snug">
                    {skill.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TechStackMarquee
