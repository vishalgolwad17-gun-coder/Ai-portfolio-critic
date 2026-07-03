import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const Dashboardrecomendations = () => {

    const report = JSON.parse(localStorage.getItem("report"))

    const data = [
  {
    subject: "UI/UX",
    score: report.uiux,
  },
  {
    subject: "Accessibility",
    score: report.accessibility,
  },
  {
    subject: "SEO",
    score: report.seo,
  },
  {
    subject: "Performance",
    score: report.performance,
  },
  {
    subject: "Mobile Experience",
    score: report.mobileExperience,
  },
];

  return (
    <div className='md:mt-10 mt-5 bg-white p-5 md:m-10 m-3 rounded-2xl shadow-md shadow-gray-400'>
        <div className='flex md:flex-row flex-col gap-5 '>
        <div className='w-full md:h-[500px] h-[350px] rounded-2xl bg-white shadow-md shadow-gray-400 p-3'>
        <h2 className="md:text-2xl text-lg font-bold mb-5 text-center">
        Score Overview
      </h2>

      <ResponsiveContainer width="100%" height="80%" className="mx-auto p-2 w-full">
       
        <RadarChart data={data}className="md:text-lg text-[12px] font-bold text-black">
          <PolarGrid />

          <PolarAngleAxis dataKey="subject" />

          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
          />

          <Radar
            dataKey="score"
            stroke="#2563eb"
            fill="#2563eb"
            fillOpacity={0.30}
          />
        </RadarChart>
      </ResponsiveContainer>

        </div>
        <div>
            <div className='flex flex-col bg-white p-3 w-full rounded-2xl h-[500px] overflow-y-auto scrollbar-hide shadow-md shadow-gray-400'>
            <h1 className='md:text-2xl text-lg font-bold top-0 bg-white z-10 md:p-5 p-10 w-full h-full text-center md:text-start'>Recommendations</h1>
            {report.recommendations.map((item) =>  (
                <div className='flex flex-col bg-white border-b-2 border-gray-400 gap-3 w-full md:mb-5 mb-2 pb-3' key={item}>
                    <p className='md:text-md text-sm font-medium black flex items-start md:gap-2 gap-3'><i className="ri-verified-badge-fill text-green-600 text-2xl"></i>{item}</p>
                </div>
            ))}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Dashboardrecomendations