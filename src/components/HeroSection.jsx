import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowRight, FileText, Mail, Check, Github, Linkedin } from "lucide-react"
import MyPhoto from "../assets/images/ui/my-photo.png"
import Container from "./common/Container"

const HeroSection = () => {
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mohammedrayyandmr@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section className="relative py-12 sm:py-20 overflow-hidden">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Value Proposition */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-950 leading-[1.08]">
                Full Stack Developer crafting{" "}
                <span className="copper-gradient-text underline decoration-[#b36b47]/50 underline-offset-8 decoration-2">
                  exceptional
                </span>{" "}
                web experiences.
              </h1>
              <p className="text-base sm:text-lg text-stone-600 max-w-xl font-normal leading-relaxed pt-1">
                Hi, I'm <strong className="text-stone-950 font-bold">Mohammed Rayyan</strong>. I design and build production-ready web applications using React, Node.js, PostgreSQL, TypeScript, and modern component systems.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2 w-full">
              <button
                onClick={() => navigate("/projects")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-stone-950 via-stone-900 to-[#27150f] hover:to-[#381d14] text-white font-semibold text-sm shadow-md border border-stone-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-[#c87d55]" />
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-stone-50 text-stone-900 border border-stone-200 font-semibold text-sm shadow-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-[#a35938]" />
                <span>View Resume</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-950 border border-stone-200 text-xs font-medium shadow-sm transition-all"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-stone-950" />
                    <span className="text-stone-950 font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-stone-500" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Social Verification Links */}
            <div className="flex items-center gap-4 pt-2 text-xs text-stone-500">
              <span>Direct Links:</span>
              <a
                href="https://github.com/mohammedrayyan-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-stone-800 hover:text-stone-950 font-medium transition-colors underline underline-offset-4"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Profile</span>
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/mohammedrayyan-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-stone-800 hover:text-stone-950 font-medium transition-colors underline underline-offset-4"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Recruiter Stats Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200 w-full max-w-lg text-left">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-stone-950 tracking-tight">Production</p>
                <p className="text-xs text-stone-500">Live Client Systems</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-stone-950 tracking-tight">100%</p>
                <p className="text-xs text-stone-500">Responsive Fidelity</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#b36b47] tracking-tight">Full Stack</p>
                <p className="text-xs text-stone-500">React, Node & SQL</p>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Gallery Portrait Frame */}
          <div className="relative flex items-center justify-center flex-shrink-0">
            {/* Elegant Gallery Matting Bezel */}
            <div className="relative rounded-3xl p-2.5 sm:p-3 bg-[#121214] border border-stone-200 shadow-2xl shadow-stone-900/10">
              <div className="w-64 sm:w-72 lg:w-80 aspect-[4/5] rounded-2xl overflow-hidden bg-[#121214] flex items-center justify-center relative">
                <img
                  src={MyPhoto}
                  alt="Mohammed Rayyan"
                  className="w-full h-full object-cover scale-110 -translate-y-4 sm:-translate-y-6 filter contrast-[1.04]"
                />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default HeroSection