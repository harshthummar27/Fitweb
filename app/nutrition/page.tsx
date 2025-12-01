import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Nutrition Guide - High Protein Foods & Diet Plans | FitZone Gym',
  description: 'Discover high protein foods, nutrition guides, and diet plans. Learn about protein-rich foods for muscle building, weight loss, and optimal health. Complete nutrition information.',
  keywords: 'nutrition, high protein foods, diet plans, protein foods, healthy eating, nutrition guide, meal plans',
  openGraph: {
    title: 'Nutrition Guide - High Protein Foods & Diet Plans',
    description: 'Discover high protein foods, nutrition guides, and diet plans for optimal health.',
    type: 'website',
  },
  alternates: {
    canonical: '/nutrition',
  },
}

const nutritionCategories = [
  {
    title: 'High Protein Foods',
    description: 'Discover the best high protein foods for muscle building and weight loss',
    href: '/nutrition/high-protein-foods',
    icon: '🥩',
  },
  {
    title: 'Nutrition Calculator',
    description: 'Calculate protein, calories, and nutrients in any food',
    href: '/tools',
    icon: '📊',
  },
  {
    title: 'Meal Plans',
    description: 'Get personalized meal plans based on your fitness goals',
    href: '/services',
    icon: '🍽️',
  },
]

export default function NutritionPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Nutrition & Diet
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Fuel your body with the right nutrition. Discover high protein foods, meal plans, and expert nutrition guidance.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {nutritionCategories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#9fcc2e] transition">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
                <div className="mt-4 text-[#9fcc2e] font-semibold text-sm group-hover:underline">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

