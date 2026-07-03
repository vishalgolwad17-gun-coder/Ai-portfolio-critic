
import Dashboardstrengths from './dashboardstrenthsandweaknesses/Dashboardstrengths'
import Dashboardweakness from './dashboardstrenthsandweaknesses/Dashboardweakness'

const Dashboardstrengthsandweakness = () => {
  return (
    <div className='flex md:flex-row flex-col h-[500px] bg-white justify-center items-center md:p-5 p-3 gap-5 md:m-10 m-5 rounded-2xl shadow-lg shadow-gray-400'>
        <div className='w-full h-full bg-white shadow-lg shadow-gray-400 rounded-2xl overflow-y-auto'>
            <Dashboardstrengths/>
        </div>
        <div className='w-full h-full bg-white shadow-lg shadow-gray-400 rounded-2xl overflow-y-auto'>
            <Dashboardweakness/>
        </div>
    </div>
  )
}

export default Dashboardstrengthsandweakness