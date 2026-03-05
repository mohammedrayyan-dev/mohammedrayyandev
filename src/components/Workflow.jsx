import { Lightbulb,
    Code,
    Sparkles,
 } from "lucide-react"
import { useState } from "react"
import PlanPizza from "./PlanPizza"
import BuildPizza from "./BuildPizza"
import RefinePizza from "./RefinePizza"

const Stratergys = [
    {
        index: 0,
        title: "Plan",
        keyword: "Strategic Planning",
        description: "Research, structure, and design scalable solutions.",
    },
    {
        index: 1,
        title: "Build",
        keyword: "Clean Development",
        description: "Develop clean, reliable, and maintainable applications.",
    },
    {
        index: 2,
        title: "Refine",
        keyword: "Continuous Refinement",
        description: "Optimize performance and polish the final experience.",
    }
]


const Workflow = () => {

    const [active, setActive] = useState(0);

  return (
    <>
        <div className="flex flex-col md:flex-row gap-10 py-[80px] md:py-[150px] justify-center items-center max-w-7xl mx-auto">

        <div className="flex flex-col items-start gap-4">
        <div className="flex flex-row items-center gap-4">
        <div className="h-[45px] md:h-[60px] w-[45px] md:w-[60px] bg-blue-500/10 rounded-full flex items-center justify-center">
            <div className="max-w-[35px] md:max-w-[45px]">
                <Lightbulb className="w-full h-full text-blue-400" />
            </div>
        </div>
        <div className="w-[80px] md:w-[100px] h-[30px] md:h-[40px] bg-transparent backdrop-blur border border-white/10 flex items-center justify-center rounded-full">
            <h2 className="text-[#E6E8EB] text-md md:text-lg font-semibold">
                Plan
            </h2>
        </div>
        </div>
        <p className="text-[#9CA3AF80] text-sm md:text-base pt-[6px] max-w-xs text-justify"> 
            Understand requirements, define scope, and break problems into clear, actionable components.
        </p>
        </div>

         <div className="flex flex-col items-start gap-4">
        <div className="flex flex-row items-center gap-4">
        <div className="h-[45px] md:h-[60px] w-[45px] md:w-[60px] bg-blue-500/10 rounded-full flex items-center justify-center">
            <div className="max-w-[35px] md:max-w-[45px]">
                <Code className="w-full h-full text-purple-400" />
            </div>
        </div>
        <div className="w-[80px] md:w-[100px] h-[30px] md:h-[40px] bg-transparent backdrop-blur border border-white/10 flex items-center justify-center rounded-full">
            <h2 className="text-[#E6E8EB] text-md md:text-lg font-semibold">
                Build
            </h2>
        </div>
        </div>
        <p className="text-[#9CA3AF80] text-sm md:text-base pt-[6px] max-w-xs text-justify"> 
            Develop clean, reusable components with a focus on performance, accessibility, and responsiveness.
        </p>
        </div>

         <div className="flex flex-col items-start gap-4">
        <div className="flex flex-row items-center gap-4">
        <div className="h-[45px] md:h-[60px] w-[45px] md:w-[60px] bg-blue-500/10 rounded-full flex items-center justify-center">
            <div className="max-w-[35px] md:max-w-[45px]">
                <Sparkles className="w-full h-full text-green-400" />
            </div>
        </div>
        <div className="w-[80px] md:w-[100px] h-[30px] md:h-[40px] bg-transparent backdrop-blur border border-white/10 flex items-center justify-center rounded-full">
            <h2 className="text-[#E6E8EB] text-md md:text-lg font-semibold">
                Refine
            </h2>
        </div>
        </div>
        <p className="text-[#9CA3AF80] text-sm md:text-base pt-[6px] max-w-xs text-justify"> 
            Test, iterate, and improve based on feedback—ensuring the final interface is polished and reliable.
        </p>
        </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">

        <div className="flex flex-col gap-5">
        {Stratergys.map((strat, index) => ( 
        <>
        <button
        key={strat.index}
        onClick={() => setActive(strat.index)}
        className={`w-[330px] md:w-[550px] flex flex-row items-center justify-start px-10 py-3 gap-6 rounded-2xl transition-all duration-300
        ${active === index ? "bg-[#4a66a360] border border-[#7AA2F7]"
            : "bg-[#5a7abd60] border border-white/30"}`}>
            <h2 className={`text-md md:text-xl text-left font-semibold
                ${ active === index ? "text-[#7AA2f7]"
                : "text-[#E6E8EB]"}`}>
                {strat.title}
            </h2>
            <div className="flex flex-col text-start">            
            <h3 className={`text-sm md:text-lg font-semibold
                ${ active === index ? "text-[#7AA2f7]"
                : "text-[#E6E8EB]"}`}>
                {strat.keyword}
            </h3>
            <p className="text-[#9CA3AF80] text-xs md:text-md pt-[6px]">
            {strat.description}
            </p>
            </div>
        </button>
        </>
        ))}
        </div>

        <div>
            {active === 0 && <PlanPizza />}
            {active === 1 && <BuildPizza />}
            {active === 2 && <RefinePizza />}
        </div>

        </div>
        
        </>
  )
}

export default Workflow;