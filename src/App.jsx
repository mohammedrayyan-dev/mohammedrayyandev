import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"

function App() {
  

  return (
    <>
    <div className="bg-[#0F1115] font-outfit">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/' element={<Home />} />
      <Route path='/' element={<Home />} />
      <Route path='/' element={<Home />} />
    </Routes>
    <Footer /> 
    </div>
    </>
  )
}

export default App
