import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
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
      <Analytics />
    </div>
  )
}

export default App