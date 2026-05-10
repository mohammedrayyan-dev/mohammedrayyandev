import Grid from "../assets/images/ui/grid.png"
import QwestDesktop from "../assets/images/devices/qwest-desktop.png"
import QwestIpad from "../assets/images/devices/qwest-ipad.png"
import QwestIphone from "../assets/images/devices/qwest-iphone.png"
import LuluDesktop from "../assets/images/devices/lulu-desktop.webp"
import LuluIpad from "../assets/images/devices/lulu-ipad.webp"
import LuluIphone from "../assets/images/devices/lulu-iphone.webp"
import ProfinaDesktop from "../assets/images/devices/profina-desktop.webp"
import ProfinaIpad from "../assets/images/devices/profina-ipad.webp"
import ProfinaIphone from "../assets/images/devices/profina-iphone.webp"
import TocosDesktop from "../assets/images/devices/tocos-desktop.webp"
import { motion } from "framer-motion"
import Container from "../components/common/Container"
import { ArrowRight } from "lucide-react"

const FinishedProjects = [
  { 
    id: 1,
    title: "Qwest",
    description: "A modern Todo App with user authentication. Users can sign up, log in, and manage their tasks efficiently.",
    mimg: QwestIphone,
    dimg: QwestDesktop,
    timg: QwestIpad,
    live: "https://qwest-seven.vercel.app/",
    github: "https://github.com/mohammedrayyan-dev/Qwest.git"
   },
   { 
    id: 2,
    title: "Lulu Furniture",
    description: "Production-ready React website for a real furniture business with responsive UI, reusable components, and performance optimizations.",
    mimg: LuluIphone,
    dimg: LuluDesktop,
    timg: LuluIpad,
    live: "https://www.lulufurniture.in/",
    github: "https://github.com/mohammedrayyan-dev/Lulu-Furniture.git"
   },
   { 
    id: 3,
    title: "Profina",
    description: "A digital profile management platform that allows users to view, edit, and manage their personal or professional profiles in a modern and intuitive way. It centralizes user data such as profile information, contact details, and making it easy to maintain an up-to-date digital identity.",
    mimg: ProfinaIphone,
    dimg: ProfinaDesktop,
    timg: ProfinaIpad,
    live: "https://profina.vercel.app/",
    github: "https://github.com/mohammedrayyan-dev/Profina.git"
   },
  ]

const Projects = () => {
  return (
    <>

    <Container>

    <div className="overflow-hidden pt-10 lg:pt-20 pb-40"> 

    <div className="flex flex-col gap-10">

    <motion.div 
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col gap-4">

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
        Projects
      </h1>

      <p className="text-[#CBD1D880] text-sm md:text-md lg:text-base text-left">
        Here are some of the projects I have worked on.
      </p>
    </motion.div>

    <motion.div 
    initial={{ opacity: 0, y: -30}}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className=" flex flex-col gap-10">
    
    {FinishedProjects.map((p) => (
    <div 
    key={p.id}
    className="bg-[#0a0a0a] hover:bg-[#121212] border border-[#2a2a2a] hover:border-[#3a3a3a] p-5 md:p-10 rounded-2xl">

    <div className="flex flex-col gap-2">
      <h2 className="text-red-500 text-lg lg:text-2xl font-semibold">
        {p.title}
      </h2>
      <p className="text-[#666666] text-sm lg:text-base">
        {p.description}
      </p>
    </div>

    <div className="flex flex-col lg:flex-row justify-center items-center py-10 gap-10">
      <img src={p.dimg} alt={`${p.title} Desktop`} className="max-w-40 md:max-w-60 lg:max-w-80 object-contain"/>
      <img src={p.timg} alt={`${p.title} Ipad`} className="max-w-40 md:max-w-60 lg:max-w-80 object-contain"/>
      <img src={p.mimg} alt={`${p.title} Iphone`} className="max-w-40 md:max-w-60 lg:max-w-80 max-h-40 md:max-h-60 lg:max-h-80 object-contain"/>
    </div>

    <div className="flex flex-row gap-4">
      <a
      href={p.live}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm lg:text-base text-[#6b6b6b] hover:text-[#ef4444] flex flex-row gap-2 items-center hover:bg-[#2a1515] border border-[#2a2a2a] hover:border-[#ef4444] p-3 rounded-xl transition-all duration-300">
        View Live
        <ArrowRight />
      </a>
      <a
      href={p.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm lg:text-base text-[#6b6b6b] hover:text-[#ef4444] flex flex-row gap-2 items-center hover:bg-[#2a1515] border border-[#2a2a2a] hover:border-[#ef4444] p-3 rounded-xl transition-all duration-300">
        Github
        <ArrowRight />
      </a>
    </div> 

    </div>
    ))}

    <div className="border-b border-[#2a2a2a] my-8"/>

    <div className="flex flex-col gap-5">

        <h2 className="text-2xl font-bold text-white">
          Want to see the code?
        </h2>

        <div className="flex flex-col gap-6">
          <p className="text-[#666666] text-sm md:text-md lg:text-base text-left">
            All projects are on GitHub. Click any "GitHub →" button above or check my profile for the full portfolio
          </p>
          <button
          onClick={() => window.open("https://github.com/mohammedrayyan-dev", "_blank")}
          className="flex flex-row items-center justify-center gap-2 p-3 w-[200px] bg-red-500 hover:bg-red-400 text-[#ffffff] text-sm md:text-base font-bold rounded-lg transition-all duration-300">
            View all projects
            <ArrowRight />
          </button>
        </div>

    </div>

    </motion.div>

    </div>

    </div>

    </Container>

    </>
  )
}

export default Projects