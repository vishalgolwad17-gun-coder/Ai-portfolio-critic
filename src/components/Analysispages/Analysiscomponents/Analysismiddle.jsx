
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setportfoliourl,setportfolioimage } from '../../../store/slices/urlslice'
import { useNavigate } from 'react-router-dom'
const Analysismiddle = () => {

  const [Analysisurl, setAnalysisurl] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [image, setImage] = useState("")

  const handleAnalysis = (e) => {
    e.preventDefault();
    if(!Analysisurl){
      alert("Please enter a URL")
      return
    }
    dispatch(setportfoliourl(Analysisurl))

    localStorage.setItem("url",JSON.stringify(Analysisurl))

    navigate("/Aianalysisdata")
  }

  function handleImage(e) {
  const file = e.target.files[0];

  if (!file) return;

  setImage(file);

  const reader = new FileReader();

  reader.onloadend = () => {

    dispatch(setportfolioimage(reader.result));

    localStorage.setItem("portfolioImage",reader.result);

  };

  reader.readAsDataURL(file);
}

  return (
    <>
    <div className='flex md:flex-row flex-col md:gap-8 gap-3 md:m-0 m-5'>
    <div className='md:w-[53%] w-full md:ml-10 md:p-5 p-7 rounded-2xl shadow-lg bg-white flex flex-col md:gap-6 gap-3 mt-5'>
        <h1 className='text-xl font-bold'>Enter your portfolio URL</h1>
        <p className='md:text-md text-sm font-medium text-gray-500'>We analyze your website and provide an actionable feedback</p>
        <form onSubmit={handleAnalysis} className='flex md:flex-col flex-col gap-5'>
        <input value={Analysisurl} onChange={(e) => setAnalysisurl(e.target.value)} type="text" placeholder='Portfolio URL' className='border border-gray-300 rounded-md p-2 md:w-[680px] w-full'/>
        <span className='text-gray-500 text-center text-sm'>and</span>
        <input type= "file" accept='image/*' required onChange={handleImage} className='border border-gray-300 rounded-md p-2 md:w-[680px] w-full'/>
        {image && <img src={URL.createObjectURL(image)} alt="" />}
        <button className='bg-blue-500 text-white p-2 rounded-md md:w-[150px] w-full flex items-center gap-3 justify-center'>Analyze Now <i className="ri-arrow-right-line"></i></button>
        </form>
        <div className='flex md:flex-row flex-col md:gap-3 gap-2'>
            <p>Example:</p>
            <div className='flex gap-2'>
            <p className='text-blue-500 md:bg-blue-50 md:p-1 md:rounded-md md:border md:border-blue-100'>demo.dev</p>
            <p className='text-blue-500 md:bg-blue-50 md:p-1 md:rounded-md md:border md:border-blue-100'>portfolio.com</p>
            <p className='text-blue-500 md:bg-blue-50 md:p-1 md:rounded-md md:border md:border-blue-100'>myportfolio.in</p>
            </div>
        </div>
        <p className='flex gap-3 text-gray-500 text-sm'><i className="ri-lock-fill"></i>We analyze publically available portfolio websites.Your data is secure and private.</p>
    </div>
    <div className='mt-5 bg-white md:w-[40%] w-full md:p-10 p-7 shadow-lg rounded-2xl'>
      <p className='md:text-lg text-md font-bold flex gap-3'><i className="ri-sparkling-2-line text-blue-500 text-2xl"></i>What you'll get</p>
      <p className='md:text-md text-sm font-medium text-gray-500 mt-3'> <i className="ri-checkbox-circle-fill text-lg"></i> Overall score and detailed breakdown</p>
      <p className='md:text-md text-sm font-medium text-gray-500 mt-3'> <i className="ri-checkbox-circle-fill text-lg"></i> AI powered suggestions to improve</p>
      <p className='md:text-md text-sm font-medium text-gray-500 mt-3'> <i className="ri-checkbox-circle-fill text-lg"></i> Performance and SEO insights</p>
      <p className='md:text-md text-sm font-medium text-gray-500 mt-3'> <i className="ri-checkbox-circle-fill text-lg"></i> UI/UX and accessibility review</p>
      <p className='md:text-md text-sm font-medium text-gray-500 mt-3'> <i className="ri-checkbox-circle-fill text-lg"></i> Mobile responsiveness analysis</p>
    </div>
    </div>
    </>
  )
}

export default Analysismiddle