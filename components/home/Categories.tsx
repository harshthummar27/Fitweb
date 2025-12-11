'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

export default function Categories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(1)

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
      const container = scrollContainerRef.current
      const { scrollLeft, scrollWidth, clientWidth } = container
      
      // Calculate total pages - only show dots if content is scrollable
      const totalScrollableWidth = scrollWidth - clientWidth
      if (totalScrollableWidth <= 0) {
        setTotalPages(1)
        setCurrentPage(0)
        return
      }
      
      // Calculate pages based on how many full viewport widths we can scroll
      const calculatedPages = Math.ceil(scrollWidth / clientWidth)
      setTotalPages(calculatedPages)
      
      // Calculate current page based on scroll position
      const page = Math.round(scrollLeft / clientWidth)
      setCurrentPage(Math.min(Math.max(page, 0), calculatedPages - 1))
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

  const goToPage = (page: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = container.clientWidth * page
      
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      })
      setCurrentPage(page)
    }
  }

  return (
    <section className="py-4 md:py-6 bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Heading */}
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
          Food Categories
        </h2>
        
        <div className="relative">
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-8 sm:pb-10"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="group cursor-pointer flex flex-col items-center flex-shrink-0 w-[90px] sm:w-[100px] md:w-[110px] lg:w-[120px]"
              >
                {/* Square Icon Container */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center mb-1.5 sm:mb-2 relative overflow-hidden rounded-md bg-white shadow-sm group-hover:shadow-md transition-all duration-200">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover p-1.5 sm:p-2 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                  />
                </div>
                {/* Category Name */}
                <h3 className="text-[10px] sm:text-xs md:text-sm text-gray-900 text-center font-medium group-hover:text-[#9fcc2e] transition-colors line-clamp-2 w-full px-0.5 leading-tight">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2 items-center">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? 'w-6 sm:w-8 bg-[#9fcc2e]'
                      : 'w-3 sm:w-4 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
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

