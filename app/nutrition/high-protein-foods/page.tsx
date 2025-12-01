import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import HighProteinFood from '@/components/nutrition/HighProteinFood'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'High Protein Foods - Complete List with Protein Content | FitZone Gym',
  description: 'Discover the best high protein foods for muscle building and weight loss. Complete list of protein-rich foods including chicken, fish, eggs, dairy, and plant-based options with protein content and calories.',
  keywords: 'high protein foods, protein rich foods, best protein sources, protein foods list, muscle building foods, high protein diet',
  openGraph: {
    title: 'High Protein Foods - Complete List with Protein Content',
    description: 'Discover the best high protein foods for muscle building and weight loss. Complete list with protein content.',
    type: 'website',
  },
  alternates: {
    canonical: '/nutrition/high-protein-foods',
  },
}

export default function HighProteinFoodsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HighProteinFood />
      <Footer />
    </main>
  )
}

