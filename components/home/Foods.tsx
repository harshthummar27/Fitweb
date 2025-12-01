import Image from 'next/image'
import Link from 'next/link'

export default function Foods() {
  const foods = [
    {
      id: 1,
      name: 'Rice',
      type: 'Veg',
      calories: '130',
      carbs: '28g',
      protein: '2.7g',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80',
      description: 'Staple food, rich in carbohydrates'
    },
    {
      id: 2,
      name: 'Wheat Bread',
      type: 'Veg',
      calories: '265',
      carbs: '49g',
      protein: '9g',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80',
      description: 'Whole grain bread, high in fiber'
    },
    {
      id: 3,
      name: 'Pasta',
      type: 'Veg',
      calories: '131',
      carbs: '25g',
      protein: '5g',
      image: 'https://images.unsplash.com/photo-1551462147-85885a1743e6?w=400&q=80',
      description: 'Italian staple, versatile and filling'
    },
    {
      id: 4,
      name: 'Potato',
      type: 'Veg',
      calories: '77',
      carbs: '17g',
      protein: '2g',
      image: 'https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&q=80',
      description: 'Versatile vegetable, high in potassium'
    },
    {
      id: 5,
      name: 'Chicken Curry',
      type: 'Non-veg',
      calories: '180',
      carbs: '5g',
      protein: '25g',
      image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&q=80',
      description: 'Spiced chicken dish, protein-rich'
    },
    {
      id: 6,
      name: 'Dal (Lentils)',
      type: 'Veg',
      calories: '116',
      carbs: '20g',
      protein: '9g',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80',
      description: 'Protein-packed legume dish'
    },
    {
      id: 7,
      name: 'Roti/Chapati',
      type: 'Veg',
      calories: '104',
      carbs: '22g',
      protein: '3g',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80',
      description: 'Flatbread, staple in Indian cuisine'
    },
    {
      id: 8,
      name: 'Fish Curry',
      type: 'Non-veg',
      calories: '206',
      carbs: '4g',
      protein: '22g',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80',
      description: 'Omega-3 rich fish preparation'
    },
    {
      id: 9,
      name: 'Vegetable Curry',
      type: 'Veg',
      calories: '85',
      carbs: '12g',
      protein: '3g',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80',
      description: 'Mixed vegetables in spiced gravy'
    },
    {
      id: 10,
      name: 'Egg Curry',
      type: 'Non-veg',
      calories: '155',
      carbs: '3g',
      protein: '13g',
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80',
      description: 'Protein-rich egg preparation'
    },
    {
      id: 11,
      name: 'Biryani',
      type: 'Non-veg',
      calories: '350',
      carbs: '45g',
      protein: '20g',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d19a?w=400&q=80',
      description: 'Fragrant rice dish with spices'
    },
    {
      id: 12,
      name: 'Sambar',
      type: 'Veg',
      calories: '60',
      carbs: '10g',
      protein: '3g',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80',
      description: 'South Indian lentil stew'
    }
  ]

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Foods
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Discover nutritional information for various food items
            <span className="block mt-2 text-xs text-gray-500">
              ← Scroll to see more →
            </span>
          </p>
        </div>

        <div className="overflow-x-auto pb-4 -mx-3 sm:-mx-4 lg:-mx-6 px-3 sm:px-4 lg:px-6 horizontal-scroll scroll-smooth">
          <div className="flex gap-4 md:gap-5 min-w-max">
            {foods.map((food) => (
              <div
                key={food.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex-shrink-0 w-64 sm:w-72 md:w-80 group"
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
                      <span className="text-sm text-gray-600">Calories:</span>
                      <span className="text-sm font-semibold text-gray-900">{food.calories} kcal</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Carbs:</span>
                      <span className="text-sm font-semibold text-[#9fcc2e]">{food.carbs}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Protein:</span>
                      <span className="text-sm font-semibold text-gray-900">{food.protein}</span>
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
            View All Foods
          </Link>
        </div>
      </div>
    </section>
  )
}

