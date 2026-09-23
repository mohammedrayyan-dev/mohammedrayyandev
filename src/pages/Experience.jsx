import { Calendar, Building, CheckCircle2, ArrowRight, FileText } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Container from "../components/common/Container"

const experiences = [
  {
    role: "Full Stack Developer Intern",
    type: "Internship",
    company: "AlMukarramah",
    period: "Jul 2026 — Present",
    status: "Active Engagement",
    overview:
      "Contributing as a full-stack developer on Project T57 — a next-generation trade platform connecting B2B, B2G, and G2G commerce.",
    deliverables: [
      "Engineering full-stack web features and client-facing interfaces for Project T57 using React, TypeScript, and modern component systems.",
      "Developing backend services and RESTful API endpoints with Node.js to handle high-reliability trade data workflows.",
      "Designing and querying PostgreSQL databases ensuring schema normalization, query performance, and data integrity.",
      "Collaborating with senior engineering leads on platform architecture, code reviews, and agile sprint delivery.",
      "Building responsive dashboard layouts optimized for complex multi-tier user permissions and operational workflows.",
    ],
    skills: ["Full Stack", "React.js", "Node.js", "PostgreSQL", "TypeScript", "REST APIs", "B2B Systems"],
  },
  {
    role: "Front-End Developer",
    type: "Freelance / Contract",
    company: "Klyros Craft",
    period: "Dec 2025 — Present",
    status: "Active Engagement",
    overview:
      "Delivering high-fidelity, production-ready web interfaces for diverse client projects. Specialize in architecting modular React applications with Tailwind CSS, ensuring seamless cross-device fidelity and high performance.",
    deliverables: [
      "Built responsive, accessible frontend applications using React, TypeScript, and modern styling libraries including Tailwind CSS and Material UI.",
      "Translated complex UI/UX design mockups into reusable component systems with predictable state management.",
      "Ensured pixel-perfect responsiveness across desktop, tablet, and mobile device form factors.",
      "Optimized Core Web Vitals, asset loading times, and frontend bundle sizes for rapid interactive speeds.",
      "Directly collaborated with stakeholders to iterate on client feedback, feature revisions, and release cycles.",
      "Configured automated deployments and maintained live client websites using modern cloud tooling.",
    ],
    skills: ["React.js", "TypeScript", "Tailwind CSS", "Material UI", "Component Systems", "Client Delivery"],
  },
  {
    role: "Software Development Engineer (SDE) Intern",
    type: "Internship",
    company: "Larklabs.ai",
    period: "Sep 2025 — Nov 2025",
    status: "Completed",
    overview:
      "Contributed to production web applications in an agile startup engineering environment. Focused on core UI development, responsive fixes, REST API integration, and collaborative Git workflows.",
    deliverables: [
      "Engineered, tested, and maintained modular React UI components integrated across live production pages.",
      "Diagnosed and resolved critical UI layout bugs, significantly improving cross-browser usability and responsive behavior.",
      "Integrated asynchronous REST APIs using Axios and Fetch to ensure robust loading, success, and error states.",
      "Worked closely with senior engineers using Git branching, code reviews, and agile issue tracking.",
      "Leveraged Chrome DevTools performance and network tabs to isolate bottlenecks and inspect data flows.",
    ],
    skills: ["React.js", "JavaScript (ES6+)", "REST APIs", "Git & GitHub", "Chrome DevTools", "Agile Workflow"],
  },
]

const Experience = () => {
  const navigate = useNavigate()

  return (
    <div className="py-12 sm:py-16 pb-28">
      <Container>
        <div className="space-y-12">
          
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold font-mono">
              Career Journey
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-stone-950 tracking-tight">
              Work Experience
            </h1>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              My track record in client delivery, engineering internships, and building production-grade web interfaces.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-stone-200 ml-2 sm:ml-4 pl-6 sm:pl-10 space-y-12">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative">
                {/* Timeline Node Beacon */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white border-2 border-[#b36b47] flex items-center justify-center shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#b36b47]" />
                </div>

                {/* Experience Card */}
                <div className="rounded-3xl bg-white border border-stone-200 p-6 sm:p-10 transition-all duration-300 card-shadow hover:shadow-xl space-y-6">
                  
                  {/* Top Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-stone-200">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-200">
                          {exp.type}
                        </span>
                        <span className="text-xs font-medium text-stone-600 font-mono">
                          {exp.status}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 pt-1">
                        {exp.role}
                      </h2>
                      <div className="flex items-center gap-2 text-stone-700 text-sm font-semibold">
                        <Building className="w-4 h-4 text-stone-900" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-xs font-medium text-stone-600 self-start sm:self-auto font-mono">
                      <Calendar className="w-3.5 h-3.5 text-stone-700" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Role Narrative */}
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    {exp.overview}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-wider font-semibold text-stone-800 font-mono">
                      Key Deliverables & Responsibilities
                    </p>
                    <div className="space-y-2.5">
                      {exp.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-stone-900 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="pt-2 border-t border-stone-200">
                    <p className="text-xs uppercase tracking-wider font-semibold text-stone-700 mb-2.5 font-mono">
                      Technologies Leveraged
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Bottom Resume Banner */}
          <div className="rounded-3xl p-8 sm:p-10 bg-white border border-stone-200 card-shadow flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-stone-950">
                Looking to evaluate my complete background?
              </h3>
              <p className="text-sm text-stone-600 max-w-xl">
                Download my full resume for educational qualifications, complete project scopes, and references.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-950 hover:bg-stone-800 text-white font-semibold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-200 font-semibold text-sm transition-all"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Experience