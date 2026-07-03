

import Leftpart from './Leftpart'
import Rightpart from './Rightpart'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-full w-screen bg-[#f6f7fd]'>
        
        <div className='flex justify-between items-center'>
        <Leftpart />
        <Rightpart />
        <Outlet/>
      </div>
    </div>
  )
}

export default Home