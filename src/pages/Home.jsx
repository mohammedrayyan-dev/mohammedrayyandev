import HeroSection from "../components/HeroSection.jsx"
import EllipseBlur from "/src/assets/images/EllipseBlur.svg"
import Workflow from "/src/components/Workflow.jsx"
import Grid from "/src/assets/images/ui/grid.png"

const Home = () => {
  return (
    <>
    <div className="relative bg-gradient-to-b from-[#141C2B] to-transparent overflow-hidden"> 

    <img src={EllipseBlur} alt="Ellipse Blur" className="absolute w-full object-cover"/>

    <img src={Grid} alt="Grid" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"/>

    <div className="relative pb-40 px-5 md:px-6 lg:px-30"> 
      <HeroSection/> 
      <Workflow />
      </div>
    </div>
    </>
  )
}

export default Home