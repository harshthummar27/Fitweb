'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality here
    console.log('Searching for:', searchQuery)
  }

  // Image slides with responsive images for different breakpoints
  const allSlides = [
    {
      id: 1,
      image: {
        mobile: '/1764570286026.jpg', // < 768px
        tablet: '/1764570286026.jpg', // 768px - 1080px
        desktop: '/1764570286026.jpg' // >= 1080px
      },
      alt: 'Fitness and Nutrition'
    },
    {
      id: 2,
      image: {
        mobile: '',
        tablet: '',
        desktop: ''
      },
      alt: 'Healthy Food and Protein'
    },
    {
      id: 3,
      image: {
        mobile: '',
        tablet: '',
        desktop: ''
      },
      alt: 'Nutrition and Minerals'
    }
  ]
  
  // Filter slides that have at least one image
  const slides = allSlides.filter(slide => 
    (slide.image.mobile && slide.image.mobile.trim() !== '') ||
    (slide.image.tablet && slide.image.tablet.trim() !== '') ||
    (slide.image.desktop && slide.image.desktop.trim() !== '')
  )

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="home" className="relative overflow-hidden pt-10 md:pt-15 bg-white">
      {/* Mobile View: Search Bar + Slider with Padding and Rounded Border */}
      <div className="md:hidden">
        {/* Search Bar - Mobile Only */}
        <div className="px-4 pt-4 pb-2">
          <form onSubmit={handleSearch} className="w-full">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search eggs, paneer, banana..."
                className="w-full px-3 py-2.5 pl-10 pr-3 text-sm bg-white rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:border-[#9fcc2e] focus:ring-2 focus:ring-[#9fcc2e] shadow-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </form>
        </div>

        {/* Hero Slider - Mobile with Padding and Rounded Border */}
        <div className="px-4 pb-4 w-full">
          <div className="relative w-full h-[18vh] min-h-[160px] max-h-[350px] rounded-lg overflow-hidden border border-gray-200 shadow-md">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {slide.image.mobile && slide.image.mobile.trim() !== '' && (
                  <Image
                    src={slide.image.mobile}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    style={{ width: '100%', height: '100%' }}
                    sizes="100vw"
                    quality={100}
                  />
                )}
              </div>
            ))}

            {/* Slider Indicators - Mobile */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-1.5 items-center">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1 transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-8 bg-[#9fcc2e]'
                      : 'w-4 bg-white/70 hover:bg-white/90'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tablet View: Full-Width Slider */}
      <div className="hidden md:block lg:hidden relative w-full h-[30vh] min-h-[300px] max-h-[450px]">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {slide.image.tablet && slide.image.tablet.trim() !== '' && (
                <Image
                  src={slide.image.tablet}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  style={{ width: '100%', height: '100%' }}
                  sizes="100vw"
                  quality={90}
                />
              )}
            </div>
          ))}
        </div>

        {/* Slider Indicators - Tablet */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 items-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 transition-all duration-300 ${
                index === currentSlide
                  ? 'w-10 bg-[#9fcc2e]'
                  : 'w-5 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View: Full-Width Slider */}
      <div className="hidden lg:block relative w-full h-[60vh] min-h-[300px] max-h-[450px]">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {slide.image.desktop && slide.image.desktop.trim() !== '' && (
                <Image
                  src={slide.image.desktop}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  style={{ width: '100%', height: '100%' }}
                  sizes="100vw"
                  quality={90}
                />
              )}
            </div>
          ))}
        </div>

        {/* Slider Indicators - Desktop */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 items-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 transition-all duration-300 ${
                index === currentSlide
                  ? 'w-12 bg-[#9fcc2e]'
                  : 'w-6 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
