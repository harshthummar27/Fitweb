import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import IdealWeightCalculator from '@/components/calculators/IdealWeightCalculator'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Ideal Weight Calculator - Calculate Your Healthy Weight Range | FitZone Gym',
  description: 'Calculate your ideal weight range based on your height and gender. Find the healthy weight range for your body type using our free ideal weight calculator.',
  keywords: 'ideal weight calculator, healthy weight, weight range calculator, target weight, ideal body weight',
  openGraph: {
    title: 'Ideal Weight Calculator - Calculate Your Healthy Weight Range',
    description: 'Calculate your ideal weight range based on your height and gender. Free calculator.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools/ideal-weight-calculator',
  },
}

export default function IdealWeightCalculatorPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <IdealWeightCalculator />
      <Footer />
    </main>
  )
}

