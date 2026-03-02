import HeroSection from "../components/HeroSection.jsx"
import EllipseBlur from "/src/assets/images/EllipseBlur.svg"
import Workflow from "/src/components/Workflow.jsx"


const Home = () => {
  return (
    <>
    <div className="relative">

    <img src={EllipseBlur} alt="Ellipse Blur" className="absolute w-full object-contain"/>

    <div className="relative pb-40 px-5 md:px-6 lg:px-40"> 
      <HeroSection/> 
      <Workflow />
      </div>
    </div>
    </>
  )
}

export default Home