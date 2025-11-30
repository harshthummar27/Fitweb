export default function Services() {
  const goals = [
    {
      title: 'High Protein Diet',
      description: 'Build muscle and support recovery with our high protein diet plans. Perfect for athletes and fitness enthusiasts.',
      icon: '🥩',
    },
    {
      title: 'Weight Loss Diet',
      description: 'Achieve your weight loss goals with our balanced, calorie-controlled diet plans designed for sustainable results.',
      icon: '📉',
    },
    {
      title: 'Weight Gain Diet',
      description: 'Healthy weight gain with nutrient-dense foods and strategic meal planning for muscle building and strength.',
      icon: '📈',
    },
    {
      title: 'High Vitamin Diet',
      description: 'Boost your immunity and overall health with vitamin-rich foods and comprehensive nutrition plans.',
      icon: '🍊',
    },
  ]

  return (
    <section id="services" className="py-8 md:py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Our Goals
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Choose your nutrition goal and get personalized diet plans
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4">{goal.icon}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                {goal.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

