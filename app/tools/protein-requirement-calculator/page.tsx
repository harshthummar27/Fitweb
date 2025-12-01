import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import ProteinRequirementCalculator from '@/components/calculators/ProteinRequirementCalculator'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Protein Requirement Calculator - Daily Protein Needs | FitZone Gym',
  description: 'Calculate your daily protein requirement based on your weight, activity level, and fitness goals. Perfect for muscle gain, weight loss, or maintenance. Free protein calculator.',
  keywords: 'protein calculator, daily protein needs, protein requirement, protein intake calculator, muscle building protein',
  openGraph: {
    title: 'Protein Requirement Calculator - Daily Protein Needs',
    description: 'Calculate your daily protein requirement based on your weight, activity level, and fitness goals.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools/protein-requirement-calculator',
  },
}

export default function ProteinRequirementCalculatorPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProteinRequirementCalculator />
      <Footer />
    </main>
  )
}

