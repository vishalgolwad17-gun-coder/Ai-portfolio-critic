import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Signup from './components/signupfrom/Signup'
import Loginform from './components/loginform/Loginform'
import Home from './components/Home'
import Analysispaste from './components/Analysispages/Analysispaste'
import Aianalysisdata from './Aianalysisdata/Aianalysisdata'
import Resultdashboard from './components/Dashboardpages/Resultdashboard'

const App = () => {

  return (
    <div className='h-full w-full bg-[#f6f7fd]'>
      

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Loginform/>}/>
        <Route path="/Analysispaste" element={<Analysispaste/>}/>
        <Route path="/Aianalysisdata" element={<Aianalysisdata/>}/>
        <Route path="/Resultdashboard" element={<Resultdashboard/>}/>
      </Routes>
        
    </div>
  )
}

export default App