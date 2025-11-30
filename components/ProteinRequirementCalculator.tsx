'use client'

import { useState } from 'react'

export default function ProteinRequirementCalculator() {
  const [weight, setWeight] = useState('')
  const [activityLevel, setActivityLevel] = useState('sedentary')
  const [goal, setGoal] = useState('maintain')
  const [result, setResult] = useState<number | null>(null)

  const calculateProtein = () => {
    const weightNum = parseFloat(weight)
    if (!weightNum || weightNum <= 0) {
      alert('Please enter a valid weight')
      return
    }

    // Base protein requirement: 0.8g per kg (sedentary)
    let proteinPerKg = 0.8

    // Adjust based on activity level
    if (activityLevel === 'light') {
      proteinPerKg = 1.0
    } else if (activityLevel === 'moderate') {
      proteinPerKg = 1.2
    } else if (activityLevel === 'active') {
      proteinPerKg = 1.4
    } else if (activityLevel === 'very-active') {
      proteinPerKg = 1.6
    }

    // Adjust based on goal
    if (goal === 'muscle-gain') {
      proteinPerKg += 0.4
    } else if (goal === 'weight-loss') {
      proteinPerKg += 0.2
    }

    const totalProtein = weightNum * proteinPerKg
    setResult(Math.round(totalProtein * 10) / 10)
  }

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Protein Requirement Calculator
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Calculate your daily protein needs based on your weight, activity level, and fitness goals
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
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

            {/* Goal */}
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1.5 md:mb-2">
                Fitness Goal
              </label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9fcc2e] focus:border-transparent text-sm sm:text-base"
              >
                <option value="maintain">Maintain Weight</option>
                <option value="muscle-gain">Build Muscle</option>
                <option value="weight-loss">Lose Weight</option>
              </select>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateProtein}
              className="w-full bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold sm:font-bold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg text-sm sm:text-base md:text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Calculate Protein Requirement
            </button>

            {/* Result */}
            {result !== null && (
              <div className="mt-4 md:mt-6 p-4 sm:p-5 md:p-6 bg-[#9fcc2e] text-white rounded-lg text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2">Your Daily Protein Requirement</h3>
                <p className="text-3xl sm:text-4xl font-bold">{result} grams</p>
                <p className="text-sm sm:text-base md:text-lg mt-2 md:mt-3 opacity-90">
                  Aim to consume this amount of protein daily to support your fitness goals
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

