import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

const layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0708] via-[#1a0a0d] to-[#0d0506] font-outfit">
        <Navbar/>
        <main className="flex-1">
            <div>
                <Outlet />
            </div>
        </main>
        <Footer />    
    </div>
  )
}

export default layout