import "./App.css"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import SkillsTools from "./pages/SkillsTools.jsx"
import Experience from "./pages/Experience.jsx"
import Contact from "./pages/Contact.jsx"
import Navbar from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"

function App() {
  

  return (
    <>
    <div className="bg-[#0F1115] font-outfit">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/skills-&-tools' element={<SkillsTools />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer /> 
    </div>
    </>
  )
}

export default App
