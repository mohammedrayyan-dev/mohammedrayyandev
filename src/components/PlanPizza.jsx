import { useState } from "react"

const PlanPizza = () => {

  const [message, setMessage] = useState(null);

  return (
    <div>
        <div className="w-[500px] h-[320px] bg-gradient-to-br from-[#1E1E1E] to-[#252A34] rounded-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex flex-row gap-2 ">
            <div className="w-3 h-3 rounded-full bg-[#EC6765]" />
            <div className="w-3 h-3 rounded-full bg-[#414141]" />
            <div className="w-3 h-3 rounded-full bg-[#65C466]" />
            </div>
            <div className="p-6">
                <h2 className="text-xl text-white">
                    MoRa's Pizza Restaurent
                </h2>
                <button 
                onClick={() => setMessage("Order received!")}
                className="px-4 py-2 border text-white">
                    Order Pizza
                </button>
                {message &&
                <p className="text-white">
                    {message}
                </p>
                }
            </div>
        </div>
    </div>

  )
}

export default PlanPizza