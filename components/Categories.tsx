export default function Categories() {
  const categories = [
    {
      id: 1,
      name: 'Cardio Equipment',
      icon: '🏃',
      description: 'Treadmills, Bikes & More',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80'
    },
    {
      id: 2,
      name: 'Strength Training',
      icon: '💪',
      description: 'Weights & Machines',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80'
    },
    {
      id: 3,
      name: 'Protein Supplements',
      icon: '🥤',
      description: 'Whey, Casein & More',
      image: 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=400&q=80'
    },
    {
      id: 4,
      name: 'Yoga & Pilates',
      icon: '🧘',
      description: 'Mats & Accessories',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80'
    },
    {
      id: 5,
      name: 'Fitness Apparel',
      icon: '👕',
      description: 'Activewear & Shoes',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80'
    },
    {
      id: 6,
      name: 'Nutrition Plans',
      icon: '🥗',
      description: 'Meal Plans & Diets',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80'
    },
    {
      id: 7,
      name: 'Personal Training',
      icon: '👨‍🏫',
      description: 'Expert Trainers',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80'
    },
    {
      id: 8,
      name: 'Group Classes',
      icon: '👥',
      description: 'HIIT, Zumba & More',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&q=80'
    },
    {
      id: 9,
      name: 'Gym Accessories',
      icon: '🎒',
      description: 'Bags, Gloves & More',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80'
    },
    {
      id: 10,
      name: 'Recovery & Wellness',
      icon: '💆',
      description: 'Massage & Therapy',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80'
    }
  ]

  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
            Quick by Category
          </h2>
          <div className="w-12 md:w-16 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-2 md:mb-3"></div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-2 sm:gap-3 md:gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
            >
              <div className="relative h-14 sm:h-16 md:h-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl md:text-3xl">{category.icon}</span>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </div>
              <div className="p-1.5 sm:p-2 text-center">
                <h3 className="font-semibold text-gray-900 text-[10px] sm:text-xs group-hover:text-[#9fcc2e] transition-colors line-clamp-1">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

