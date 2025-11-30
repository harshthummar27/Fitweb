'use client'

import { useState } from 'react'

export default function CaloriesEstimateCalculator() {
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('male')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [activityLevel, setActivityLevel] = useState('sedentary')
  const [result, setResult] = useState<{ bmr: number; tdee: number } | null>(null)

  const calculateCalories = () => {
    const ageNum = parseFloat(age)
    const weightNum = parseFloat(weight)
    const heightNum = parseFloat(height)

    if (!ageNum || ageNum <= 0) {
      alert('Please enter a valid age')
      return
    }

    if (!weightNum || weightNum <= 0) {
      alert('Please enter a valid weight')
      return
    }

    if (!heightNum || heightNum <= 0) {
      alert('Please enter a valid height')
      return
    }

    // Calculate BMR using Mifflin-St Jeor Equation
    // BMR (men) = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) + 5
    // BMR (women) = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) - 161

    let bmr = 0
    if (gender === 'male') {
      bmr = (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) + 5
    } else {
      bmr = (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) - 161
    }

    // Calculate TDEE (Total Daily Energy Expenditure) based on activity level
    let activityMultiplier = 1.2 // Sedentary

    if (activityLevel === 'light') {
      activityMultiplier = 1.375
    } else if (activityLevel === 'moderate') {
      activityMultiplier = 1.55
    } else if (activityLevel === 'active') {
      activityMultiplier = 1.725
    } else if (activityLevel === 'very-active') {
      activityMultiplier = 1.9
    }

    const tdee = bmr * activityMultiplier

    setResult({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee)
    })
  }

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Calories Estimate Calculator
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Calculate your daily calorie needs (BMR and TDEE) based on your personal information
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <div className="space-y-4 md:space-y-5">
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

            {/* Age Input */}
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1.5 md:mb-2">
                Age (years)
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9fcc2e] focus:border-transparent text-sm sm:text-base"
              />
            </div>

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

            {/* Activity Level */}
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1.5 md:mb-2">
                Activity Level
              </label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9fcc2e] focus:border-transparent text-sm sm:text-base"
              >
                <option value="sedentary">Sedentary (little or no exercise)</option>
                <option value="light">Light (exercise 1-3 days/week)</option>
                <option value="moderate">Moderate (exercise 3-5 days/week)</option>
                <option value="active">Active (exercise 6-7 days/week)</option>
                <option value="very-active">Very Active (intense exercise daily)</option>
              </select>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateCalories}
              className="w-full bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold sm:font-bold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg text-sm sm:text-base md:text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Calculate Calories
            </button>

            {/* Result */}
            {result !== null && (
              <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
                <div className="p-4 sm:p-5 md:p-6 bg-blue-500 text-white rounded-lg text-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 md:mb-2">Basal Metabolic Rate (BMR)</h3>
                  <p className="text-3xl sm:text-4xl font-bold mb-1 md:mb-2">{result.bmr} calories/day</p>
                  <p className="text-xs sm:text-sm opacity-90">
                    Calories your body needs at rest to maintain basic functions
                  </p>
                </div>
                
                <div className="p-4 sm:p-5 md:p-6 bg-[#9fcc2e] text-white rounded-lg text-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 md:mb-2">Total Daily Energy Expenditure (TDEE)</h3>
                  <p className="text-3xl sm:text-4xl font-bold mb-1 md:mb-2">{result.tdee} calories/day</p>
                  <p className="text-xs sm:text-sm opacity-90">
                    Total calories you burn per day including all activities
                  </p>
                </div>

                {/* Goal-based recommendations */}
                <div className="mt-4 md:mt-5 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
                  <div className="p-3 md:p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-0.5 md:mb-1">Weight Loss</p>
                    <p className="text-base sm:text-lg font-bold text-green-600">{result.tdee - 500} cal/day</p>
                    <p className="text-[10px] sm:text-xs text-gray-600">-500 from TDEE</p>
                  </div>
                  <div className="p-3 md:p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-0.5 md:mb-1">Maintain Weight</p>
                    <p className="text-base sm:text-lg font-bold text-blue-600">{result.tdee} cal/day</p>
                    <p className="text-[10px] sm:text-xs text-gray-600">Same as TDEE</p>
                  </div>
                  <div className="p-3 md:p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-0.5 md:mb-1">Weight Gain</p>
                    <p className="text-base sm:text-lg font-bold text-orange-600">{result.tdee + 500} cal/day</p>
                    <p className="text-[10px] sm:text-xs text-gray-600">+500 to TDEE</p>
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

