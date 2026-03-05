import { useState } from "react"
import { Pizza } from "lucide-react"

const BuildPizza = () => {

  const [message, setMessage] = useState(null);

  return (
    <div>
        <div className="w-[330px] md:w-[500px] h-[250px] md:h-[320px] bg-gradient-to-br from-[#1E1E1E] to-[#252A34] rounded-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex flex-row gap-2 ">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#EC6765]" />
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#414141]" />
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#65C466]" />
            </div>
            <div className="p-6 flex flex-col gap-4">
                <h2 className="text-md md:text-xl text-white">
                    MoRa's Pizza Restaurent
                </h2>
                <div className="flex flex-row items-center gap-6">
                <Pizza className="text-[#F97316] shadow-lg" />
                <button 
                onClick={() => setMessage("Order received! \n ETA: 15 minutes")}
                className="w-[140px] md:w-[200px] text-sm md:text-base px-4 py-2 bg-blue-500 hover:bg-blue-600 text-black font-semibold rounded-xl shadow-lg border border-blue-500">
                    Order Pizza
                </button>
                </div>
                {message &&
                <div>
                    <p className="text-sm md:text-base text-white whitespace-pre-line">
                        {message}
                    </p>
                    <button 
                    onClick={() => setMessage("")}
                    className="w-[80px] md:w-[100px] px-3 md:px-4 py-2 mt-[10px] bg-[#374151] hover:bg-[#4B5563] text-sm md:text-base text-black font-semibold rounded">
                        OK
                    </button>
                    </div>
                    }
                </div>
            </div>
        </div>

  )
}

export default BuildPizza