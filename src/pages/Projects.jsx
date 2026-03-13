import Grid from "../assets/images/ui/grid.png"
import LuluDesktop from "../assets/images/devices/lulu-desktop.webp"
import LuluIpad from "../assets/images/devices/lulu-ipad.webp"
import LuluIphone from "../assets/images/devices/lulu-iphone.webp"
import ProfinaDesktop from "../assets/images/devices/profina-desktop.webp"
import ProfinaIpad from "../assets/images/devices/profina-ipad.webp"
import ProfinaIphone from "../assets/images/devices/profina-iphone.webp"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <>
    <div className="relative bg-gradient-to-b from-[#141C2B] to-transparent overflow-hidden pt-10 lg:pt-20 pb-40 px-5 md:px-10 lg:px-20"> 
    
      <img src={Grid} alt="Grid" className="absolute inset-0 w-full object-contain [mask-image:linear-gradient(to_bottom,black,transparent)]"/>

    <div className="relative flex flex-col gap-10 max-w-6xl mx-auto">

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
    className="border-l border-[#CBD1D820] pl-10 lg:pl-20"> 

    <div className="flex flex-col gap-2">
      <h2 className="text-[#7AA2F7] text-lg lg:text-xl font-semibold">
        Lulu Furniture
      </h2>
      <p className="text-[#CBD1D880] text-sm lg:text-base">
        Production-ready React website for a real furniture business with responsive UI, reusable components, and performance optimizations.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row justify-center items-center py-10 gap-10">
      <img src={LuluDesktop} alt="Lulu Desktop" className="max-w-40 md:max-w-60 lg:max-w-80 object-contain"/>
      <img src={LuluIpad} alt="Lulu Ipad" className="max-w-40 md:max-w-60 lg:max-w-80 object-contain"/>
      <img src={LuluIphone} alt="Lulu Iphone" className="max-w-40 md:max-w-60 lg:max-w-80 max-h-40 md:max-h-60 lg:max-h-80 object-contain"/>
    </div>

    <div className="flex flex-row gap-4">
      <a
      href="https://www.lulufurniture.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm lg:text-md text-[#E6EDF7] hover:text-[#7AA2F7] hover:underline underline-offset-4 transition-all duration-300">
        View Project
      </a>
      <a
      href="https://github.com/mohammedrayyan-dev/Lulu-Furniture.git"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm lg:text-md text-[#E6EDF7] hover:text-[#7AA2F7] hover:underline underline-offset-4 transition-all duration-300">
        View Code
      </a>
    </div>

    <div className="border-b border-[#CBD1D820] my-10"/>

    <div className="flex flex-col gap-2">
      <h3 className="text-[#7AA2F7] text-lg lg:text-xl font-semibold">
        Profina
      </h3>
      <p className="text-[#CBD1D880] text-sm lg:text-base">
        A digital profile management platform that allows users to view, edit, and manage their personal or professional profiles in a modern and intuitive way. It centralizes user data such as profile information, contact details, and making it easy to maintain an up-to-date digital identity.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row justify-center items-center py-10 gap-10">
      <img src={ProfinaDesktop} alt="Profina Desktop" className="max-w-40 md:max-w-60 lg:max-w-80 object-contain"/>
      <img src={ProfinaIpad} alt="Profina Ipad" className="max-w-40 md:max-w-60 lg:max-w-80 object-contain"/>
      <img src={ProfinaIphone} alt="Profina Iphone" className="max-w-40 md:max-w-60 lg:max-w-80 max-h-40 md:max-h-60 lg:max-h-80 object-contain"/>
    </div>

    <div className="flex flex-row gap-4">
      <a
      href="https://profina.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm lg:text-md text-[#E6EDF7] hover:text-[#7AA2F7] hover:underline underline-offset-4 transition-all duration-300">
        View Project
      </a>
      <a
      href="https://github.com/mohammedrayyan-dev/Profina.git"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm lg:text-md text-[#E6EDF7] hover:text-[#7AA2F7] hover:underline underline-offset-4 transition-all duration-300">
        View Code
      </a>
    </div>

    </motion.div>

    </div>

    </div>
    </>
  )
}

export default Projects