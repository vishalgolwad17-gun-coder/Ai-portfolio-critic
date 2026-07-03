

const steps = [
  {
    icon: "ri-link",
    title: "1. Fetch Website",
    description:
      "We fetch your website content, pages, and resources.",
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    icon: "ri-search-line",
    title: "2. Analyze Content",
    description:
      "AI scans your content, structure, and metadata in detail.",
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    icon: "ri-bar-chart-box-line",
    title: "3. Run Tests",
    description:
      "We run performance, SEO, accessibility, and UI/UX tests.",
    bg: "bg-orange-100",
    color: "text-orange-500",
  },
  {
    icon: "ri-brain-line",
    title: "4. AI Evaluation",
    description:
      "AI evaluates results and compares with best practices.",
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    icon: "ri-file-list-3-line",
    title: "5. Generate Report",
    description:
      "You get a clear report with scores and actionable recommendations.",
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
];

const Analysisbottom = () => {
  return (
    <section className="w-[95.5%] max-w-8xl mx-auto md:py-7 py-3 md:px-0 px-3">
      <div className="bg-white rounded-2xl border border-gray-100 p-2 md:p-10 shadow-sm">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-2xl font-bold text-gray-900">
            How AI Analyzes Your Portfolio
          </h2>

          <p className="mt-3 text-gray-600 text-md">
            Our AI follows a comprehensive process to evaluate your website
            across key areas.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center group transition-all duration-300 hover:-translate-y-2"
            >
              {/* Arrow */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-5 -right-7 text-4xl text-gray-300">
                  →
                </div>
              )}

              {/* Icon Circle */}
              <div
                className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center p-8 ${step.bg}`}
              >
                <i
                  className={`${step.icon} text-3xl ${step.color}`}
                ></i>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-bold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-600 leading-2text-[12px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Analysisbottom;