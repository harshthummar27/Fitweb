'use client'

import { useState } from 'react'

export default function DietPlanForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    age: '',
    weight: '',
    height: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Diet plan form submitted:', formData)
    alert('Thank you! Your diet plan request has been received. We will send your personalized diet plan shortly.')
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      goal: '', 
      age: '', 
      weight: '', 
      height: '' 
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="diet-plan" className="py-8 md:py-12 bg-gradient-to-br from-[#9fcc2e] to-[#295135] text-white">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3">
            Get Your Diet Plan in Quick Seconds
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-white mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
            Fill out the form below and receive your personalized diet plan instantly
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-4 sm:p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5 text-gray-900">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:border-[#9fcc2e] focus:ring-2 focus:ring-[#9fcc2e]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5 text-gray-900">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:border-[#9fcc2e] focus:ring-2 focus:ring-[#9fcc2e]"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5 text-gray-900">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:border-[#9fcc2e] focus:ring-2 focus:ring-[#9fcc2e]"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="goal" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5 text-gray-900">
                  Diet Goal *
                </label>
                <select
                  id="goal"
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:border-[#9fcc2e] focus:ring-2 focus:ring-[#9fcc2e]"
                >
                  <option value="">Select Your Goal</option>
                  <option value="high-protein">High Protein Diet</option>
                  <option value="weight-loss">Weight Loss Diet</option>
                  <option value="weight-gain">Weight Gain Diet</option>
                  <option value="high-vitamin">High Vitamin Diet</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-5">
              <div>
                <label htmlFor="age" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5 text-gray-900">
                  Age *
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="1"
                  max="120"
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:border-[#9fcc2e] focus:ring-2 focus:ring-[#9fcc2e]"
                  placeholder="25"
                />
              </div>
              <div>
                <label htmlFor="weight" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5 text-gray-900">
                  Weight (kg) *
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                  min="1"
                  step="0.1"
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:border-[#9fcc2e] focus:ring-2 focus:ring-[#9fcc2e]"
                  placeholder="70"
                />
              </div>
              <div>
                <label htmlFor="height" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5 text-gray-900">
                  Height (cm) *
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                  min="1"
                  step="0.1"
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:border-[#9fcc2e] focus:ring-2 focus:ring-[#9fcc2e]"
                  placeholder="175"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold sm:font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

