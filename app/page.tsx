import type { Metadata } from 'next'

// Layout Components
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Home Page Sections (in order)
import Hero from '@/components/home/Hero'
import Categories from '@/components/home/Categories'
import Foods from '@/components/home/Foods'
import Fruits from '@/components/home/Fruits'
import Vegetables from '@/components/home/Vegetables'
import Features from '@/components/home/Features'
import Services from '@/components/home/Services'

// Nutrition Components
import HighProteinFood from '@/components/nutrition/HighProteinFood'
import HighCalorieFood from '@/components/nutrition/HighCalorieFood'
import HighCalciumFood from '@/components/nutrition/HighCalciumFood'

// Calculators Section
import CalculatorsSection from '@/components/calculators/CalculatorsSection'

// Additional Home Sections
import BlogPreview from '@/components/home/BlogPreview'
import DietPlanForm from '@/components/home/DietPlanForm'

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
      {/* ============================================
          STEP 1: NAVIGATION BAR
          ============================================ */}
      <Navbar />
      
      {/* ============================================
          STEP 2: HERO SECTION - First Impression
          Main banner with call-to-action
          ============================================ */}
      <Hero />
      
      {/* ============================================
          STEP 3: QUICK NAVIGATION - Categories
          Quick access to different categories
          ============================================ */}
      <Categories />
      
      {/* ============================================
          STEP 3.5: FOODS SECTION
          Display various food items with nutritional info
          ============================================ */}
      <Foods />
      
      {/* ============================================
          STEP 3.6: FRUITS SECTION
          Display various fruits with nutritional info
          ============================================ */}
      <Fruits />
      
      {/* ============================================
          STEP 3.7: VEGETABLES SECTION
          Display various vegetables with nutritional info
          ============================================ */}
      <Vegetables />
      
      {/* ============================================
          STEP 4: HIGH PROTEIN FOOD
          High protein food items
          ============================================ */}
      <HighProteinFood showAsRow={true} />
      
      {/* ============================================
          STEP 5: HIGH CALORIE FOOD
          High calorie food items
          ============================================ */}
      <HighCalorieFood showAsRow={true} />
      
      {/* ============================================
          STEP 6: HIGH CALCIUM FOOD
          High calcium food items
          ============================================ */}
      <HighCalciumFood showAsRow={true} />
      
      {/* ============================================
          STEP 7: FITNESS CALCULATORS
          Interactive tools for fitness tracking
          ============================================ */}
      <CalculatorsSection />
      
      {/* ============================================
          STEP 8: LATEST FROM OUR BLOG
          Blog preview and latest articles
          ============================================ */}
      <BlogPreview />
      
      {/* ============================================
          STEP 9: OUR GOALS - What We Offer
          Services and diet plan goals
          ============================================ */}
      <Services />
      
      {/* ============================================
          STEP 10: WHY CHOOSE FITZONE - Build Trust
          Key features and benefits
          ============================================ */}
      <Features />
      
      {/* ============================================
          STEP 11: GET YOUR DIET PLAN FORM
          Diet plan form - Lead generation
          ============================================ */}
      <DietPlanForm />
      
      {/* ============================================
          STEP 11: FOOTER
          Site links and information
          ============================================ */}
      <Footer />  
    </main>
  )
}
