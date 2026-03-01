import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

function App() {
  

  return (
    <>
    <div className="bg-[#0F1115] font-outfit">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/' element={<Home />} />
      <Route path='/' element={<Home />} />
      <Route path='/' element={<Home />} />
    </Routes> 
    </div>
    </>
  )
}

export default App
