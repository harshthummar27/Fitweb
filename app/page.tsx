import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import About from '@/components/About'
import Services from '@/components/Services'
import CalculatorsSection from '@/components/CalculatorsSection'
import HighProteinFood from '@/components/HighProteinFood'
import HighCalorieFood from '@/components/HighCalorieFood'
import HighCalciumFood from '@/components/HighCalciumFood'
import HighVitaminFood from '@/components/HighVitaminFood'
import BlogPreview from '@/components/BlogPreview'
import Features from '@/components/Features'
import DietPlanForm from '@/components/DietPlanForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'FitZone Gym - Transform Your Body, Transform Your Life | Home',
  description: 'Join FitZone Gym for the ultimate fitness experience. State-of-the-art equipment, expert trainers, nutrition guidance, fitness calculators, and blog articles. Start your fitness journey today!',
  keywords: 'gym, fitness, workout, exercise, personal training, nutrition, BMI calculator, protein calculator, calories calculator, fitness blog, health tips',
  openGraph: {
    title: 'FitZone Gym - Transform Your Body, Transform Your Life',
    description: 'Join FitZone Gym for the ultimate fitness experience. State-of-the-art equipment, expert trainers, and a supportive community.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FitZone Gym - Transform Your Body, Transform Your Life',
    description: 'Join FitZone Gym for the ultimate fitness experience.',
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Section 1: Hero - First Impression */}
      <Hero />
      
      {/* Section 2: Quick Navigation */}
      <Categories />
      
      {/* Section 3: Why Choose Us - Build Trust Early */}
      <Features />
      
      {/* Section 4: About Us - Build Credibility */}
      <About />
      
      {/* Section 5: Our Goals - What We Offer */}
      <Services />
      
      {/* Section 6: Nutrition Information - Food Sections */}
      <HighProteinFood showAsRow={true} />
      <HighCalorieFood showAsRow={true} />
      <HighCalciumFood showAsRow={true} />
      <HighVitaminFood showAsRow={true} />
      
      {/* Section 7: Fitness Calculators - Interactive Tools */}
      <CalculatorsSection />
      
      {/* Section 8: Educational Content */}
      <BlogPreview />
      
      {/* Section 10: Call to Action - Get Diet Plan */}
      <DietPlanForm />
      
      {/* Footer */}
      <Footer />  
    </main>
  )
}

