import EllipseBlur2 from "/src/assets/images/EllipseBlur2.svg"
import React from "/src/assets/images/Icons/React.png"
import JavaScript from "/src/assets/images/Icons/Javascript.png"
import Html from "/src/assets/images/Icons/html5.png"
import TailwindCSS from "/src/assets/images/Icons/TailwindCSS.png"
import MaterialUI from "/src/assets/images/Icons/MaterialUI.png"
import Git from "/src/assets/images/Icons/Git.png"
// import GitHub from "/src/assets/images/Icons/GitHub.png"
import Figma from "/src/assets/images/Icons/Figma.png"
import Vite from "/src/assets/images/Icons/Vitejs.png"

const Skills = () => {
  return (
    <div className="px-5 md:px-6 lg:px-10 pb-[200px]">
        <h2 className="text-[#E6E8EB] font-bold text-3xl">
            SKILLS
        </h2>
        <p className="text-[#CBD1D880] text-lg pt-[20px]">
            A visual overview of the tools I use together to build scalable front-end applications.
        </p>

        <div className="relative">

            <img
            src={EllipseBlur2}
            alt="Ellipse Blur"
            className="absolute left-1/2 -translate-x-1/2 -top-64 w-full max-w-none pointer-events-none"
            />
      
            <div className=" relative flex-col items-center">

            <div className="flex items-center justify-center pt-[50px]">
            <div className="max-w-[80px]">
                <img src={React} alt="React Icon" className="w-full h-full object-contain" />
            </div>
            </div>

            <div className="flex items-center justify-center pt-[50px] gap-40">
            <div className="max-w-[80px]">
                <img src={JavaScript} alt="JavaScript Icon" className="w-full h-full object-contain" />
            </div>
            <div className="max-w-[80px]">
                <img src={Html} alt="Html Icon" className="w-full h-full object-contain" />
            </div>
            </div>

            <div className="flex items-center justify-center pt-[50px] gap-80">
            <div className="max-w-[80px]">
                <img src={TailwindCSS} alt="TailwindCSS Icon" className="w-full h-full object-contain" />
            </div>
            <div className="max-w-[80px]">
                <img src={MaterialUI} alt="MaterialUI Icon" className="w-full h-full object-contain" />
            </div>
            </div>

            <div className="flex items-center justify-center pt-[50px] gap-40">
            <div className="max-w-[80px]">
                <img src={Git} alt="Git Icon" className="w-full h-full object-contain" />
            </div>
            <div className="max-w-[80px]">
                <img src={GitHub} alt="GitHub Icon" className="w-full h-full object-contain" />
            </div>
            <div className="max-w-[80px]">
                <img src={Figma} alt="Figma Icon" className="w-full h-full object-contain" />
            </div>
            </div>

            <div className="flex items-center justify-center pt-[100px]">
            <div className="max-w-[80px]">
                <img src={Vite} alt="Vite Icon" className="w-full h-full object-contain" />
            </div>
            </div>

            <p className="text-[#9CA3AF80] text-lg pt-[60px] text-center">
            Focused on clean UI architecture, <br/> 
            performance, and maintainable code.
            </p>

            </div>

        </div>
  
    </div>
  )
}

export default Skills