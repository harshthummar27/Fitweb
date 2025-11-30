import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Sample blog posts data - In production, this would come from a CMS or database
const blogPosts: Record<string, {
  id: number
  slug: string
  title: string
  content: string
  excerpt: string
  author: string
  date: string
  category: string
  image: string
  readTime: string
}> = {
  '10-best-exercises-for-building-muscle': {
    id: 1,
    slug: '10-best-exercises-for-building-muscle',
    title: '10 Best Exercises for Building Muscle',
    excerpt: 'Discover the most effective exercises for building muscle mass and strength.',
    content: `
      <p>Building muscle requires a combination of proper training, nutrition, and recovery. In this comprehensive guide, we'll explore the 10 best exercises that should be in every muscle-building routine.</p>
      
      <h2>1. Squats</h2>
      <p>The squat is often called the "king of exercises" for good reason. It targets your quadriceps, hamstrings, glutes, and core all at once. This compound movement builds functional strength and muscle mass throughout your lower body.</p>
      
      <h2>2. Deadlifts</h2>
      <p>Deadlifts are essential for building a strong back, glutes, and hamstrings. This exercise also engages your core and improves overall strength. It's one of the most effective exercises for building total-body muscle mass.</p>
      
      <h2>3. Bench Press</h2>
      <p>The bench press is the gold standard for building chest, shoulder, and tricep strength. It's a compound movement that allows you to lift heavy weights, which is crucial for muscle growth.</p>
      
      <h2>4. Pull-Ups</h2>
      <p>Pull-ups are excellent for building a wide, strong back. They target your lats, rhomboids, and biceps. If you can't do pull-ups yet, start with assisted variations or lat pulldowns.</p>
      
      <h2>5. Overhead Press</h2>
      <p>This exercise builds strong shoulders and triceps while also engaging your core. The overhead press is essential for developing upper body strength and muscle mass.</p>
      
      <h2>6. Barbell Rows</h2>
      <p>Barbell rows are crucial for building a thick, strong back. They target your lats, rhomboids, and rear delts, creating that V-taper physique.</p>
      
      <h2>7. Dips</h2>
      <p>Dips are excellent for building chest, shoulder, and tricep strength. They're a bodyweight exercise that can be made more challenging with added weight.</p>
      
      <h2>8. Leg Press</h2>
      <p>While not a replacement for squats, leg presses allow you to safely load heavy weight on your legs, which is great for building quadriceps and glute strength.</p>
      
      <h2>9. Barbell Curls</h2>
      <p>For direct bicep work, barbell curls are hard to beat. They allow you to progressively overload your biceps, which is key for muscle growth.</p>
      
      <h2>10. Calf Raises</h2>
      <p>Don't neglect your calves! Calf raises are essential for building strong, defined calves. You can do these with bodyweight, dumbbells, or on a calf raise machine.</p>
      
      <h2>Conclusion</h2>
      <p>These 10 exercises form the foundation of any effective muscle-building program. Focus on proper form, progressive overload, and consistency. Remember, building muscle takes time, so be patient and stay committed to your training.</p>
    `,
    author: 'FitZone Team',
    date: '2024-01-15',
    category: 'Workouts',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
    readTime: '5 min read',
  },
  'complete-guide-to-protein-intake': {
    id: 2,
    slug: 'complete-guide-to-protein-intake',
    title: 'Complete Guide to Protein Intake for Athletes',
    excerpt: 'Everything you need to know about protein intake for muscle building, recovery, and optimal performance.',
    content: `
      <p>Protein is the building block of muscle tissue, making it essential for anyone looking to build muscle, recover from workouts, or improve athletic performance.</p>
      
      <h2>How Much Protein Do You Need?</h2>
      <p>For active individuals and athletes, the general recommendation is 1.6-2.2 grams of protein per kilogram of body weight. This ensures adequate protein for muscle repair and growth.</p>
      
      <h2>When to Consume Protein</h2>
      <p>While total daily protein intake is most important, timing can also matter:</p>
      <ul>
        <li><strong>Pre-workout:</strong> 20-30g of protein 1-2 hours before training</li>
        <li><strong>Post-workout:</strong> 20-40g of protein within 2 hours after training</li>
        <li><strong>Throughout the day:</strong> Distribute protein evenly across meals</li>
      </ul>
      
      <h2>Best Protein Sources</h2>
      <p>High-quality protein sources include:</p>
      <ul>
        <li>Lean meats (chicken, turkey, beef)</li>
        <li>Fish and seafood</li>
        <li>Eggs</li>
        <li>Dairy products (Greek yogurt, cottage cheese)</li>
        <li>Plant-based options (tofu, tempeh, legumes)</li>
      </ul>
      
      <h2>Protein Supplements</h2>
      <p>While whole foods should be your primary protein source, supplements like whey protein can be convenient for meeting your daily needs, especially post-workout.</p>
      
      <h2>Conclusion</h2>
      <p>Proper protein intake is crucial for muscle growth and recovery. Calculate your needs based on your body weight and activity level, and prioritize high-quality protein sources throughout the day.</p>
    `,
    author: 'FitZone Team',
    date: '2024-01-10',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80',
    readTime: '7 min read',
  },
  'how-to-start-your-fitness-journey': {
    id: 3,
    slug: 'how-to-start-your-fitness-journey',
    title: 'How to Start Your Fitness Journey: A Beginner\'s Guide',
    excerpt: 'New to fitness? This comprehensive guide will help you start your fitness journey with confidence.',
    content: `
      <p>Starting a fitness journey can be overwhelming, but with the right approach, anyone can build a sustainable fitness routine. Here's your complete beginner's guide.</p>
      
      <h2>1. Set Clear, Realistic Goals</h2>
      <p>Before you start, define what you want to achieve. Make your goals specific, measurable, and time-bound. Instead of "get fit," try "lose 10 pounds in 3 months" or "run a 5K in 8 weeks."</p>
      
      <h2>2. Start Small</h2>
      <p>Don't try to do everything at once. Start with 2-3 workouts per week and gradually increase frequency and intensity. This helps prevent burnout and injury.</p>
      
      <h2>3. Find Activities You Enjoy</h2>
      <p>You're more likely to stick with exercise if you enjoy it. Try different activities - running, cycling, weightlifting, yoga, dancing - until you find what you love.</p>
      
      <h2>4. Create a Schedule</h2>
      <p>Treat your workouts like important appointments. Schedule them in your calendar and stick to them. Consistency is more important than intensity when starting out.</p>
      
      <h2>5. Focus on Form</h2>
      <p>Proper form prevents injuries and ensures you're getting the most out of each exercise. Consider working with a trainer or watching instructional videos.</p>
      
      <h2>6. Track Your Progress</h2>
      <p>Keep a workout journal or use a fitness app to track your progress. This helps you stay motivated and see how far you've come.</p>
      
      <h2>7. Be Patient</h2>
      <p>Results take time. Don't get discouraged if you don't see immediate changes. Stay consistent, and the results will come.</p>
      
      <h2>Conclusion</h2>
      <p>Starting a fitness journey is about making small, sustainable changes. Focus on consistency, enjoy the process, and celebrate your progress along the way.</p>
    `,
    author: 'FitZone Team',
    date: '2024-01-05',
    category: 'Tips',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
    readTime: '6 min read',
  },
  'pre-and-post-workout-nutrition': {
    id: 4,
    slug: 'pre-and-post-workout-nutrition',
    title: 'Pre and Post Workout Nutrition: What to Eat and When',
    excerpt: 'Optimize your workouts with the right nutrition. Learn what to eat before and after your training sessions.',
    content: `
      <p>Proper nutrition around your workouts can significantly impact your performance, recovery, and results. Here's what you need to know.</p>
      
      <h2>Pre-Workout Nutrition</h2>
      <p>Eating before a workout provides energy and prevents fatigue. Aim to eat 1-3 hours before training.</p>
      
      <h3>What to Eat:</h3>
      <ul>
        <li><strong>Carbohydrates:</strong> Provide quick energy (banana, oatmeal, rice)</li>
        <li><strong>Protein:</strong> Support muscle during training (Greek yogurt, protein shake)</li>
        <li><strong>Hydration:</strong> Drink water throughout the day</li>
      </ul>
      
      <h2>Post-Workout Nutrition</h2>
      <p>Post-workout nutrition is crucial for recovery and muscle growth. Eat within 2 hours after training.</p>
      
      <h3>What to Eat:</h3>
      <ul>
        <li><strong>Protein:</strong> 20-40g for muscle repair (chicken, fish, protein shake)</li>
        <li><strong>Carbohydrates:</strong> Replenish glycogen stores (sweet potato, rice, fruits)</li>
        <li><strong>Hydration:</strong> Replace fluids lost through sweat</li>
      </ul>
      
      <h2>Sample Meal Ideas</h2>
      <p><strong>Pre-workout:</strong> Banana with almond butter, or oatmeal with berries</p>
      <p><strong>Post-workout:</strong> Grilled chicken with sweet potato, or protein shake with fruit</p>
      
      <h2>Conclusion</h2>
      <p>Timing your nutrition around workouts can enhance performance and recovery. Experiment to find what works best for your body and training schedule.</p>
    `,
    author: 'FitZone Team',
    date: '2023-12-28',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80',
    readTime: '8 min read',
  },
  'cardio-vs-strength-training': {
    id: 5,
    slug: 'cardio-vs-strength-training',
    title: 'Cardio vs Strength Training: Which is Better?',
    excerpt: 'Understand the differences between cardio and strength training, and learn how to balance both.',
    content: `
      <p>The debate between cardio and strength training is ongoing, but the truth is, both have unique benefits. Here's how to balance them.</p>
      
      <h2>Benefits of Cardio</h2>
      <ul>
        <li>Improves cardiovascular health</li>
        <li>Burns calories and aids weight loss</li>
        <li>Increases endurance</li>
        <li>Reduces stress</li>
        <li>Improves sleep quality</li>
      </ul>
      
      <h2>Benefits of Strength Training</h2>
      <ul>
        <li>Builds muscle mass and strength</li>
        <li>Increases metabolism</li>
        <li>Strengthens bones</li>
        <li>Improves functional movement</li>
        <li>Enhances body composition</li>
      </ul>
      
      <h2>Finding the Balance</h2>
      <p>For optimal health and fitness, combine both:</p>
      <ul>
        <li><strong>For general fitness:</strong> 3-4 strength sessions + 2-3 cardio sessions per week</li>
        <li><strong>For weight loss:</strong> 3 strength sessions + 3-4 cardio sessions per week</li>
        <li><strong>For muscle building:</strong> 4-5 strength sessions + 1-2 cardio sessions per week</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Both cardio and strength training are important. The best approach is to include both in your routine based on your goals and preferences.</p>
    `,
    author: 'FitZone Team',
    date: '2023-12-20',
    category: 'Workouts',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&q=80',
    readTime: '6 min read',
  },
  'staying-motivated-fitness-goals': {
    id: 6,
    slug: 'staying-motivated-fitness-goals',
    title: 'Staying Motivated: Tips for Achieving Your Fitness Goals',
    excerpt: 'Learn proven strategies to stay motivated on your fitness journey.',
    content: `
      <p>Motivation is the fuel that keeps you going on your fitness journey. Here are proven strategies to maintain motivation long-term.</p>
      
      <h2>1. Set Process Goals, Not Just Outcome Goals</h2>
      <p>While outcome goals (like "lose 20 pounds") are important, process goals (like "work out 4 times per week") are what keep you motivated daily.</p>
      
      <h2>2. Track Your Progress</h2>
      <p>Keep a journal of your workouts, measurements, and how you feel. Seeing progress, even small improvements, keeps motivation high.</p>
      
      <h2>3. Find a Workout Buddy</h2>
      <p>Having someone to exercise with increases accountability and makes workouts more enjoyable. You're less likely to skip when someone is counting on you.</p>
      
      <h2>4. Celebrate Small Wins</h2>
      <p>Don't wait for major milestones. Celebrate every small achievement - completing a workout, lifting a new PR, or sticking to your plan for a week.</p>
      
      <h2>5. Mix It Up</h2>
      <p>Boredom kills motivation. Try new exercises, classes, or workout styles to keep things fresh and exciting.</p>
      
      <h2>6. Remember Your "Why"</h2>
      <p>When motivation wanes, remind yourself why you started. Write down your reasons and revisit them regularly.</p>
      
      <h2>7. Be Kind to Yourself</h2>
      <p>Everyone has off days. Don't let one missed workout derail your entire journey. Get back on track the next day.</p>
      
      <h2>Conclusion</h2>
      <p>Motivation comes and goes, but discipline and good habits keep you going. Focus on building sustainable habits, and motivation will follow.</p>
    `,
    author: 'FitZone Team',
    date: '2023-12-15',
    category: 'Tips',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
    readTime: '5 min read',
  },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug]

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: ['fitness', 'workout', 'nutrition', 'health', post.category.toLowerCase()],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Article Header */}
      <article className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-[#9fcc2e] hover:text-[#295135] mb-6 transition"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="px-4 py-2 bg-[#9fcc2e] text-white text-sm font-semibold rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#9fcc2e] rounded-full flex items-center justify-center text-white font-semibold mr-3">
                {post.author.charAt(0)}
              </div>
              <span>{post.author}</span>
            </div>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>

          {/* Article Content */}
          <div 
            className="max-w-none mb-12 blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="border-t border-b py-6 my-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span className="font-semibold text-gray-900">Share this article:</span>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Facebook
                </button>
                <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition">
                  Twitter
                </button>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.values(blogPosts)
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="block bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
                  >
                    <div className="relative h-40 w-full">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 hover:text-[#9fcc2e] transition">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

