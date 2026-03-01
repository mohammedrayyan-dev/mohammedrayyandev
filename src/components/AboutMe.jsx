import PlanIcon from "/src/assets/images/Icons/PlanIcon.png"
import BuildIcon from "/src/assets/images/Icons/BuildIcon.png"
import RefineIcon from "/src/assets/images/Icons/RefineIcon.png"
import Arrow from "/src/assets/images/Icons/Arrow.png"

const Aboutme = () => {
  return (
    <div className="pt-10 px-5 md:px-6 lg:px-10">
        <h2 className="text-[#E6E8EB] font-bold text-3xl">
            ABOUT ME
        </h2>
        <p className="text-[#CBD1D880] text-lg pt-[20px]">
            I’m a frontend developer focused on building clean, maintainable, and user-friendly web interfaces. I enjoy working with React and modern JavaScript to create responsive applications that balance performance with usability. I value clear structure, thoughtful design decisions, and writing code that scales well over time.
        </p>

        <div className="flex flex-row gap-10 py-[200px] justify-center items-center">

        <div className="flex flex-col">
        <div className="flex flex-row">
        <div className="h-[93px] w-[93px] bg-[#7AA2F7] rounded-full flex items-center justify-center">
            <div className="max-w-[45px]">
                <img src={PlanIcon} alt="Plan Icon" className="w-full h-full object-contain"/>
            </div>
        </div>
        <div className="max-w-[300px]">
            <img src={Arrow} alt="Arrow Icon" className="w-full h-full object-contain"/>
        </div>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className="text-[#E6E8EB] text-2xl pt-[40px]">
                Plan
            </h2>
            <p className="text-[#9CA3AF80] text-lg pt-[6px] max-w-[350px] ">
                Understand requirements, define scope, and break problems into clear, actionable components.
            </p>
        </div>
        </div>

        <div className="flex flex-col ">
        <div className="flex flex-row">
        <div className="h-[93px] w-[93px] bg-[#7AA2F7] rounded-full flex items-center justify-center">
            <div className="max-w-[45px]">
                <img src={BuildIcon} alt="Build Icon" className="w-full h-full object-contain"/>
            </div>
        </div>
        <div className="max-w-[300px]">
            <img src={Arrow} alt="Arrow Icon" className="w-full h-full object-contain"/>
        </div>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className="text-[#E6E8EB] text-2xl pt-[40px]">
                Build
            </h2>
            <p className="text-[#9CA3AF80] text-lg pt-[6px] max-w-[350px] ">
                Develop clean, reusable components with a focus on performance, accessibility, and responsiveness.
            </p>
        </div>
        </div>

        <div className="flex flex-col">
        <div className="h-[93px] w-[93px] bg-[#7AA2F7] rounded-full flex items-center justify-center">
            <div className="max-w-[45px]">
                <img src={RefineIcon} alt="Refine Icon" className="w-full h-full object-contain"/>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className="text-[#E6E8EB] text-2xl pt-[40px]">
                Refine
            </h2>
            <p className="text-[#9CA3AF80] text-lg pt-[6px] max-w-[350px] ">
                Test, iterate, and improve based on feedback—ensuring the final interface is polished and reliable.
            </p>
        </div>
        </div>

        </div>
    
    </div>
  )
}

export default Aboutme