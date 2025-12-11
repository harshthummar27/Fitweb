'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality here
    console.log('Searching for:', searchQuery)
  }

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-12 md:h-14 gap-2 md:gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <Link href="/" className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#9fcc2e] hover:text-[#5a6650] transition whitespace-nowrap">
              FitZone
            </Link>
          </div>
          
          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-6">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search eggs , paneer, banana..."
                  className="w-full px-3 py-1.5 pl-8 pr-3 text-sm bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-[#9fcc2e] focus:ring-1 focus:ring-[#9fcc2e]"
                />
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </form>
          </div>

          {/* Navigation Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <Link href="/tools" className="bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold py-1.5 px-4 text-sm rounded-lg transition duration-300 transform hover:scale-105 whitespace-nowrap">
              Calculate
            </Link>
            <Link href="/nutrition" className="bg-transparent border-2 border-[#9fcc2e] hover:bg-[#9fcc2e] text-[#9fcc2e] hover:text-white font-semibold py-1.5 px-4 text-sm rounded-lg transition duration-300 whitespace-nowrap">
              Nutrition
            </Link>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="md:hidden flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
            <Link href="/tools" className="bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold py-1.5 px-2 text-[10px] sm:text-xs rounded-md transition duration-300 whitespace-nowrap">
              Calculate
            </Link>
            <Link href="/nutrition" className="bg-transparent border border-[#9fcc2e] hover:bg-[#9fcc2e] text-[#9fcc2e] hover:text-white font-semibold py-1.5 px-2 text-[10px] sm:text-xs rounded-md transition duration-300 whitespace-nowrap">
              Nutrition
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

