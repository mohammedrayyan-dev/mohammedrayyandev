import Navbar from "../components/Navbar.jsx"
import HeroSection from "../components/HeroSection.jsx"
import EllipseBlur from "/src/assets/images/EllipseBlur.svg"
import AboutMe from "../components/Aboutme.jsx"
import Skills from "../components/Skills.jsx"
import Projects from "../components/Projects.jsx"

const Home = () => {
  return (
    <>
    <div className="relative">

    <img src={EllipseBlur} alt="Ellipse Blur" className="absolute left-1/2 -translate-x-1/2 -top-14 w-full max-w-none pointer-events-none"/>

    <div className="relative pb-80"> 
      <Navbar/>
      <HeroSection/> 
      </div>
    </div>
    </>
  )
}

export default Home