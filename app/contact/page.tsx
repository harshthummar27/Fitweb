import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us - FitZone Gym | Get in Touch',
  description: 'Contact FitZone Gym today. Reach out for membership inquiries, personal training, group classes, or any questions about our fitness services. We are here to help you start your fitness journey.',
  keywords: 'contact FitZone, gym contact, fitness inquiry, membership, gym location, gym phone number',
  openGraph: {
    title: 'Contact Us - FitZone Gym',
    description: 'Contact FitZone Gym today. Reach out for membership inquiries, personal training, or any questions.',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  )
}

