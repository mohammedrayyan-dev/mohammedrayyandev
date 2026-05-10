import MyPhoto from "../assets/images/ui/my-photo.png"
import { FileText, MoveRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Container from "./common/Container"

const HeroSection = () => {

  const navigate = useNavigate("")

  return (
    <>
  
    <Container>

    <div className="flex flex-col md:flex-row items-center justify-around min-h-[calc(100vh-70px)] mx-auto ">

      <motion.div 
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-2 md:gap-4">

        <h2 className="text-[#5a5a5a] text-xl md:text-2xl lg:text-3xl">
            Hi, I'm
        </h2>
        <h1 className="text-[#ffffff] text-5xl md:text-6xl lg:text-7xl font-bold">
            Mohammed <br />
            <span className="text-red-500">Rayyan</span>
        </h1>
        <p className="text-[#737373] text-sm md:text-md lg:text-lg pt-[10px] text-left max-w-xl">
            a front-end developer specialized in responsive web applications, component-driven development, and modern UI frameworks.
        </p>

        <div className="flex flex-row gap-5 lg:gap-5 pt-[20px]">
        <button
        onClick={() => navigate("/contact")}
        className="px-[15px] md:px-[20px] lg:px-[30px] py-[10px] md:py-[8px] lg:py-[14px] bg-red-500 hover:bg-red-400 text-[#ffffff] text-sm md:text-base font-bold rounded-lg transition-all duration-300">
          Get in Touch
        </button>
          <a
          href="/resume.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          className="px-[15px] md:px-[20px] lg:px-[30px] py-[10px] md:py-[8px] lg:py-[14px] text-sm lg:text-base font-bold text-red-500 hover:text-[#f87171] flex flex-row justify-center items-center gap-2 hover:bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#4a4a4a] rounded-lg transition-all duration-300">
            RESUME
            <MoveRight className="inline mr-2 w-4 md:w-6" />
          </a>
        </div>

      </motion.div>

      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex border border-[#2a2a2a] rounded-full">
      
      <div className="w-[180px] md:w-[280px] lg:w-[380px] bg-gradient-to-t from-red-500 to-transparent rounded-full">
        <img src={MyPhoto} alt="My Photo" className="w-full h-full object-contain"/>
      </div>
      </motion.div>

    </div>

    </Container>
    </>
  )
}

export default HeroSection