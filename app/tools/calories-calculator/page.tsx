import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import CaloriesEstimateCalculator from '@/components/calculators/CaloriesEstimateCalculator'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Calories Calculator - Daily Calorie Needs Calculator | FitZone Gym',
  description: 'Calculate your daily calorie needs (BMR and TDEE) for free. Estimate calories for weight loss, maintenance, or muscle gain based on your age, gender, weight, height, and activity level.',
  keywords: 'calories calculator, BMR calculator, TDEE calculator, daily calorie needs, calorie counter, metabolism calculator',
  openGraph: {
    title: 'Calories Calculator - Daily Calorie Needs Calculator',
    description: 'Calculate your daily calorie needs (BMR and TDEE) for free. Perfect for weight management.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools/calories-calculator',
  },
}

export default function CaloriesCalculatorPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CaloriesEstimateCalculator />
      <Footer />
    </main>
  )
}

