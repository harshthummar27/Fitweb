import Image from 'next/image'
import Link from 'next/link'

export default function Vegetables() {
  const vegetables = [
    {
      id: 1,
      name: 'Broccoli',
      type: 'Veg',
      calories: '34',
      carbs: '7g',
      protein: '2.8g',
      image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=400&q=80',
      description: 'High in vitamin C and fiber'
    },
    {
      id: 2,
      name: 'Spinach',
      type: 'Veg',
      calories: '23',
      carbs: '3.6g',
      protein: '2.9g',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80',
      description: 'Iron-rich leafy green vegetable'
    },
    {
      id: 3,
      name: 'Carrot',
      type: 'Veg',
      calories: '41',
      carbs: '10g',
      protein: '0.9g',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80',
      description: 'Rich in beta-carotene and vitamin A'
    },
    {
      id: 4,
      name: 'Tomato',
      type: 'Veg',
      calories: '18',
      carbs: '3.9g',
      protein: '0.9g',
      image: 'https://images.unsplash.com/photo-1546470427-e26264be0b2a?w=400&q=80',
      description: 'High in lycopene and vitamin C'
    },
    {
      id: 5,
      name: 'Bell Pepper',
      type: 'Veg',
      calories: '31',
      carbs: '7g',
      protein: '1g',
      image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&q=80',
      description: 'Colorful, vitamin C rich vegetable'
    },
    {
      id: 6,
      name: 'Cauliflower',
      type: 'Veg',
      calories: '25',
      carbs: '5g',
      protein: '1.9g',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&q=80',
      description: 'Low calorie, high in nutrients'
    },
    {
      id: 7,
      name: 'Cabbage',
      type: 'Veg',
      calories: '25',
      carbs: '6g',
      protein: '1.3g',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80',
      description: 'Crunchy, vitamin K rich vegetable'
    },
    {
      id: 8,
      name: 'Cucumber',
      type: 'Veg',
      calories: '16',
      carbs: '4g',
      protein: '0.7g',
      image: 'https://images.unsplash.com/photo-1604977042238-9f43e3e4e5e5?w=400&q=80',
      description: 'Hydrating, low calorie vegetable'
    },
    {
      id: 9,
      name: 'Onion',
      type: 'Veg',
      calories: '40',
      carbs: '9g',
      protein: '1.1g',
      image: 'https://images.unsplash.com/photo-1618512496249-3f43c8f58ef0?w=400&q=80',
      description: 'Flavorful, antioxidant-rich vegetable'
    },
    {
      id: 10,
      name: 'Potato',
      type: 'Veg',
      calories: '77',
      carbs: '17g',
      protein: '2g',
      image: 'https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&q=80',
      description: 'Starchy vegetable, high in potassium'
    },
    {
      id: 11,
      name: 'Eggplant',
      type: 'Veg',
      calories: '25',
      carbs: '6g',
      protein: '1g',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80',
      description: 'Low calorie, fiber-rich vegetable'
    },
    {
      id: 12,
      name: 'Zucchini',
      type: 'Veg',
      calories: '17',
      carbs: '3.1g',
      protein: '1.2g',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80',
      description: 'Light, vitamin C rich summer squash'
    }
  ]

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Vegetables
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Discover nutritional information for fresh vegetables
            <span className="block mt-2 text-xs text-gray-500">
              ← Scroll to see more →
            </span>
          </p>
        </div>

        <div className="overflow-x-auto pb-4 -mx-3 sm:-mx-4 lg:-mx-6 px-3 sm:px-4 lg:px-6 horizontal-scroll scroll-smooth">
          <div className="flex gap-4 md:gap-5 min-w-max">
            {vegetables.map((vegetable) => (
              <div
                key={vegetable.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex-shrink-0 w-64 sm:w-72 md:w-80 group"
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 w-full overflow-hidden">
                  <Image
                    src={vegetable.image}
                    alt={vegetable.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                  />
                  {/* Veg/Non-Veg Icon */}
                  <div className="absolute top-2 left-2">
                    {vegetable.type === 'Veg' ? (
                      <div className="w-6 h-6 border-2 border-green-600 bg-white rounded flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                    ) : (
                      <div className="w-6 h-6 border-2 border-red-600 bg-white rounded flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-red-600"></div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {vegetable.name}
                  </h3>
                  
                  <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Calories:</span>
                      <span className="text-sm font-semibold text-gray-900">{vegetable.calories} kcal</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Carbs:</span>
                      <span className="text-sm font-semibold text-[#9fcc2e]">{vegetable.carbs}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Protein:</span>
                      <span className="text-sm font-semibold text-gray-900">{vegetable.protein}</span>
                    </div>
                  </div>

                  {/* Buttons Row */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold py-2 px-3 text-xs rounded-lg transition duration-300 transform hover:scale-105">
                      View More Details →
                    </button>
                    <button className="flex-1 bg-transparent border-2 border-[#9fcc2e] hover:bg-[#9fcc2e] text-[#9fcc2e] hover:text-white font-semibold py-2 px-3 text-xs rounded-lg transition duration-300">
                      Compare
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 md:mt-10">
          <Link
            href="/nutrition"
            className="inline-block bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            View All Vegetables
          </Link>
        </div>
      </div>
    </section>
  )
}

