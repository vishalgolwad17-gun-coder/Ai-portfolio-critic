

const Dashboardweakness = () => {

const report = JSON.parse(localStorage.getItem('report'))

  return (
    <div>
        <h1 className='md:text-2xl text-lg font-bold text-center md:mt-2 mt-5 text-red-500'>Weakness</h1>
                {
                    report.weaknesses.map((weakness, index) => (
                        <div key={index}>
                            <div className='flex justify-between items-center p-5 font-medium text-red-500 object-contain'>
                                <p className='flex items-center gap-3 text-red-500 md:text-lg text-sm'><i className="ri-close-circle-line text-red-500 text-3xl font-bold "></i>{weakness}</p>
                            </div>
                        </div>
                    ))
                }
    </div>
  )
}

export default Dashboardweakness