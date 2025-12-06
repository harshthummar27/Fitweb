import Image from 'next/image'

export default function Categories() {
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
      image: '/categories/foods.png',
      description: 'Fresh Vegetables'
    },
    {
      id: 4,
      name: 'Fast Food',
      image: '/categories/fruits.png',
      description: 'Quick Meals'
    },
    {
      id: 5,
      name: 'Wafers and Snacks',
      image: '/categories/foods.png',
      description: 'Chips & Snacks'
    },
    {
      id: 6,
      name: 'Juices',
      image: '/categories/fruits.png',
      description: 'Fresh Juices'
    },
    {
      id: 7,
      name: 'Dairy Products',
      image: '/categories/foods.png',
      description: 'Milk & Dairy'
    },
    {
      id: 8,
      name: 'Bakery Items',
      image: '/categories/fruits.png',
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
      image: '/categories/foods.png',
      description: 'Nuts & Dried Fruits'
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
              <div className="w-full aspect-square flex items-center justify-center mb-2 relative overflow-hidden rounded-lg">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, (max-width: 1280px) 12.5vw, 10vw"
                />
              </div>
              <h3 className="text-xs sm:text-sm text-gray-900 text-center font-bold uppercase group-hover:text-[#9fcc2e] transition-colors line-clamp-2">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

