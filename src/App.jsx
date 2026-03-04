import "./App.css"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Layout from "./layout/layout.jsx"
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import SkillsTools from "./pages/SkillsTools.jsx"
import Experience from "./pages/Experience.jsx"
import Contact from "./pages/Contact.jsx"

function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills-&-tools" element={<SkillsTools />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
