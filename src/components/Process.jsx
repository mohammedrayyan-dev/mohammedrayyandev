import { Brain,
    Hammer,
    Rocket,
 } from "lucide-react"
import { useState } from "react"
import PlanPizza from "./PlanPizza"
import BuildPizza from "./BuildPizza"
import RefinePizza from "./RefinePizza"
import { motion } from "framer-motion"
import Container from "./common/Container"

const Processess = [
    {
        index: 0,
        number: "01",
        title: "Understand",
        icon: Brain,
        color: "#F7C948",
        description: "Figure out what you actually need, break it down into clear steps, and make sure we're solving the right problem.",
    },
    {
        index: 1,
        number: "02",
        title: "Build",
        icon: Hammer,
        color: "#7AA2F7",
        description: "Write clean code that works on every device, loads fast, and doesn't break when users actually use it.",
    },
    {
        index: 2,
        number: "03",
        title: "Ship",
        icon: Rocket,
        color: "#9D7AF7",
        description: "Test everything, fix what's broken, polish the details, and deliver something you're proud to show off.",
    }
]

const Process = () => {

    const [active, setActive] = useState(0);

  return (
    <>
    <Container>

        <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.3 }} 
        className="flex flex-col gap-10 justify-center items-center min-h-dvh pt-20 md:pt-0">

            <h1 className="text-[#E6E8EB] text-xl md:text-2xl lg:text-3xl">
                Beleive in the process
            </h1>

        <div className="flex flex-col md:flex-row gap-6">
        {Processess.map(( { title, number, description, icon: Icon, color }) => (
        <div className="flex flex-col items-start gap-4 p-8 bg-[#0a0a0a] hover:bg-[#7f1d1d] border border-[#2a2a2a] hover:border-[#ef4444] backdrop-blur-md rounded-2xl">

        <div className="flex flex-col items-center gap-4">

        <h3 className="bg-clip-text text-transparent bg-gradient-to-b from-red-900 to-transparent text-6xl font-semibold">
            {number}
        </h3>

        <div className="flex flex-row items-center gap-3">
        <div className="h-[45px] md:h-[55px] w-[45px] md:w-[55px] bg-[#2a1515] border border-[#4a1f1f] rounded-2xl flex items-center justify-center">
            <div className="max-w-[30px]">
                    <Icon className="w-full h-full object-contain text-[#ef4444]"  />
            </div>
        </div>
            <h2 className="text-[#ffffff] text-md lg:text-xl font-semibold">
                {title}
            </h2>
        </div>

        </div>

        <p className="text-[#616161] text-sm pt-[6px] max-w-xs text-left"> 
            {description}
        </p>
        </div>
        ))}
        </div>

        </motion.div>

        </Container>  
    </>
  )
}

export default Process;