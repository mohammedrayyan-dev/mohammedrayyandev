import Grid from "/src/assets/images/ui/grid.png"
import LuluDesktop from "/src/assets/images/devices/lulu-desktop.webp"
import LuluIpad from "/src/assets/images/devices/lulu-ipad.webp"
import LuluIphone from "/src/assets/images/devices/lulu-iphone.webp"
import ProfinaDesktop from "/src/assets/images/devices/profina-desktop.webp"
import ProfinaIpad from "/src/assets/images/devices/profina-ipad.webp"
import ProfinaIphone from "/src/assets/images/devices/profina-iphone.webp"

const Projects = () => {
  return (
    <>
    <div className="relative bg-gradient-to-b from-[#141C2B] to-transparent overflow-hidden pt-10 md:pt-20 pb-40 px-5 md:px-6 lg:px-20"> 
    
      <img src={Grid} alt="Grid" className="absolute inset-0 w-full object-contain [mask-image:linear-gradient(to_bottom,black,transparent)]"/>

    <div className="relative flex flex-col gap-10 max-w-6xl mx-auto">

    <div className="flex flex-col gap-4">
      <h1 className="text-3xl md:text-6xl font-bold text-white">
        Projects
      </h1>
      <p className="text-[#CBD1D880] text-sm md:text-lg text-left">
        Here are some of the projects I have worked on.
      </p>
    </div>

    <div className="border-l border-[#CBD1D820] mr-5 md:mr-10 flex flex-col gap-10">

    <div className="pl-10 md:pl-20"> 

    <div className="flex flex-col gap-2">
      <h2 className="text-[#7AA2F7] text-lg md:text-xl font-semibold">
        Lulu Furniture
      </h2>
      <p className="text-[#CBD1D880] text-sm md:text-base">
        Production-ready React website for a real furniture business with responsive UI, reusable components, and performance optimizations.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row justify-center items-center py-10 gap-10">
      <img src={LuluDesktop} alt="Lulu Desktop" className="max-w-40 md:max-w-80 object-contain"/>
      <img src={LuluIpad} alt="Lulu Ipad" className="max-w-40 md:max-w-80 object-contain"/>
      <img src={LuluIphone} alt="Lulu Iphone" className="max-w-40 md:max-w-80 max-h-40 md:max-h-80 object-contain"/>
    </div>

    <div className="flex flex-row gap-4">
      <a
      href="https://www.lulufurniture.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm md:text-md text-[#E6EDF7] hover:text-[#7AA2F7] hover:underline underline-offset-4">
        View Project
      </a>
      <a
      href="https://github.com/mohammedrayyan-dev/Lulu-Furniture.git"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm md:text-md text-[#E6EDF7] hover:text-[#7AA2F7] hover:underline underline-offset-4">
        View Code
      </a>
    </div>

    <div className="border-b border-[#CBD1D820] my-10"/>

    <div className="flex flex-col gap-2">
      <h3 className="text-[#7AA2F7] text-lg md:text-xl font-semibold">
        Profina
      </h3>
      <p className="text-[#CBD1D880] text-sm md:text-base">
        A digital profile management platform that allows users to view, edit, and manage their personal or professional profiles in a modern and intuitive way. It centralizes user data such as profile information, contact details, and making it easy to maintain an up-to-date digital identity.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row justify-center items-center py-10 gap-10">
      <img src={ProfinaDesktop} alt="Profina Desktop" className="max-w-40 md:max-w-80 object-contain"/>
      <img src={ProfinaIpad} alt="Profina Ipad" className="max-w-40 md:max-w-80 object-contain"/>
      <img src={ProfinaIphone} alt="Profina Iphone" className="max-w-40 md:max-w-80 max-h-40 md:max-h-80 object-contain"/>
    </div>

    <div className="flex flex-row gap-4">
      <a
      href="https://profina.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm md:text-md text-[#E6EDF7] hover:text-[#7AA2F7] hover:underline underline-offset-4">
        View Project
      </a>
      <a
      href="https://github.com/mohammedrayyan-dev/Profina.git"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm md:text-md text-[#E6EDF7] hover:text-[#7AA2F7] hover:underline underline-offset-4">
        View Code
      </a>
    </div>

    </div>

    </div>

    </div>

    </div>
    </>
  )
}

export default Projects