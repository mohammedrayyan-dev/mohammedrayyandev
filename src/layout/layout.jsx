import { Outlet } from "react-router-dom"
import Navbar from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"

const layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1115] font-outfit">

        <Navbar/>
        <main className="flex-1">
            <div className="space-y-24">
                <Outlet />
            </div>
        </main>
        <Footer />    
    </div>
  )
}

export default layout