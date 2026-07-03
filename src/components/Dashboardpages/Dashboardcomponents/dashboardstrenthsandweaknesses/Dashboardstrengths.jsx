

const Dashboardstrengths = () => {

const report = JSON.parse(localStorage.getItem('report'));




  return (
    <div>
        <h1 className='md:text-2xl text-lg font-bold text-center md:mt-2 mt-5 text-green-500'>Strengths</h1>
        {
            report.strengths.map((strength, index) => (
                <div key={index}>
                    <div className='flex justify-between items-center p-5 font-medium'>
                        <p className='flex items-center gap-3 text-green-500 md:text-lg text-sm'><img src="/Projectimages/StrenghtSkills.png" alt="" className='md:h-[30px] h-[25px] bg-green-500 rounded-lg p-1' />{strength}</p>
                    </div>
                </div>
            ))
        }
        
    </div>
  )
}

export default Dashboardstrengths