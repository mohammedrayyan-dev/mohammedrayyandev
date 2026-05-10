import HeroSection from "../components/HeroSection.jsx"
import Process from "../components/Process.jsx"
import SelectedProjects from "../components/SelectedProjects.jsx"

import Grid from "../assets/images/ui/grid.png"

const Home = () => {
  return (
    <>
      <HeroSection/> 
      <Process />
      <SelectedProjects />
    </>
  )
}

export default Home