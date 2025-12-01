'use client'

import { useState } from 'react'

export default function IdealWeightCalculator() {
  const [height, setHeight] = useState('')
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState<{ min: number; max: number } | null>(null)

  const calculateIdealWeight = () => {
    const heightNum = parseFloat(height)

    if (!heightNum || heightNum <= 0) {
      alert('Please enter a valid height')
      return
    }

    // Convert height from cm to inches
    const heightInches = heightNum / 2.54

    let minWeight, maxWeight

    if (gender === 'male') {
      // For men: Ideal weight (kg) = 50 + 2.3 * (height in inches - 60)
      // Using Robinson formula: 52 kg + 1.9 kg per inch over 5 feet
      const baseWeight = 52
      const inchesOver5Feet = heightInches - 60
      const idealWeight = baseWeight + (inchesOver5Feet * 1.9)
      minWeight = idealWeight - 5
      maxWeight = idealWeight + 5
    } else {
      // For women: Ideal weight (kg) = 49 + 1.7 * (height in inches - 60)
      // Using Robinson formula: 49 kg + 1.7 kg per inch over 5 feet
      const baseWeight = 49
      const inchesOver5Feet = heightInches - 60
      const idealWeight = baseWeight + (inchesOver5Feet * 1.7)
      minWeight = idealWeight - 5
      maxWeight = idealWeight + 5
    }

    setResult({
      min: Math.round(minWeight),
      max: Math.round(maxWeight)
    })
  }

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Ideal Weight Calculator
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Calculate your ideal weight range based on your height and gender
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <div className="space-y-4 md:space-y-5">
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

            {/* Gender Selection */}
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1.5 md:mb-2">
                Gender
              </label>
              <div className="flex gap-2 sm:gap-3 md:gap-4">
                <button
                  onClick={() => setGender('male')}
                  className={`flex-1 py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 rounded-lg text-sm sm:text-base font-semibold transition duration-300 ${
                    gender === 'male'
                      ? 'bg-[#9fcc2e] text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Male
                </button>
                <button
                  onClick={() => setGender('female')}
                  className={`flex-1 py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 rounded-lg text-sm sm:text-base font-semibold transition duration-300 ${
                    gender === 'female'
                      ? 'bg-[#9fcc2e] text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateIdealWeight}
              className="w-full bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold sm:font-bold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg text-sm sm:text-base md:text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Calculate Ideal Weight
            </button>

            {/* Result */}
            {result !== null && (
              <div className="mt-4 md:mt-6 p-4 sm:p-5 md:p-6 bg-[#9fcc2e] text-white rounded-lg text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4">Your Ideal Weight Range</h3>
                <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-2 sm:p-3 md:p-4 flex-1">
                    <p className="text-xs sm:text-sm opacity-90 mb-0.5 md:mb-1">Minimum</p>
                    <p className="text-2xl sm:text-3xl font-bold">{result.min} kg</p>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold">-</div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-2 sm:p-3 md:p-4 flex-1">
                    <p className="text-xs sm:text-sm opacity-90 mb-0.5 md:mb-1">Maximum</p>
                    <p className="text-2xl sm:text-3xl font-bold">{result.max} kg</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg mt-2 md:mt-3 opacity-90">
                  This is a healthy weight range for your height and gender
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

