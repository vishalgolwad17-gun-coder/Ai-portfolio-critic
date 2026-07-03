

const Dashboardmobilescores = () => {

  const reportdata = JSON.parse(localStorage.getItem("report"))

  const scoredata = [
    {name: "UI/UX", color: "bg-green-500", textcolor:"text-green-500", score: reportdata.uiux},
    {name: "Accessibility", color: "bg-orange-500", textcolor:"text-orange-500", score: reportdata.accessibility},
    {name: "SEO", color: "bg-blue-500", textcolor:"text-blue-500", score: reportdata.seo},
    {name: "Performance", color: "bg-green-500", textcolor:"text-green-500", score: reportdata.performance},
    {name: "Mobile Experience", color: "bg-purple-500", textcolor:"text-purple-500", score: reportdata.mobileExperience},
  ]

  return (
    <div className='md:hidden h-[350px] w-full p-5 rounded-2xl'>
        <div className='h-full w-full bg-white rounded-2xl shadow-lg shadow-gray-400'>
          <h1 className='text-center text-xl font-bold pt-5'>Score breakdown</h1>
            <div className='flex flex-col m-4'>
              {scoredata.map((item, index) => (
                <div key={index} className='flex justify-evenly'>
                  <div className={`w-1/4 ${item.textcolor} font-medium`}>
                    <p>{item.name}</p>
                  </div>
                  <div className='w-1/2 m-4 h-2 bg-gray-200 rounded-full'>
                    <div className={`h-full ${item.color} rounded-full`} style={{width: `${item.score}%`}}></div>
                  </div>
                  <div className={`${item.textcolor} font-medium`}>
                    <p>{item.score}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Dashboardmobilescores