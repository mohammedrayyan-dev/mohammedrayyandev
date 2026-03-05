import Grid from "../assets/images/ui/grid.png"

const Contact = () => {
  return (
    <>
    <div className="relative bg-gradient-to-b from-[#141C2B] to-transparent overflow-hidden pt-10 md:pt-20 pb-40 md:pb-80 px-5 md:px-6 lg:px-20"> 
    
      <img src={Grid} alt="Grid" className="absolute inset-0 w-full max-h-[350px] object-contain [mask-image:linear-gradient(to_bottom,black,transparent)]"/>

    <div className="relative flex flex-col gap-10 max-w-6xl mx-auto">

    <div className="flex flex-col gap-4">
      <h1 className="text-3xl md:text-6xl font-bold text-white">
        Contact
      </h1>
      <p className="text-[#CBD1D880] text-sm md:text-base">
        Feel free to reach out for opportunities, collaborations, or project discussions.
      </p>
    </div>

    <div className="border-l border-[#CBD1D820] mr-5 md:mr-10 flex flex-col gap-10">

    <div className="pl-10 md:pl-20"> 

    <div
    onClick={() => window.open("mailto:mohammedrayyandmr@gmail.com", "_blank")} 
    className="bg-[#141C2B] border border-[#2A3441] rounded-lg p-5 hover:bg-[#1B2434] cursor-pointer transition-colors duration-300">
      <div className="flex flex-col gap-2">
      <h2 className="text-[#7AA2F7] text-lg md:text-xl md:text-3xl font-semibold">
        Email
      </h2>
      <p className="text-[#CBD1D8] text-sm md:text-base">  
        mohammedrayyandmr@gmail.com
      </p> 
      <p className="text-[#CBD1D880] text-xs md:text-sm">  
        Click to send a message
      </p> 
      </div>
    </div>

    </div>

    </div>

    </div>

    </div>
    </>
  )
}

export default Contact