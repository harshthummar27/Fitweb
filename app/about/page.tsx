import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import About from '@/components/home/About'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'About Us - FitZone Gym | Our Story & Mission',
  description: 'Learn about FitZone Gym - 10+ years of experience, 5000+ happy members, 50+ expert trainers. Discover our mission to help you achieve your fitness goals.',
  keywords: 'about FitZone, gym history, fitness trainers, gym mission, fitness community',
  openGraph: {
    title: 'About Us - FitZone Gym',
    description: 'Learn about FitZone Gym - 10+ years of experience, 5000+ happy members, 50+ expert trainers.',
    type: 'website',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <About />
      <Footer />
    </main>
  )
}

