import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Categories from '@/components/home/Categories'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Fitness Categories - Equipment, Supplements & More | FitZone Gym',
  description: 'Browse our fitness categories: Cardio Equipment, Strength Training, Protein Supplements, Yoga & Pilates, Fitness Apparel, Nutrition Plans, and Personal Training. Find everything you need for your fitness journey.',
  keywords: 'fitness categories, gym equipment, protein supplements, fitness apparel, yoga accessories, nutrition plans, personal training',
  openGraph: {
    title: 'Fitness Categories - Equipment, Supplements & More',
    description: 'Browse our fitness categories: Equipment, Supplements, Apparel, and more.',
    type: 'website',
  },
  alternates: {
    canonical: '/categories',
  },
}

export default function CategoriesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Categories />
      <Footer />
    </main>
  )
}

