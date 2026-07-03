
import { exportReport } from '../../../Utils/Exportpdf'
import { useNavigate } from 'react-router-dom'

const Dashboardheading = () => {

  const navigate = useNavigate()

  return (
    <>
    <div className='flex md:flex-row flex-col md:justify-between md:pt-10 md:px-10 pt-5 px-5 md:gap-0 gap-5'>
    <div className='flex flex-col md:gap-2 gap-3'>
        <h1 className='text-3xl font-bold'>Analysis Dashboard</h1>
        <p className='text-md font-medium text-gray-500'>Get AI-powered insigths to improve yoour portfolio</p>
    </div>
    <div className='flex md:flex-row flex-col md:gap-3 gap-2'>
         <button onClick={exportReport} className='flex items-center gap-3 text-black rounded-md border py-2 px-3 border-gray-300 cursor-pointer'> <i className="ri-download-2-line"></i> Export Report</button>
         <button onClick={()=>{
          localStorage.removeItem("report")
          localStorage.removeItem("url")
          localStorage.removeItem("portfolioimage")
          navigate("/")}}className='flex items-center gap-3 bg-blue-500 text-white py-2 px-3  rounded-md cursor-pointer'> <i className="ri-repeat-line"></i> Analyze new Website</button>
    </div>
    </div>
    </>
  )
}

export default Dashboardheading