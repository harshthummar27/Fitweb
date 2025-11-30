import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Services - FitZone Gym | Personal Training, Group Classes & More',
  description: 'Explore FitZone Gym services: Personal Training, Group Classes, Cardio Zone, Strength Training, Nutrition Counseling, and premium locker rooms. Everything you need for a complete fitness experience.',
  keywords: 'gym services, personal training, group fitness classes, cardio equipment, strength training, nutrition counseling, gym amenities',
  openGraph: {
    title: 'Our Services - FitZone Gym',
    description: 'Explore FitZone Gym services: Personal Training, Group Classes, Cardio Zone, Strength Training, and more.',
    type: 'website',
  },
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Services />
      <Footer />
    </main>
  )
}

