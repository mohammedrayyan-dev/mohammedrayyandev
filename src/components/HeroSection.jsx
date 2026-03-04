import MyPhoto from "/src/assets/images/my-photo.png"
import { FileText } from "lucide-react"
import { useNavigate } from "react-router-dom"

const HeroSection = () => {

  const navigate = useNavigate("")

  return (
    <div className="max-w-7xl mx-auto relative">
    
      <div className="relative flex flex-row items-center justify-around">

      <div className="flex flex-col gap-4">
        <h2 className="text-[#E6E8EB] text-3xl">
            Hi,
        </h2>
        <h1 className="text-[#EDEFF3] text-5xl font-bold">
            I'm <span className="text-[#7AA2F7]">Mohammed Rayyan</span>
        </h1>
        <p className="text-[#CBD1D880] text-lg pt-[10px]">
            a <span className="text-[#E6E8EB] font-semibold">front-end developer</span> specialized in responsive web applications, <br/> 
            component-driven development, and modern UI frameworks.
        </p>
        <div className="flex flex-row gap-10 pt-[20px]">
        <button
        onClick={() => navigate("/contact")}
        className="px-[30px] py-[14px] bg-[#7AA2F7] rounded-lg hover:bg-[#6C8EDB] text-[#0F1115] font-bold">
          Get in Touch
        </button>
          <a
          href="/resume.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#7AA2F7] hover:text-[#6C8EDB] flex flex-row justify-center items-center text-base font-bold">
            <FileText className="inline mr-2" />
            RESUME
          </a>
        </div>
      </div>

      <div>
      <img src={MyPhoto} alt="My Photo" className="w-[350px] object-contain rounded-full"/>
      </div>

      </div>

      </div>

  )
}

export default HeroSection