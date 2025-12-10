'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

export default function Categories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const categories = [
    {
      id: 1,
      name: 'Foods',
      image: '/categories/foods.png',
      description: 'Various Food Items'
    },
    {
      id: 2,
      name: 'Fruits',
      image: '/categories/fruits.png',
      description: 'Fresh Fruits'
    },
    {
      id: 3,
      name: 'Vegetables',
      image: '/categories/Vegetables.png',
      description: 'Fresh Vegetables'
    },
    {
      id: 4,
      name: 'Fast Food',
      image: '/categories/FastFood.png',
      description: 'Quick Meals'
    },
    {
      id: 5,
      name: 'Wafers and Snacks',
      image: '/categories/WafersandSnacks.png',
      description: 'Chips & Snacks'
    },
    {
      id: 6,
      name: 'Juices',
      image: '/categories/Juices.png',
      description: 'Fresh Juices'
    },
    {
      id: 7,
      name: 'Dairy Products',
      image: '/categories/DairyProducts.png',
      description: 'Milk & Dairy'
    },
    {
      id: 8,
      name: 'Bakery Items',
      image: '/categories/BakeryItems.png',
      description: 'Bread & Pastries'
    },
    {
      id: 9,
      name: 'Beverage Items',
      image: '/categories/foods.png',
      description: 'Drinks & Beverages'
    },
    {
      id: 10,
      name: 'Dry Fruits and Nuts',
      image: '/categories/DryFruitsandNuts.png',
      description: 'Nuts & Dried Fruits'
    }
  ]

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      checkScrollPosition()
      container.addEventListener('scroll', checkScrollPosition)
      
      // Check on resize
      const handleResize = () => {
        checkScrollPosition()
      }
      window.addEventListener('resize', handleResize)

      return () => {
        container.removeEventListener('scroll', checkScrollPosition)
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = container.clientWidth * 0.8
      const targetScroll = direction === 'left' 
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
            Quick by Category
          </h2>
          <div className="w-12 md:w-16 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-2 md:mb-3"></div>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-gray-50 transition-colors hidden sm:flex items-center justify-center"
              aria-label="Scroll left"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 sm:gap-4 md:gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="group cursor-pointer flex flex-col items-center flex-shrink-0 w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px]"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center mb-2 relative overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                  />
                </div>
                <h3 className="text-xs sm:text-sm text-gray-900 text-center font-bold uppercase group-hover:text-[#9fcc2e] transition-colors line-clamp-2 w-full px-1">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-gray-50 transition-colors hidden sm:flex items-center justify-center"
              aria-label="Scroll right"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  )
}

