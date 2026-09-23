import { useNavigate } from "react-router-dom"
import { ArrowRight, Mail } from "lucide-react"
import HeroSection from "../components/HeroSection.jsx"
import TechStackMarquee from "../components/TechStackMarquee.jsx"
import SelectedProjects from "../components/SelectedProjects.jsx"
import Process from "../components/Process.jsx"
import Container from "../components/common/Container.jsx"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Core Technical Arsenal */}
      <TechStackMarquee />

      {/* Selected Featured Projects */}
      <SelectedProjects />

      {/* Engineering Principles & Standards */}
      <Process />

      {/* Streamlined Closing Call to Action */}
      <section className="py-24 relative border-t border-stone-200/80">
        <Container>
          <div className="rounded-3xl p-8 sm:p-14 bg-white border border-stone-200 text-center max-w-4xl mx-auto space-y-6 card-shadow shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-800 text-xs font-semibold font-mono">
              <span>Recruiter & Client Collaboration</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-950 tracking-tight leading-tight">
              Looking for a dedicated <br />
              <span className="underline decoration-stone-300 underline-offset-8 decoration-2">frontend engineer</span>?
            </h2>

            <p className="text-sm sm:text-base text-stone-600 max-w-lg mx-auto leading-relaxed">
              I am actively interviewing for frontend developer positions, full-time engineering roles, and high-impact freelance projects.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-950 hover:bg-stone-800 text-white font-semibold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>

              <button
                onClick={() => navigate("/experience")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-200 font-semibold text-sm transition-all"
              >
                <span>Review Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Home