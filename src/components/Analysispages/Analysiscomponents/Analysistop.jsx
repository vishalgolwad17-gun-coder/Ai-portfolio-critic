

const Analysistop = () => {
  return (
    <div className='flex md:flex-row flex-col md:pt-6 pt-10 md:p-0 p-5 '>
        <div className='w-[55%] md:ml-11 ml-5 flex flex-col md:gap-3 gap-2'>
            <h1 className='text-4xl font-bold flex md:flex-row md:gap-2 gap-3'>Analyze <span>your</span> <span className='text-blue-500 md:block hidden'>portfolio</span></h1>
            <h1 className='text-4xl font-bold md:hidden flex-col md:gap-2 gap-3 text-blue-500'>portfolio</h1>
            <p className='md:text-lg text-sm font-medium md:mt-0 mt-3 w-full'>Enter your portfolio URL to get AI-powered insights</p>
        </div>
        <div className='flex md:w-[40%] w-full p-2 rounded-2xl shadow-lg bg-purple-50 md:mt-5 mt-8'>
            <div className='md:m-2 m-4 bg-purple-100 rounded-full md:p-2 p-3 flex justify-center items-center h-12 w-12'><i className="ri-shield-check-line md:text-3xl text-2xl text-purple-600"></i></div>
            <div className='flex flex-col gap-1'>
                <p className='md:font-medium font-bold md:text-lg text-md'>Private secure. Just for you.</p>
                <p className='font-medium md:text-md text-sm text-gray-400'>We respect your privacy. Your portfolio data is not stored or shared with any third party.</p>
            </div>
        </div>
    </div>
  )
}

export default Analysistop