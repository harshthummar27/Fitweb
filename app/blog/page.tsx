import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Fitness Blog - Health, Nutrition & Workout Tips | FitZone Gym',
  description: 'Read our fitness blog for expert tips on workouts, nutrition, health, and wellness. Get the latest fitness advice, workout routines, diet plans, and motivation to achieve your fitness goals.',
  keywords: 'fitness blog, workout tips, nutrition advice, health blog, fitness articles, exercise tips, diet plans, wellness blog',
  openGraph: {
    title: 'Fitness Blog - Health, Nutrition & Workout Tips',
    description: 'Read our fitness blog for expert tips on workouts, nutrition, health, and wellness.',
    type: 'website',
  },
  alternates: {
    canonical: '/blog',
  },
}

// Sample blog posts - In production, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    slug: '10-best-exercises-for-building-muscle',
    title: '10 Best Exercises for Building Muscle',
    excerpt: 'Discover the most effective exercises for building muscle mass and strength. Learn proper form and techniques for maximum results.',
    author: 'FitZone Team',
    date: '2024-01-15',
    category: 'Workouts',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    readTime: '5 min read',
  },
  {
    id: 2,
    slug: 'complete-guide-to-protein-intake',
    title: 'Complete Guide to Protein Intake for Athletes',
    excerpt: 'Everything you need to know about protein intake for muscle building, recovery, and optimal performance. Learn how much protein you really need.',
    author: 'FitZone Team',
    date: '2024-01-10',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    readTime: '7 min read',
  },
  {
    id: 3,
    slug: 'how-to-start-your-fitness-journey',
    title: 'How to Start Your Fitness Journey: A Beginner\'s Guide',
    excerpt: 'New to fitness? This comprehensive guide will help you start your fitness journey with confidence. Learn about goal setting, workout planning, and staying motivated.',
    author: 'FitZone Team',
    date: '2024-01-05',
    category: 'Tips',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    readTime: '6 min read',
  },
  {
    id: 4,
    slug: 'pre-and-post-workout-nutrition',
    title: 'Pre and Post Workout Nutrition: What to Eat and When',
    excerpt: 'Optimize your workouts with the right nutrition. Learn what to eat before and after your training sessions for better performance and recovery.',
    author: 'FitZone Team',
    date: '2023-12-28',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    readTime: '8 min read',
  },
  {
    id: 5,
    slug: 'cardio-vs-strength-training',
    title: 'Cardio vs Strength Training: Which is Better?',
    excerpt: 'Understand the differences between cardio and strength training, and learn how to balance both for optimal health and fitness results.',
    author: 'FitZone Team',
    date: '2023-12-20',
    category: 'Workouts',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
    readTime: '6 min read',
  },
  {
    id: 6,
    slug: 'staying-motivated-fitness-goals',
    title: 'Staying Motivated: Tips for Achieving Your Fitness Goals',
    excerpt: 'Learn proven strategies to stay motivated on your fitness journey. Overcome obstacles and maintain consistency for long-term success.',
    author: 'FitZone Team',
    date: '2023-12-15',
    category: 'Tips',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    readTime: '5 min read',
  },
]

const categories = ['All', 'Workouts', 'Nutrition', 'Tips']

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Fitness Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Expert tips, workout guides, nutrition advice, and everything you need to achieve your fitness goals
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8 md:mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-[#9fcc2e] hover:text-white transition duration-300 font-semibold shadow-md"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 md:h-56 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#9fcc2e] text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 hover:text-[#9fcc2e] transition">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-[#9fcc2e] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {post.author.charAt(0)}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">{post.author}</span>
                      </div>
                      <span className="text-[#9fcc2e] font-semibold text-sm hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-10 md:mt-12">
            <button className="bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

