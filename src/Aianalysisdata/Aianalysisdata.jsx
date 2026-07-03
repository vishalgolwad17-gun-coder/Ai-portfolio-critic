
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setReport } from '../store/slices/Analysisreportslice'

const Aianalysisdata = () => {

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

  return (
    <div>
  
    </div>
  )
}

export default Aianalysisdata