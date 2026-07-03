
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const Dashboardoverview = () => {

    const report = JSON.parse(localStorage.getItem("report"))
    const url = JSON.parse(localStorage.getItem("url"))

    const portfolioImage = localStorage.getItem("portfolioImage")

    console.log(portfolioImage);

    const analyzedOn = new Date();

    const formattedDate = analyzedOn.toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
});

  return (
    <>
    <div className='flex md:justify-between justify-center items-center md:gap-5 md:p-10 p-3 bg-white shadow-lg rounded-2xl md:m-10 m-3'>
      <div className='flex md:gap-4'>
        <div className='md:w-[300px] md:h-[200px] w-[90px] h-[70px] bg-red-500 md:rounded-2xl rounded-lg overflow-hidden md:ml-2'>
        <img className='w-full h-full object-cover' src={portfolioImage} alt="" />
        </div>
        <div className='flex flex-col md:gap-3 gap-2 justify-center md:ml-5 ml-3'>
            <h1 className='md:text-2xl text-xs font-bold'>{report.websiteName}</h1>
            <a href={url} className='text-blue-500 underline md:text-lg text-xs'>{url}</a>
            <p className='text-gray-500 md:text-lg text-[10px]'>Analyzed on {formattedDate}</p>
        </div>
      </div>
      <div className='md:w-[200px] w-[100px] md:h-[200px] h-[100px] flex flex-col md:gap-5 gap-2 md:ml-0 ml-3 md:mt-0 mt-3'>
        <CircularProgressbar value={report.overallScore} text={`${report.overallScore}%`} strokeWidth={8} styles={buildStyles({
            pathColor: "#22c55e",
            textColor: "#111",
            trailColor: "#e5e7eb",
            
        })} />
        <p className='text-center md:text-lg text-[10px] font-bold'>overallScore</p>
      </div>
      <div className='md:flex flex-col gap-4 justify-center hidden'>
        <p className='text-lg font-bold'>{report.overallWebsiteRating}</p>
        <p className='text-md font-medium text-gray-500'>Check the below scores and suggesions to make it even better</p>
      </div>
    </div>
    </>
  )
}

export default Dashboardoverview