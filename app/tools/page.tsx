import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import GymToolsHero from '@/components/GymToolsHero'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Fitness Tools & Calculators - FitZone Gym | BMI, Calories, Protein & More',
  description: 'Free fitness calculators: BMI calculator, calories calculator, ideal weight calculator, and protein requirement calculator. Track your fitness goals with our comprehensive tools.',
  keywords: 'BMI calculator, calories calculator, ideal weight calculator, protein calculator, fitness tools, health calculator',
  openGraph: {
    title: 'Fitness Tools & Calculators - FitZone Gym',
    description: 'Free fitness calculators: BMI, calories, ideal weight, and protein requirement calculators.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools',
  },
}

const tools = [
  {
    title: 'BMI Calculator',
    description: 'Calculate your Body Mass Index to understand your weight category',
    href: '/tools/bmi-calculator',
    icon: '📊',
  },
  {
    title: 'Calories Calculator',
    description: 'Estimate your daily calorie needs based on your activity level',
    href: '/tools/calories-calculator',
    icon: '🔥',
  },
  {
    title: 'Ideal Weight Calculator',
    description: 'Find your ideal weight range based on your height and gender',
    href: '/tools/ideal-weight-calculator',
    icon: '⚖️',
  },
  {
    title: 'Protein Requirement Calculator',
    description: 'Calculate your daily protein needs based on your weight and goals',
    href: '/tools/protein-requirement-calculator',
    icon: '💪',
  },
]

export default function ToolsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <GymToolsHero />
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fitness Calculators
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Use our free fitness calculators to track your progress and achieve your goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <Link
                key={index}
                href={tool.href}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#9fcc2e] transition">
                  {tool.title}
                </h3>
                <p className="text-gray-600 text-sm">{tool.description}</p>
                <div className="mt-4 text-[#9fcc2e] font-semibold text-sm group-hover:underline">
                  Calculate →
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

