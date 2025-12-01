export default function About() {
  return (
    <section id="about" className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            About FitZone
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            We are committed to helping you achieve your fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-5">
              Your Journey Starts Here
            </h3>
            <p className="text-gray-600 mb-3 md:mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
              At FitZone, we believe that fitness is not just about physical strength, but about building confidence, discipline, and a healthier lifestyle. Our state-of-the-art facility is equipped with the latest fitness equipment and staffed by certified trainers who are passionate about your success.
            </p>
            <p className="text-gray-600 mb-3 md:mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
              Whether you're a beginner taking your first steps into fitness or an experienced athlete looking to push your limits, we provide the tools, guidance, and community support you need to reach your goals.
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#9fcc2e] mb-1 md:mb-2">10+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#9fcc2e] mb-1 md:mb-2">5000+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">Happy Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#9fcc2e] mb-1 md:mb-2">50+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">Expert Trainers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#9fcc2e] mb-1 md:mb-2">24/7</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">Open Access</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg h-64 sm:h-80 md:h-96 flex items-center justify-center">
            <span className="text-gray-400 text-sm sm:text-base md:text-lg">Gym Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  )
}

