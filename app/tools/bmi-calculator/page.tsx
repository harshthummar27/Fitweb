import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import BMICalculator from '@/components/BMICalculator'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BMI Calculator - Free Body Mass Index Calculator | FitZone Gym',
  description: 'Calculate your Body Mass Index (BMI) for free. Understand your weight category - underweight, normal weight, overweight, or obese. Get instant BMI results with our accurate calculator.',
  keywords: 'BMI calculator, body mass index, BMI chart, weight calculator, health calculator, BMI formula',
  openGraph: {
    title: 'BMI Calculator - Free Body Mass Index Calculator',
    description: 'Calculate your Body Mass Index (BMI) for free. Understand your weight category instantly.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools/bmi-calculator',
  },
}

export default function BMICalculatorPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <BMICalculator />
      <Footer />
    </main>
  )
}

