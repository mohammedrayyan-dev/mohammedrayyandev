import MyPhoto from "/src/assets/images/my-photo.png"
import { FileText } from "lucide-react"
import { useNavigate } from "react-router-dom"

const HeroSection = () => {

  const navigate = useNavigate("")

  return (
    <div className="max-w-7xl mx-auto relative">
    
      <div className="relative flex flex-col md:flex-row items-center justify-around">

      <div className="flex flex-col gap-2 md:gap-4 pt-10 md:pt-0">
        <h2 className="text-[#E6E8EB] text-xl md:text-3xl">
            Hi,
        </h2>
        <h1 className="text-[#EDEFF3] text-2xl md:text-5xl font-bold">
            I'm <span className="text-[#7AA2F7]">Mohammed Rayyan</span>
        </h1>
        <p className="text-[#CBD1D880] text-sm md:text-lg pt-[10px] text-justify max-w-xl">
            a <span className="text-[#E6E8EB] font-semibold">front-end developer</span> specialized in responsive web applications, component-driven development, and modern UI frameworks.
        </p>
        <div className="flex flex-row gap-5 md:gap-10 pt-[20px]">
        <button
        onClick={() => navigate("/contact")}
        className="px-[15px] md:px-[30px] py-[7px] md:py-[14px] bg-[#7AA2F7] rounded-lg hover:bg-[#6C8EDB] text-[#0F1115] text-sm md:text-base font-bold">
          Get in Touch
        </button>
          <a
          href="/resume.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm md:text-base font-bold text-[#7AA2F7] hover:text-[#6C8EDB] flex flex-row justify-center items-center">
            <FileText className="inline mr-2 w-4 md:w-6" />
            RESUME
          </a>
        </div>
      </div>

      <div className="block">
      <img src={MyPhoto} alt="My Photo" className="w-[125px] md:w-[350px] object-contain rounded-full"/>
      </div>

      </div>

      </div>

  )
}

export default HeroSection