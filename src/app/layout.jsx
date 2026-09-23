import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import ScrollToTop from "../components/ScrollToTop.jsx"

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#f9f8f6] text-stone-900 font-sans relative flex flex-col selection:bg-[#9b5334] selection:text-white">
      <ScrollToTop />
      
      {/* Subtle Warm Paper Grid & Smoked Copper Ambient Tint */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-gradient-to-b from-[#2e1710]/[0.05] via-stone-900/[0.02] to-transparent blur-[120px]" />
      </div>

      {/* Sticky Navigation Header */}
      <div className="relative z-40">
        <Navbar />
      </div>

      {/* Main Page Content */}
      <main className="relative z-10 flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

export default Layout