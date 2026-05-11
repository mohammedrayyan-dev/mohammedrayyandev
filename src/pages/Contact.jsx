import { motion } from "framer-motion"
import Container from "../components/common/Container"

const Contact = () => {
  return (
    <>

    <Container>

    <div className="min-h-[calc(100vh-80px)] pt-10 lg:pt-20 pb-40 md:pb-80"> 
    
    <div className="flex flex-col gap-10">

    <motion.div 
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col gap-4">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
        Contact
      </h1>
      <p className="text-[#666666] text-sm lg:text-base">
        Feel free to reach out for opportunities, collaborations, or project discussions.
      </p>
    </motion.div>

    <motion.div 
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className=""> 

    <div
    onClick={() => window.open("mailto:mohammedrayyandmr@gmail.com", "_blank")} 
    className="bg-[#0a0a0a] hover:bg-[#121212] border border-[#2a2a2a] hover:border-[#3a3a3a] rounded-2xl p-5 cursor-pointer transition-colors duration-300">
      <div className="flex flex-col gap-2">
      <h2 className="text-red-500 text-lg lg:text-xl md:text-3xl font-semibold">
        Email
      </h2>
      <p className="text-[#ffffff] text-sm lg:text-base">  
        mohammedrayyandmr@gmail.com
      </p> 
      <p className="text-[#666666] text-xs lg:text-sm">  
        Click to send a message
      </p> 
      </div>
    </div>

    </motion.div>

    </div>

    </div>

    </Container>

    </>
  )
}

export default Contact