
const Dashboardscores = () => {

    const report = localStorage.getItem("report")
    const parsedReport = JSON.parse(report)

    const getRemark = (score) => {
    if(score === 0){
        return "Not Rated"
    }
    if (score >= 90) return "Excellent";
    if (score >= 80) return "Very Good";
    if (score >= 70) return "Good";
    if (score >= 60) return "Not Bad";
    return "Needs Work";
};
    const scores = [
        {
            name: "UI/UX",
            score: parsedReport.uiux,
            color: "green",
            icon: "ri-flashlight-line"
        },
        {
            name: "Accessibility",
            score: parsedReport.accessibility,
            color: "orange",
            icon: "ri-brush-2-fill"
        },
        {
            name: "SEO",
            score: parsedReport.seo,
            color: "blue",
            icon: "ri-accessibility-fill"
        },
        {
            name: "Performance",
            score: parsedReport.performance,
            color: "green",
            icon: "ri-speed-up-line"
        },
        {
            name: "Mobile Experience",
            score: parsedReport.mobileExperience,
            color: "purple",
            icon: "ri-smartphone-line"
        }
    ]

    
  return (
    <div className='flex md:justify-center md:items-center'>
    <div className='flex md:gap-5 gap-2 bg-white md:p-5 p-2 rounded-2xl shadow-md shadow-gray-400 md:w-screen w-fit md:ml-30 ml-5 md:mr-30 mr-5 md:justify-between justify-evenly md:flex-nowrap flex-wrap'>
      {scores.map((score) =>(
        <div className='flex flex-col bg-white md:px-18 px-3 md:py-10 py-5 rounded-2xl items-center shadow-md shadow-gray-400 md:gap-2 gap-3 w-[150px] md:w-fit' key={score.name}>
            <p className='md:text-lg text-[14px] font-bold text-center flex gap-2'><i className={`${score.icon} font-bold md:text-2xl text-[14px]`} style={{color: score.color}}></i> <span style={{color: score.color}}>{score.name}</span></p>
            <p className='md:text-lg text-[14px] font-bold text-center text-gray-600'><span className='md:text-lg text-[14px] font-bold text-center' style={{color: score.color}}>{score.score}</span><span className='text-gray-600'>/100</span></p>
            <span className='text-gray-600 text-[14px] font-bold'>{getRemark(score.score)}</span>
            <div className='w-[120px] h-[6px] bg-gray-200 rounded-full md:mt-5 mt-3'>
            <div className="h-full rounded-full" 
            style={{
              backgroundColor: score.color, 
              width:`${score.score}%`
            }}></div>
            </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Dashboardscores