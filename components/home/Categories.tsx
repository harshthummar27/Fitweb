'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

export default function Categories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const mobileScrollRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(1)

  const categories = [
    {
      id: 1,
      name: 'Foods',
      image: '/categories/Foods.png',
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
      image: '/categories/BeverageItems.png',
      description: 'Drinks & Beverages'
    },
    {
      id: 10,
      name: 'Dry Fruits and Nuts',
      image: '/categories/DryFruitsandNuts.png',
      description: 'Nuts & Dried Fruits'
    }
  ]

  const checkScrollPosition = (container: HTMLDivElement | null) => {
    if (container) {
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
    // Check both mobile and desktop containers
    const mobileContainer = mobileScrollRef.current
    const desktopContainer = scrollContainerRef.current
    
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        checkScrollPosition(mobileContainer)
      } else {
        checkScrollPosition(desktopContainer)
      }
    }
    
    const handleResize = () => {
      if (window.innerWidth < 768) {
        checkScrollPosition(mobileContainer)
      } else {
        checkScrollPosition(desktopContainer)
      }
    }

    if (mobileContainer) {
      mobileContainer.addEventListener('scroll', handleScroll)
      checkScrollPosition(mobileContainer)
    }
    
    if (desktopContainer) {
      desktopContainer.addEventListener('scroll', handleScroll)
      checkScrollPosition(desktopContainer)
    }
    
    window.addEventListener('resize', handleResize)

    return () => {
      if (mobileContainer) {
        mobileContainer.removeEventListener('scroll', handleScroll)
      }
      if (desktopContainer) {
        desktopContainer.removeEventListener('scroll', handleScroll)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const goToPage = (page: number) => {
    const container = window.innerWidth < 768 ? mobileScrollRef.current : scrollContainerRef.current
    if (container) {
      const scrollAmount = container.clientWidth * page
      
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      })
      setCurrentPage(page)
    }
  }

  // Split categories into 2 rows for mobile (5 items per row)
  const itemsPerRow = 5
  const firstRow = categories.slice(0, itemsPerRow)
  const secondRow = categories.slice(itemsPerRow)

  return (
    <section className="py-4 md:py-6 bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Heading */}
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
          Food Categories
        </h2>
        
        {/* Mobile View: 2-Row Scrollable Grid */}
        <div className="md:hidden relative">
          <div
            ref={mobileScrollRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="inline-flex flex-col gap-3" style={{ minWidth: '100%' }}>
              {/* First Row */}
              <div className="flex gap-3 px-1">
                {firstRow.map((category) => (
                  <div
                    key={category.id}
                    className="group cursor-pointer flex flex-col items-center flex-shrink-0"
                    style={{ width: 'calc((100vw - 48px) / 5)' }}
                  >
                    {/* Image with Fixed Dimensions */}
                    <div className="w-full flex items-center justify-center mb-1" style={{ height: '80px', width: '100%' }}>
                      <div style={{ width: '80px', height: '80px', position: 'relative' }}>
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-300"
                          sizes="80px"
                        />
                      </div>
                    </div>
                    {/* Category Name */}
                    <h3 className="text-[11px] text-gray-700 text-center font-normal leading-tight line-clamp-2 w-full">
                      {category.name}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Second Row */}
              <div className="flex gap-3 px-1">
                {secondRow.map((category) => (
                  <div
                    key={category.id}
                    className="group cursor-pointer flex flex-col items-center flex-shrink-0"
                    style={{ width: 'calc((100vw - 48px) / 5)' }}
                  >
                    {/* Image with Fixed Dimensions */}
                    <div className="w-full flex items-center justify-center mb-1" style={{ height: '80px', width: '100%' }}>
                      <div style={{ width: '80px', height: '80px', position: 'relative' }}>
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-300"
                          sizes="80px"
                        />
                      </div>
                    </div>
                    {/* Category Name */}
                    <h3 className="text-[11px] text-gray-700 text-center font-normal leading-tight line-clamp-2 w-full">
                      {category.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Dots - Mobile */}
          {totalPages > 1 && (
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex gap-1.5 items-center">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? 'w-6 bg-[#9fcc2e]'
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Desktop View: Horizontal Scroll */}
        <div className="hidden md:block relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-3 md:gap-4 lg:gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-8 sm:pb-10"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="group cursor-pointer flex flex-col items-center flex-shrink-0 w-[100px] md:w-[110px] lg:w-[120px]"
              >
                {/* Image with Fixed Dimensions */}
                <div className="flex items-center justify-center mb-1" style={{ height: '100px', width: '100px' }}>
                  <div style={{ width: '100px', height: '100px', position: 'relative' }}>
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                      sizes="100px"
                    />
                  </div>
                </div>
                {/* Category Name */}
                <h3 className="text-xs md:text-sm text-gray-900 text-center font-medium group-hover:text-[#9fcc2e] transition-colors line-clamp-2 w-full px-0.5 leading-tight">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Pagination Dots - Desktop */}
          {totalPages > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 items-center">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? 'w-8 bg-[#9fcc2e]'
                      : 'w-4 bg-gray-300 hover:bg-gray-400'
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

