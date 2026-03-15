import { useState } from "react"

const PlanPizza = () => {

    const [ message, setMessage ] = useState(null);

  return (
    <div>
        <div className="w-[330px] md:w-[500px] h-[250px] md:h-[380px] bg-[#0d1117] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex flex-row items-center gap-4 bg-[#111827] border-[#1e2d45] border-b py-2 px-4">
            <div className="flex flex-row gap-2">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#EC6765]" />
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#414141]" />
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#65C466]" />
            </div>
            <div>
            <p className="text-[#334155]">moraspizza.in</p>
            </div>
            </div>

            <div className="p-4">

            <div className="my-2">
                <h2 className="text-md font-semibold text-[#475569]">
                    MoRa's Pizza
                </h2>
                <p className="text-white text-xs text-[#334155]">
                    Order fresh, hot pizza online. Fast delivery to your door.
                </p>
            </div>

            <div className="my-2">
                <h2 className="text-sm text-[#475569]">
                    Menu
                </h2>
                <ul className="list-disc text-[#334155] text-xs px-6">
                <li>
                    Margherita — ₹299
                </li>
                <li>
                    Pepperoni — ₹399
                </li>
                <li>
                    BBQ Chicken — ₹449
                </li>
                </ul>
                <button
                onClick={() => setMessage("Order has been recieved. The pizza will be delivered within 30mins.")}
                className="mt-4 p-2 border border-white text-white text-sm">
                    Order Now
                </button>
            </div>

            </div>
            {setMessage && 
            <p className="px-3 text-white text-xs">
                {message}
            </p>
            }
            
            </div>
    </div>

  )
}

export default PlanPizza