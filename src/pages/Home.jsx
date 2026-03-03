import HeroSection from "../components/HeroSection.jsx"
import EllipseBlur from "/src/assets/images/EllipseBlur.svg"
import Workflow from "/src/components/Workflow.jsx"
import Grid from "/src/assets/images/ui/grid.png"

const Home = () => {
  return (
    <>
    {/* <div className="relative"> */}
      <div className="relative bg-gradient-to-b from-[#141C2B] to-transparent"> 

    <img src={EllipseBlur} alt="Ellipse Blur" className="absolute w-full object-contain"/>

    <img src={Grid} alt="Grid" className="absolute w-full inset-0 object-contain [mask-image:linear-gradient(to_top,black,transparent)]"/>

    <div className="relative pb-40 px-5 md:px-6 lg:px-40"> 
      <HeroSection/> 
      <Workflow />
      </div>
    </div>
    </>
  )
}

export default Home