
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Examplereport from './Examplereport/Examplereport'
import { useDispatch } from 'react-redux'
import { setShowreport } from '../store/slices/Showreportslice';

const Leftpart = () => {

    const user = useSelector((state) => state.user.user);
    
    const showreport = useSelector((state) => state.showreport.showreport);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleanalysis = () => {

        navigate(
            user? "/Analysispaste" : "/Signup"
        )
        
    }

  return (
    <>
    <div className='w-screen h-screen'>
        <div className='h-screen md:h-[80vh] pl-9 mt-5 md:mt-10'>
            <div className='w-fit bg-[#edf1fe] rounded-xl flex items-center justify-items-start md:px-4 px-3 py-1 ml-3 md:ml-0 shadow-gray-600 shadow-xs linear-to-r from-[#edf1fe] to-[#ffffff]'>
                <i className="ri-bard-fill text-xl text-[#7688ef]"></i>
                    <p className='font-bold text-[#7688ef]'>AI powered portfolio analysis</p>
            </div>
            <div className='w-fit'>
            <h1 className='text-5xl md:text-7xl font-bold md:mt-5 mt-10 md:leading-20 leading-14 md:text-left text-center md:mr-0 mr-12'>Make Your Portfolio <br /><span className='text-[#4e7bea]'>Stand Out</span></h1>
            <p className='font-bold md:font-medium text-md md:text-xl mt-6 md:mt-5 md:w-[70%] w-[95%] md:text-left text-center md:pr-0 pr-10 ml-2.5 md:ml-0'>Get AI-powered insights to improve your portfolio’s UI/UX, accessibility, SEO, performance, and mobile experience. Detailed reports. Actionable suggestions. Better results.</p>
            </div>
            <div className='md:w-fit w-full md:mt-10 mt-5 flex flex-col md:flex-row md:gap-5 gap-3 md:pr-0 pr-12'>
            <button onClick={handleanalysis} className='bg-[#0d122e] text-white px-5 py-3 rounded-lg flex justify-center items-center gap-3 text-lg font-normal cursor-pointer'>Analyze your portfolio <i className="ri-arrow-right-line"></i></button>
            <button onClick={()=>dispatch(setShowreport(true))} className='text-[#0d122e] px-5 py-3 rounded-lg flex justify-center items-center gap-3 text-lg font-normal border-2 border-gray-400 cursor-pointer'>See Example report</button>
            </div>
            <div className='md:w-fit w-full md:mt-10 mt-8 flex-col md:flex-row md:gap-8 gap-3 items-center md:pr-0 pr-12 md:ml-0 ml-2 md:flex hidden'>
            <div className='flex gap-2 md:mr-0 mr-8'>
                <div className='w-[45px] flex justify-center items-center rounded-xl shadow-gray-600 shadow-sm'><i className="ri-flashlight-fill text-lg text-[#5882ee]"></i></div>
                <div>
                    <p className='font-bold text-md'>Instant AI Analysis</p>
                    <p className='font-medium text-sm text-gray-600'>Get results in seconds</p>
                </div>
            </div>
            <div className='flex gap-2 md:ml-0 ml-4'>
                <div className='w-[45px] flex justify-center items-center rounded-xl shadow-gray-600 shadow-sm'><i className="ri-chat-ai-fill text-lg text-[#1a4bc8]"></i></div>
                <div>
                    <p className='font-bold text-md'>AI Powered Insights</p>
                    <p className='font-medium text-sm text-gray-600'>Actionable recommendations</p>
                </div>
            </div>
            <div className='flex gap-2 mr-12 md:mr-0'>
                <div className='w-[45px] flex justify-center items-center rounded-xl shadow-gray-600 shadow-sm'><i className="ri-shield-check-line text-lg text-[#03cd40] font-bold"></i></div>
                <div>
                    <p className='font-bold text-md'>Private & Secure</p>
                    <p className='font-medium text-sm text-gray-600'>Your Stays Private</p>
                </div>
            </div>
            </div>
        </div>
        
        </div>
        {showreport && <Examplereport/>}
        
        </>
  )
}

export default Leftpart