import Image from 'next/image'
import Link from 'next/link'

interface HighVitaminFoodProps {
  showAsRow?: boolean
}

export default function HighVitaminFood({ showAsRow = false }: HighVitaminFoodProps = {}) {
  const vitaminFoods = [
    {
      id: 1,
      name: 'Oranges',
      type: 'Veg',
      serving: '200g',
      vitamin: 'Vitamin C',
      amount: '93mg',
      calories: '94',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80',
      description: 'Excellent source of Vitamin C'
    },
    {
      id: 2,
      name: 'Carrots',
      type: 'Veg',
      serving: '200g',
      vitamin: 'Vitamin A',
      amount: '16706 IU',
      calories: '82',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80',
      description: 'Rich in beta-carotene and Vitamin A'
    },
    {
      id: 3,
      name: 'Spinach',
      type: 'Veg',
      serving: '200g',
      vitamin: 'Vitamin K',
      amount: '483mcg',
      calories: '46',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80',
      description: 'High in Vitamin K and folate'
    },
    {
      id: 4,
      name: 'Salmon',
      type: 'Non-veg',
      serving: '200g',
      vitamin: 'Vitamin D',
      amount: '988 IU',
      calories: '412',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80',
      description: 'Rich in Vitamin D and omega-3'
    },
    {
      id: 5,
      name: 'Eggs',
      type: 'Non-veg',
      serving: '100g',
      vitamin: 'Vitamin B12',
      amount: '1.1mcg',
      calories: '155',
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80',
      description: 'Complete vitamins and minerals'
    },
    {
      id: 6,
      name: 'Bell Peppers',
      type: 'Veg',
      serving: '200g',
      vitamin: 'Vitamin C',
      amount: '190mg',
      calories: '50',
      image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&q=80',
      description: 'Very high in Vitamin C'
    },
    {
      id: 7,
      name: 'Sweet Potato',
      type: 'Veg',
      serving: '200g',
      vitamin: 'Vitamin A',
      amount: '1836mcg',
      calories: '180',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&q=80',
      description: 'Excellent source of Vitamin A'
    },
    {
      id: 8,
      name: 'Almonds',
      type: 'Veg',
      serving: '100g',
      vitamin: 'Vitamin E',
      amount: '25.6mg',
      calories: '579',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80',
      description: 'High in Vitamin E and healthy fats'
    },
    {
      id: 9,
      name: 'Broccoli',
      type: 'Veg',
      serving: '200g',
      vitamin: 'Vitamin C',
      amount: '135mg',
      calories: '68',
      image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=400&q=80',
      description: 'Rich in Vitamin C and K'
    },
    {
      id: 10,
      name: 'Sunflower Seeds',
      type: 'Veg',
      serving: '100g',
      vitamin: 'Vitamin E',
      amount: '35.2mg',
      calories: '584',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80',
      description: 'Highest natural source of Vitamin E'
    }
  ]

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            High Vitamin Food
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Discover vitamin-rich foods for optimal health and immunity
            {showAsRow && (
              <span className="block mt-2 text-xs text-gray-500">
                ← Scroll to see more →
              </span>
            )}
          </p>
        </div>

        {showAsRow ? (
          <div className="overflow-x-auto pb-4 -mx-3 sm:-mx-4 lg:-mx-6 px-3 sm:px-4 lg:px-6 horizontal-scroll scroll-smooth">
            <div className="flex gap-4 md:gap-5 min-w-max">
              {vitaminFoods.map((food) => (
                <div
                  key={food.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex-shrink-0 w-64 sm:w-72 md:w-80"
                >
                  {/* Image */}
                  <div className="relative h-48 md:h-56 w-full overflow-hidden">
                    <Image
                      src={food.image}
                      alt={food.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                    />
                    {/* Veg/Non-Veg Icon */}
                    <div className="absolute top-2 left-2">
                      {food.type === 'Veg' ? (
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
                      {food.name}
                    </h3>
                    
                    <div className="space-y-1.5 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Serving:</span>
                        <span className="text-sm font-semibold text-gray-900">{food.serving}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{food.vitamin}:</span>
                        <span className="text-sm font-semibold text-[#9fcc2e]">{food.amount}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Calories:</span>
                        <span className="text-sm font-semibold text-gray-900">{food.calories} kcal</span>
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
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
            {vitaminFoods.map((food) => (
              <div
                key={food.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-36 sm:h-40 md:h-48 w-full overflow-hidden">
                  <Image
                    src={food.image}
                    alt={food.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  {/* Veg/Non-Veg Icon */}
                  <div className="absolute top-2 left-2">
                    {food.type === 'Veg' ? (
                      <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-green-600 bg-white rounded flex items-center justify-center">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-600 rounded-full"></div>
                      </div>
                    ) : (
                      <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-red-600 bg-white rounded flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] sm:border-l-[6px] sm:border-r-[6px] sm:border-b-[10px] border-l-transparent border-r-transparent border-b-red-600"></div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 md:mb-2">
                    {food.name}
                  </h3>
                  
                  <div className="space-y-1 md:space-y-1.5 mb-3 md:mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Serving:</span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-900">{food.serving}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">{food.vitamin}:</span>
                      <span className="text-xs sm:text-sm font-semibold text-[#9fcc2e]">{food.amount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Calories:</span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-900">{food.calories} kcal</span>
                    </div>
                  </div>

                  {/* Buttons Row */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold py-1.5 md:py-2 px-2 md:px-3 text-xs rounded-lg transition duration-300 transform hover:scale-105">
                      View More Details →
                    </button>
                    <button className="flex-1 bg-transparent border-2 border-[#9fcc2e] hover:bg-[#9fcc2e] text-[#9fcc2e] hover:text-white font-semibold py-1.5 md:py-2 px-2 md:px-3 text-xs rounded-lg transition duration-300">
                      Compare
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-8 md:mt-10">
          <Link
            href="/nutrition/high-vitamin-foods"
            className="inline-block bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            View All High Vitamin Foods
          </Link>
        </div>
      </div>
    </section>
  )
}

