import Github from "/src/assets/images/Icons/GithubIcon.png"
import linkedin from "/src/assets/images/Icons/LinkedinIcon.png"
import MyPhoto from "/src/assets/images/my-photo.png"

const HeroSection = () => {
  return (
    <div className=" px-5 md:px-6 lg:px-20">

      <div className="flex flex-row justify-between">

      <div className="flex flex-col pl-[40px] gap-4">
        <h1 className="text-[#EDEFF3] text-3xl font-bold">
            Hi, I'm <span className="text-[#7AA2F7]">Mohammed Rayyan</span>
        </h1>
        <h2 className="text-[#E6E8EB] font-bold text-3xl">
            Frontend Developer
        </h2>
        <p className="text-[#CBD1D880] text-lg pt-[10px]">
            Frontend Developer specialized in responsive web applications, <br/> 
            component-driven development, and modern UI frameworks.
        </p>
        <div className="flex flex-row gap-10 pt-[40px]">
        <button
        onClick={() => ""} 
        className="px-[40px] py-[16px] bg-[#7AA2F7] rounded-lg hover:bg-[#6C8EDB] text-[#0F1115] font-bold">
          View Projects
        </button>
        <button
        onClick={() => ""} 
        className="px-[35px] py-[16px] bg-[#7AA2F712] rounded-lg hover:bg-[#7AA2F722] text-[#7AA2F7] border-[1px] border-[#7AA2F745] font-bold">
          Get in Touch
        </button>
        </div>
        <div className="flex flex-row gap-6 pt-5">
        <a
        href="https://github.com/mohammedrayyan-dev"
        target="_blank" 
        className="max-w-[30px]">
          <img src={Github} alt="Github Icon" className="h-full w-full object-contain"/>
        </a>
        <a 
        href="https://www.linkedin.com/in/mohammedrayyan-dev" 
        target="_blank" 
        className="max-w-[30px]">
          <img src={linkedin} alt="LinkedIn Icon" className="h-full w-full object-contain"/>
        </a>
        </div>
      </div>

      <div>
      <img src={MyPhoto} alt="My Photo" className="w-[250px] object-contain"/>
      </div>

      </div>
    </div>

  )
}

export default HeroSection