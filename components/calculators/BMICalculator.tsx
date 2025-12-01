'use client'

import { useState } from 'react'

export default function BMICalculator() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState<{ bmi: number; category: string } | null>(null)

  const calculateBMI = () => {
    const weightNum = parseFloat(weight)
    const heightNum = parseFloat(height)

    if (!weightNum || weightNum <= 0) {
      alert('Please enter a valid weight')
      return
    }

    if (!heightNum || heightNum <= 0) {
      alert('Please enter a valid height')
      return
    }

    // BMI = weight (kg) / (height (m))^2
    const heightInMeters = heightNum / 100
    const bmi = weightNum / (heightInMeters * heightInMeters)
    const roundedBMI = Math.round(bmi * 10) / 10

    let category = ''
    let color = ''

    if (bmi < 18.5) {
      category = 'Underweight'
      color = 'bg-blue-500'
    } else if (bmi < 25) {
      category = 'Normal Weight'
      color = 'bg-green-500'
    } else if (bmi < 30) {
      category = 'Overweight'
      color = 'bg-yellow-500'
    } else {
      category = 'Obese'
      color = 'bg-red-500'
    }

    setResult({ bmi: roundedBMI, category })
  }

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            BMI Calculator
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Calculate your Body Mass Index to understand your weight category
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <div className="space-y-4 md:space-y-5">
            {/* Weight Input */}
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1.5 md:mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight in kg"
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9fcc2e] focus:border-transparent text-sm sm:text-base"
              />
            </div>

            {/* Height Input */}
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1.5 md:mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height in cm"
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9fcc2e] focus:border-transparent text-sm sm:text-base"
              />
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateBMI}
              className="w-full bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold sm:font-bold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg text-sm sm:text-base md:text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Calculate BMI
            </button>

            {/* Result */}
            {result !== null && (
              <div className="mt-4 md:mt-6">
                <div className={`p-4 sm:p-5 md:p-6 ${result.category === 'Underweight' ? 'bg-blue-500' : result.category === 'Normal Weight' ? 'bg-[#0e402d]' : result.category === 'Overweight' ? 'bg-yellow-500' : 'bg-[#295135]'} text-white rounded-lg text-center`}>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2">Your BMI</h3>
                  <p className="text-3xl sm:text-4xl font-bold mb-1 md:mb-2">{result.bmi}</p>
                  <p className="text-base sm:text-lg md:text-xl font-semibold">{result.category}</p>
                </div>
                
                {/* BMI Categories Info */}
                <div className="mt-4 md:mt-5 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                  <div className="text-center p-2 md:p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs sm:text-sm font-semibold text-gray-700">Underweight</p>
                    <p className="text-[10px] sm:text-xs text-gray-600">&lt; 18.5</p>
                  </div>
                  <div className="text-center p-2 md:p-3 bg-[#0e402d] bg-opacity-10 rounded-lg">
                    <p className="text-xs sm:text-sm font-semibold text-gray-700">Normal</p>
                    <p className="text-[10px] sm:text-xs text-gray-600">18.5 - 24.9</p>
                  </div>
                  <div className="text-center p-2 md:p-3 bg-yellow-50 rounded-lg">
                    <p className="text-xs sm:text-sm font-semibold text-gray-700">Overweight</p>
                    <p className="text-[10px] sm:text-xs text-gray-600">25 - 29.9</p>
                  </div>
                  <div className="text-center p-2 md:p-3 bg-[#295135] bg-opacity-10 rounded-lg">
                    <p className="text-xs sm:text-sm font-semibold text-gray-700">Obese</p>
                    <p className="text-[10px] sm:text-xs text-gray-600">≥ 30</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

