import Image from 'next/image'

export default function GymToolsCategories() {
  const categories = [
    {
      id: 1,
      name: 'Dumbbells',
      icon: '🏋️',
      description: 'Adjustable & Fixed Weight',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80',
      count: '50+ Products'
    },
    {
      id: 2,
      name: 'Barbells',
      icon: '⚖️',
      description: 'Olympic & Standard Bars',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
      count: '30+ Products'
    },
    {
      id: 3,
      name: 'Weight Plates',
      icon: '🔘',
      description: 'Cast Iron & Bumper Plates',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&q=80',
      count: '40+ Products'
    },
    {
      id: 4,
      name: 'Benches',
      icon: '🪑',
      description: 'Adjustable & Flat Benches',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
      count: '25+ Products'
    },
    {
      id: 5,
      name: 'Treadmills',
      icon: '🏃',
      description: 'Commercial & Home Models',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
      count: '20+ Products'
    },
    {
      id: 6,
      name: 'Exercise Bikes',
      icon: '🚴',
      description: 'Upright & Recumbent',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&q=80',
      count: '18+ Products'
    },
    {
      id: 7,
      name: 'Resistance Bands',
      icon: '🎯',
      description: 'Elastic & Loop Bands',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80',
      count: '35+ Products'
    },
    {
      id: 8,
      name: 'Kettlebells',
      icon: '⚫',
      description: 'Cast Iron & Competition',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
      count: '28+ Products'
    },
    {
      id: 9,
      name: 'Pull-Up Bars',
      icon: '🤸',
      description: 'Wall Mount & Door Frame',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
      count: '15+ Products'
    },
    {
      id: 10,
      name: 'Yoga Mats',
      icon: '🧘',
      description: 'Premium & Eco-Friendly',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80',
      count: '22+ Products'
    },
    {
      id: 11,
      name: 'Foam Rollers',
      icon: '🔄',
      description: 'Massage & Recovery Tools',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80',
      count: '12+ Products'
    },
    {
      id: 12,
      name: 'Gym Gloves',
      icon: '🧤',
      description: 'Protection & Grip',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80',
      count: '30+ Products'
    },
    {
      id: 13,
      name: 'Weight Racks',
      icon: '🗄️',
      description: 'Storage Solutions',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80',
      count: '18+ Products'
    },
    {
      id: 14,
      name: 'Cable Machines',
      icon: '🔗',
      description: 'Functional Training',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
      count: '15+ Products'
    },
    {
      id: 15,
      name: 'Medicine Balls',
      icon: '⚽',
      description: 'Weighted Training Balls',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&q=80',
      count: '20+ Products'
    },
    {
      id: 16,
      name: 'Battle Ropes',
      icon: '🌊',
      description: 'Cardio & Strength',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
      count: '10+ Products'
    }
  ]

  return (
    <section id="gym-tools-categories" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <div className="w-24 h-1 bg-[#9fcc2e] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our extensive collection of professional gym equipment and fitness tools
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-white rounded-full p-2 shadow-lg">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                </div>

                {/* Product Count Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-[#9fcc2e] text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#9fcc2e] transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {category.description}
                </p>
                
                {/* View Button */}
                <button className="w-full bg-gray-100 group-hover:bg-[#9fcc2e] text-gray-700 group-hover:text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm">
                  View Products →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-4">
            Can't find what you're looking for?
          </p>
          <button className="bg-[#9fcc2e] hover:bg-[#295135] text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  )
}

