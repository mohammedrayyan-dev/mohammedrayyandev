import { CheckCircle2, Cpu, Layout, Sparkles, Zap } from "lucide-react"
import Container from "./common/Container"

const standards = [
  {
    icon: Layout,
    title: "Component-Driven Architecture",
    description:
      "I break complex UIs down into clean, isolated components with clear prop contracts. This keeps codebases modular, easy to refactor, and scalable as apps grow.",
    bullets: ["Atomic reusability", "Predictable state flow", "Clean folder structure"],
  },
  {
    icon: Zap,
    title: "Performance & Fast Interactions",
    description:
      "A sluggish UI loses users. I optimize asset delivery, minimize unnecessary re-renders, and ensure instantaneous feedback for every user interaction.",
    bullets: ["Fast load times", "Optimized WebP assets", "Minimal layout shifts"],
  },
  {
    icon: Cpu,
    title: "100% Cross-Device Fidelity",
    description:
      "Every layout is rigorously tested across mobile, tablet, and widescreen viewports with fluid typography and touch-friendly interaction targets.",
    bullets: ["Mobile-first approach", "Fluid responsive grids", "Touch-friendly targets"],
  },
  {
    icon: Sparkles,
    title: "Thoughtful Polish & Micro-Motion",
    description:
      "Visual excellence is what elevates software from basic to world-class. I implement smooth micro-interactions that guide users and create a memorable feel.",
    bullets: ["Smooth transitions", "Zero layout jank", "Accessible contrast"],
  },
]

const Process = () => {
  return (
    <section className="py-20 border-t border-stone-200/80">
      <Container>
        <div className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-stone-600 font-semibold font-mono">
              Standards & Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
              How I Approach Frontend Engineering
            </h2>
            <p className="text-sm text-stone-600">
              The technical standards and design principles that guide every web application I build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {standards.map((std) => {
              const Icon = std.icon
              return (
                <div
                  key={std.title}
                  className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200/90 hover:border-stone-400 transition-all duration-200 space-y-4 card-shadow hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-900">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-stone-900">
                      {std.title}
                    </h3>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    {std.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {std.bullets.map((b) => (
                      <span
                        key={b}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-stone-50 text-stone-700 border border-stone-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-stone-900" />
                        <span>{b}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Process