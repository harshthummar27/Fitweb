export default function Categories() {
  const categories = [
    {
      id: 1,
      name: 'Foods',
      icon: '🍽️',
      description: 'Various Food Items',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80'
    },
    {
      id: 2,
      name: 'Fruits',
      icon: '🍎',
      description: 'Fresh Fruits',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&q=80'
    },
    {
      id: 3,
      name: 'Vegetables',
      icon: '🥬',
      description: 'Fresh Vegetables',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80'
    },
    {
      id: 4,
      name: 'Fast Food',
      icon: '🍔',
      description: 'Quick Meals',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80'
    },
    {
      id: 5,
      name: 'Wafers and Snacks',
      icon: '🍿',
      description: 'Chips & Snacks',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80'
    },
    {
      id: 6,
      name: 'Juices',
      icon: '🥤',
      description: 'Fresh Juices',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80'
    },
    {
      id: 7,
      name: 'Dairy Products',
      icon: '🥛',
      description: 'Milk & Dairy',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80'
    },
    {
      id: 8,
      name: 'Bakery Items',
      icon: '🍞',
      description: 'Bread & Pastries',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80'
    },
    {
      id: 9,
      name: 'Beverage Items',
      icon: '☕',
      description: 'Drinks & Beverages',
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80'
    },
    {
      id: 10,
      name: 'Dry Fruits and Nuts',
      icon: '🥜',
      description: 'Nuts & Dried Fruits',
      image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80'
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

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-3 sm:gap-4 md:gap-5">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="w-full aspect-square flex items-center justify-center mb-2">
                <span className="text-3xl sm:text-4xl md:text-5xl">{category.icon}</span>
              </div>
              <h3 className="text-xs sm:text-sm text-gray-900 text-center font-medium group-hover:text-[#9fcc2e] transition-colors line-clamp-2">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

