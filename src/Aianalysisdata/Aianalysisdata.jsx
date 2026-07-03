
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setReport } from '../store/slices/Analysisreportslice'

const Aianalysisdata = () => {

  let [progress,setProgress] = useState(0)
  let [activeStep,setActiveStep] = useState(0)

  const steps = [
    {
      title:"Initializing AI",
      subtitle:"Loading models and tools",
      icon:"ri-cpu-line",
      color:"text-blue-500"
    },
    {
      title:"Fetching Website",
      subtitle:"Loading your portfolio",
      icon:"ri-global-line",
      color:"text-violet-500"
    },
    {
      title:"Analyzing Design",
      subtitle:"Checking UI/UX and layout",
      icon:"ri-palette-line",
      color:"text-green-500"
    },
    {
      title:"Checking Performance",
      subtitle:"Analyzing speed and SEO",
      icon:"ri-speed-line",
      color:"text-orange-500"
    },
    {
      title:"Generating Report",
      subtitle:"Creating your personalized feedback",
      icon:"ri-file-chart-line",
      color:"text-red-500"
    }
  ]

  const url = useSelector((state)=> state.url.portfolioUrl)
  const image = useSelector((state)=> state.url.portfolioImage)

  console.log(url)

  const dispatch = useDispatch()

  const navigate = useNavigate()

async function testAI(){
    const result = await puter.ai.chat(
`
You are an expert UI/UX Designer, Frontend Developer, Accessibility Expert, SEO Analyst, and Web Performance Consultant.

The user has provided:

Website URL:
${url}

AND

A screenshot of the website.

Use BOTH the website URL and the screenshot together to evaluate the website.

Analyze the following:

- Overall Design Quality
- UI/UX
- Accessibility
- SEO
- Performance
- Mobile Responsiveness
- Visual Hierarchy
- Typography
- Color Palette
- Layout & Spacing
- User Experience
- CTA Visibility
- Navigation
- Consistency

Return ONLY valid JSON.

{
  "websiteName": "",
  "overallScore": 0,
  "overallWebsiteRating": "",

  "uiux": 0,
  "accessibility": 0,
  "seo": 0,
  "performance": 0,
  "mobileExperience": 0,

  "strengths": [
    ""
  ],

  "weaknesses": [
    ""
  ],

  "recommendations": [
    ""
  ],

  "detailedAnalysis": {
    "uiux": "",
    "accessibility": "",
    "seo": "",
    "performance": "",
    "mobileExperience": ""
  }
}

Rules:

1. Return ONLY JSON.
2. Do NOT use markdown.
3. Do NOT explain anything outside JSON.
4. Scores must be integers between 0 and 100.
5. overallWebsiteRating should be 2-5 words only.
6. Give exactly:
   - 5 strengths
   - 5 weaknesses
   - 5 recommendations
7. detailedAnalysis should contain 2-4 concise sentences for each category.
8. Base the analysis on BOTH the provided URL and screenshot.
`,
image
);

console.log(result)

const cleanedJson = result.message.content
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

  const data = JSON.parse(cleanedJson);

  dispatch(setReport(data))

  localStorage.setItem("report",JSON.stringify(data))

  navigate("/Resultdashboard")
}

useEffect(() => {
  testAI()
}, [])

useEffect(() => {
  console.log("redux url:",url)
}, [url])


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) =>
        prev === steps.length - 1 ? prev : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

   progress = ((activeStep + 1) / steps.length) * 100;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center p-5 z-[9999]">

      <div className="w-full max-w-5xl">

        {/* Logo */}

        <div className="flex flex-col items-center">

          <div className="relative">

            <div className="absolute inset-0 rounded-full border-[8px] border-blue-100 animate-ping"></div>

            <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center shadow-xl">

              <i className="ri-cpu-line text-white text-5xl animate-spin"></i>

            </div>

          </div>

          <h1 className="text-5xl font-bold mt-8 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Portfolio Critic AI
          </h1>

          <p className="text-gray-500 mt-3 text-lg text-center">
            AI is analyzing your portfolio and generating insights
          </p>

        </div>

        {/* Card */}

        <div className="bg-white rounded-3xl shadow-2xl mt-12 p-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold">
              {steps[activeStep].subtitle}
            </h2>

            <p className="text-gray-500 mt-3">
              This usually takes 15–30 seconds
            </p>

          </div>

          {/* Progress */}

          <div className="mt-10">

            <div className="flex justify-between mb-3">

              <span className="font-medium text-gray-600">
                Progress
              </span>

              <span className="font-bold text-blue-600">
                {Math.round(progress)}%
              </span>

            </div>

            <div className="h-3 rounded-full bg-gray-200 overflow-hidden">

              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-1000"
                style={{ width: `${progress}%` }}
              ></div>

            </div>

          </div>

          {/* Steps */}

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">

            {steps.map((item, index) => (

              <div
                key={index}
                className="flex flex-col items-center text-center"
              >

                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500
                  ${
                    index <= activeStep
                      ? "bg-blue-50 border-2 border-blue-500"
                      : "bg-gray-100"
                  }`}
                >

                  <i
                    className={`${item.icon} text-4xl ${item.color}`}
                  ></i>

                </div>

                <h3 className="font-bold mt-4">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {item.subtitle}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-center mt-8">

          <div className="bg-white shadow-lg rounded-full px-6 py-4 flex items-center gap-3">

            <i className="ri-lightbulb-flash-line text-violet-600 text-xl animate-pulse"></i>

            <p className="text-gray-600">
              Our AI is reviewing every detail to give you the best insights.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Aianalysisdata