'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-8 md:py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3">
            Get In Touch
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-2">
            Ready to start your fitness journey? Contact us today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-5">Contact Information</h3>
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9fcc2e] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-0.5 md:mb-1 text-sm sm:text-base">Address</h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">123 Fitness Street, Health City, HC 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9fcc2e] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-0.5 md:mb-1 text-sm sm:text-base">Phone</h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9fcc2e] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-0.5 md:mb-1 text-sm sm:text-base">Email</h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">info@fitzonegym.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#9fcc2e]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#9fcc2e]"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#9fcc2e]"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#9fcc2e]"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold sm:font-bold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg text-sm sm:text-base md:text-lg transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

