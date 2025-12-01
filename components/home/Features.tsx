export default function Features() {
  const features = [
    {
      title: 'Modern Equipment',
      description: 'Latest fitness technology and equipment from top brands',
    },
    {
      title: 'Expert Trainers',
      description: 'Certified professionals dedicated to your success',
    },
    {
      title: 'Flexible Hours',
      description: 'Open 24/7 to fit your busy schedule',
    },
    {
      title: 'Clean Environment',
      description: 'Maintained to the highest standards of cleanliness',
    },
    {
      title: 'Community Support',
      description: 'Join a welcoming community of fitness enthusiasts',
    },
    {
      title: 'Affordable Plans',
      description: 'Membership options to suit every budget',
    },
  ]

  return (
    <section id="features" className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Why Choose FitZone?
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Discover what makes us different
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 md:space-x-4 p-4 md:p-5 rounded-lg hover:bg-gray-50 transition duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9fcc2e] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

