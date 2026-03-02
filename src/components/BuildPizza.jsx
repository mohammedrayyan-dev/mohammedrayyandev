import { useState } from "react"
import { Pizza } from "lucide-react"

const BuildPizza = () => {

  const [message, setMessage] = useState(null);

  return (
    <div>
        <div className="w-[500px] h-[320px] bg-gradient-to-br from-[#1E1E1E] to-[#252A34] rounded-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex flex-row gap-2 ">
            <div className="w-3 h-3 rounded-full bg-[#EC6765]" />
            <div className="w-3 h-3 rounded-full bg-[#414141]" />
            <div className="w-3 h-3 rounded-full bg-[#65C466]" />
        </div>
            <div className="p-6 flex flex-col gap-4">
                <h2 className="text-xl text-white">
                    MoRa's Pizza Restaurent
                </h2>
                <div className="flex flex-row gap-6">
                <Pizza size={35} className="text-[#F97316] shadow-lg" />
                <button 
                onClick={() => setMessage("Order received! \n ETA: 15 minutes")}
                className="w-[200px] px-4 py-2 bg-blue-500 hover:bg-blue-600 text-black font-semibold rounded-xl shadow-lg border border-blue-500">
                    Order Pizza
                </button>
                </div>
                {message &&
                <div>
                    <p className="text-white whitespace-pre-line">
                        {message}
                    </p>
                    <button 
                    onClick={() => setMessage("")}
                    className="w-[100px] px-4 py-2 mt-[10px] bg-[#374151] hover:bg-[#4B5563] text-black font-semibold rounded">
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