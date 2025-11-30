import BMICalculator from './BMICalculator'
import CaloriesEstimateCalculator from './CaloriesEstimateCalculator'
import IdealWeightCalculator from './IdealWeightCalculator'
import ProteinRequirementCalculator from './ProteinRequirementCalculator'

export default function CalculatorsSection() {
  return (
    <>
      {/* Section Header */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
              Fitness Calculators
            </h2>
            <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Use our free fitness calculators to track your progress and achieve your goals. Calculate your BMI, daily calories, ideal weight, and protein requirements.
            </p>
          </div>
        </div>
      </section>
      
      {/* Calculators with alternating backgrounds */}
      <BMICalculator />
      <CaloriesEstimateCalculator />
      <IdealWeightCalculator />
      <ProteinRequirementCalculator />
    </>
  )
}

