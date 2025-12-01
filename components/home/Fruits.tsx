import Image from 'next/image'
import Link from 'next/link'

export default function Fruits() {
  const fruits = [
    {
      id: 1,
      name: 'Apple',
      type: 'Veg',
      calories: '52',
      carbs: '14g',
      protein: '0.3g',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&q=80',
      description: 'Rich in fiber and vitamin C'
    },
    {
      id: 2,
      name: 'Banana',
      type: 'Veg',
      calories: '89',
      carbs: '23g',
      protein: '1.1g',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80',
      description: 'High in potassium and energy'
    },
    {
      id: 3,
      name: 'Orange',
      type: 'Veg',
      calories: '47',
      carbs: '12g',
      protein: '0.9g',
      image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400&q=80',
      description: 'Excellent source of vitamin C'
    },
    {
      id: 4,
      name: 'Mango',
      type: 'Veg',
      calories: '60',
      carbs: '15g',
      protein: '0.8g',
      image: 'https://images.unsplash.com/photo-1605027990121-8aae2c1fd8c4?w=400&q=80',
      description: 'Sweet tropical fruit, rich in vitamins'
    },
    {
      id: 5,
      name: 'Grapes',
      type: 'Veg',
      calories: '69',
      carbs: '18g',
      protein: '0.7g',
      image: 'https://images.unsplash.com/photo-1537640538966-79f369143a8f?w=400&q=80',
      description: 'Antioxidant-rich, heart healthy'
    },
    {
      id: 6,
      name: 'Strawberry',
      type: 'Veg',
      calories: '32',
      carbs: '8g',
      protein: '0.7g',
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&q=80',
      description: 'Low calorie, high in vitamin C'
    },
    {
      id: 7,
      name: 'Watermelon',
      type: 'Veg',
      calories: '30',
      carbs: '8g',
      protein: '0.6g',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80',
      description: 'Hydrating fruit, perfect for summer'
    },
    {
      id: 8,
      name: 'Pineapple',
      type: 'Veg',
      calories: '50',
      carbs: '13g',
      protein: '0.5g',
      image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&q=80',
      description: 'Tropical fruit with digestive enzymes'
    },
    {
      id: 9,
      name: 'Papaya',
      type: 'Veg',
      calories: '43',
      carbs: '11g',
      protein: '0.5g',
      image: 'https://images.unsplash.com/photo-1615485925511-ef4e4c2b525b?w=400&q=80',
      description: 'Rich in vitamin A and enzymes'
    },
    {
      id: 10,
      name: 'Pomegranate',
      type: 'Veg',
      calories: '83',
      carbs: '19g',
      protein: '1.7g',
      image: 'https://images.unsplash.com/photo-1601648768826-28c0e4291e5e?w=400&q=80',
      description: 'Antioxidant powerhouse'
    },
    {
      id: 11,
      name: 'Kiwi',
      type: 'Veg',
      calories: '61',
      carbs: '15g',
      protein: '1.1g',
      image: 'https://images.unsplash.com/photo-1594282417922-7c0c0c0c0c0c?w=400&q=80',
      description: 'High in vitamin C and fiber'
    },
    {
      id: 12,
      name: 'Guava',
      type: 'Veg',
      calories: '68',
      carbs: '14g',
      protein: '2.6g',
      image: 'https://images.unsplash.com/photo-1605027990121-8aae2c1fd8c4?w=400&q=80',
      description: 'Vitamin C rich, tropical fruit'
    }
  ]

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Fruits
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Discover nutritional information for fresh fruits
            <span className="block mt-2 text-xs text-gray-500">
              ← Scroll to see more →
            </span>
          </p>
        </div>

        <div className="overflow-x-auto pb-4 -mx-3 sm:-mx-4 lg:-mx-6 px-3 sm:px-4 lg:px-6 horizontal-scroll scroll-smooth">
          <div className="flex gap-4 md:gap-5 min-w-max">
            {fruits.map((fruit) => (
              <div
                key={fruit.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex-shrink-0 w-64 sm:w-72 md:w-80 group"
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 w-full overflow-hidden">
                  <Image
                    src={fruit.image}
                    alt={fruit.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                  />
                  {/* Veg/Non-Veg Icon */}
                  <div className="absolute top-2 left-2">
                    {fruit.type === 'Veg' ? (
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
                    {fruit.name}
                  </h3>
                  
                  <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Calories:</span>
                      <span className="text-sm font-semibold text-gray-900">{fruit.calories} kcal</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Carbs:</span>
                      <span className="text-sm font-semibold text-[#9fcc2e]">{fruit.carbs}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Protein:</span>
                      <span className="text-sm font-semibold text-gray-900">{fruit.protein}</span>
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
            View All Fruits
          </Link>
        </div>
      </div>
    </section>
  )
}

