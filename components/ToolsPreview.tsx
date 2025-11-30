import Link from 'next/link'

export default function ToolsPreview() {
  const tools = [
    {
      title: 'BMI Calculator',
      description: 'Calculate your Body Mass Index to understand your weight category',
      href: '/tools/bmi-calculator',
      icon: '📊',
    },
    {
      title: 'Calories Calculator',
      description: 'Estimate your daily calorie needs based on your activity level',
      href: '/tools/calories-calculator',
      icon: '🔥',
    },
    {
      title: 'Ideal Weight Calculator',
      description: 'Find your ideal weight range based on your height and gender',
      href: '/tools/ideal-weight-calculator',
      icon: '⚖️',
    },
    {
      title: 'Protein Calculator',
      description: 'Calculate your daily protein needs based on your weight and goals',
      href: '/tools/protein-requirement-calculator',
      icon: '💪',
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Fitness Calculators
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Use our free fitness calculators to track your progress and achieve your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#9fcc2e] transition">
                {tool.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">{tool.description}</p>
              <span className="text-[#9fcc2e] font-semibold text-sm group-hover:underline inline-flex items-center">
                Calculate Now →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <Link
            href="/tools"
            className="inline-block bg-transparent border-2 border-[#9fcc2e] text-[#9fcc2e] hover:bg-[#9fcc2e] hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            View All Tools
          </Link>
        </div>
      </div>
    </section>
  )
}

