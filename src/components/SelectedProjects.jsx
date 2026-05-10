import { desc } from "framer-motion/client"
import Container from "./common/Container"
import { ArrowUpRight } from "lucide-react" 
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Projects = [
    { 
        link: "qwest-seven.vercel.app", 
        title: "Qwest",
        description: "A modern Todo App with user authentication. Users can sign up, log in, and manage their tasks efficiently. Features include adding, editing, deleting, and prioritizing tasks with a clean and responsive interface built with React and Tailwind CSS", 
        stack: [ "React.js", "Tailwind CSS", "Firebase" ] 
    },
    { 
        link: "lulufurniture.in", 
        title: "Lulu Furniture", 
        description: "Production-ready React website for a real furniture business with responsive UI, reusable components, and performance optimizations.", 
        stack: [ "React.js", "Tailwind CSS", "Responsive" ] 
    },
]

const SelectedProjects = () => {
  return (
    <>
    <Container>

    <motion.div
    initial={{ opacity: 0, x:-40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="flex flex-col gap-8 min-h-dvh pt-20 md:pt-0">

    <h1 className="text-[#E6E8EB] text-xl md:text-2xl lg:text-3xl">
        Selected Projects
    </h1>
    
    {Projects.map((p) => (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 bg-[#0a0a0a] hover:bg-[#121212] border border-[#2a2a2a] hover:border-[#3a3a3a] rounded-2xl py-8 px-10 md:px-20">
    
    <div className="flex flex-col gap-6"> 
        <a
        href={`http://${p.link}`}
        target="_blank"
        className="text-red-500 hover:text-red-400 text-base font-semibold">
            {p.link}
        </a>
        <h2 className="text-[#ffffff] text-base md:text-lg lg:text-2xl">
            {p.title}
        </h2>
        <p className="text-[#666666] text-sm">
            {p.description}
        </p>
        <div className=" p-4 border border-white/10 rounded-full">
            <p className="text-white text-sm ">
                React.js
            </p>
        </div>
        </div>

        <Link
        to="/projects">
            <div className="hover:bg-[#2a1515] text-[#4a4a4a] hover:text-[#ef4444] border border-[#2a2a2a] hover:border-[#7f1d1d] rounded-xl p-4 cursor-pointer">
                <ArrowUpRight className=" w-6 h-6" />
            </div>
        </Link>
        
        </div>
        ))}

    </motion.div>

    </Container>
    </>
  )
}

export default SelectedProjects