import Link from 'next/link'
import Image from 'next/image'

export default function BlogPreview() {
  const featuredPosts = [
    {
      id: 1,
      slug: '10-best-exercises-for-building-muscle',
      title: '10 Best Exercises for Building Muscle',
      excerpt: 'Discover the most effective exercises for building muscle mass and strength.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
      date: '2024-01-15',
      category: 'Workouts',
      readTime: '5 min read',
    },
    {
      id: 2,
      slug: 'complete-guide-to-protein-intake',
      title: 'Complete Guide to Protein Intake for Athletes',
      excerpt: 'Everything you need to know about protein intake for muscle building and recovery.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80',
      date: '2024-01-10',
      category: 'Nutrition',
      readTime: '7 min read',
    },
    {
      id: 3,
      slug: 'how-to-start-your-fitness-journey',
      title: 'How to Start Your Fitness Journey',
      excerpt: 'A comprehensive beginner\'s guide to starting your fitness journey with confidence.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
      date: '2024-01-05',
      category: 'Tips',
      readTime: '6 min read',
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Latest from Our Blog
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Expert tips, workout guides, and nutrition advice to help you achieve your fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {featuredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative h-48 md:h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
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
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#9fcc2e] transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}

