import { Flame, Leaf, UtensilsCrossed, Pizza } from 'lucide-react'
import { useState } from 'react'

const Pizzas=[
    { id: 1, name: "Margherieta", icon: Pizza, price: "299", color: "#f97316" },
    { id: 2, name: "Pepperoni", icon: UtensilsCrossed, price: "399", color: "#ef4444" },
    { id: 3, name: "BBQ Chicken", icon: Flame, price: "449", color: "#f59e0b" },
    { id: 4, name: "Veggie Delight", icon: Leaf, price: "349", color: "#22c55e" },
]

const BuildPizza = () => {

    const [ order, setOrder ] = useState(false)

  return (
    <div>
        <div className="w-[330px] md:w-[500px] h-[550px] md:h-[380px] bg-[#0d1117] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
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

            <div className="bg-[#161b27] py-2 px-6 rounded-xl my-2">
                <h2 className="text-md font-semibold text-[#f1f5f9]">
                    MoRa's Pizza
                </h2>
            </div>

            <div className="flex flex-row items-center justify-between bg-[#161b27] py-2 px-6 rounded-xl my-2">

                <div>
                <h2 className="text-sm text-[#f1f5f9]">
                    Fresh Pizza, Fast Delivery
                </h2>
                <p className="text-white text-xs text-[#334155]">
                    Order online and get it in 30 mins
                </p>
                </div>
                
                <div>
                     <p className="bg-[#1e2d45] py-1 px-4 rounded-xl text-white text-xs text-[#cbd5e1]">
                        Free Delivery above ₹499
                    </p>
                </div>

            </div>

            <div className="grid grid-cols-2 md:flex md:flex-row gap-2 rounded-xl">
                {Pizzas.map(({ id, name, price, icon: Icon, color }) => (
                <div key={id} className="bg-[#161b27] flex flex-col min-h-[100px] md:w-[120px] items-center p-4 gap-2 rounded-xl my-2">
                    <Icon color={color} />
                    <p className="text-xs text-white">
                        {name}
                    </p>
                    <p className="text-xs text-white">
                        ₹{price}
                    </p>
                </div>
                ))}
            </div>

            <button
            onClick={() => setOrder(true)}
            className={`mt-2 p-2 w-full text-sm rounded-lg transition-all duration-300
            ${order ? 
            ("bg-amber-600 border border-amber-500 text-white") :
            ("hover:bg-[#ea580c] border border-[#f97316] text-white") 
            }`}>
                {order ? "Your Order is being prepared and will be delivered in 30 mins." : "Order Now"}
            </button>

            </div>

        </div>
    </div>

  )
}

export default BuildPizza