import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://fitzone-gym.com'),
  title: {
    default: 'FitZone Gym - Transform Your Body, Transform Your Life',
    template: '%s | FitZone Gym',
  },
  description: 'Join FitZone Gym for the ultimate fitness experience. State-of-the-art equipment, expert trainers, nutrition guidance, fitness calculators, and a supportive community. Start your fitness journey today!',
  keywords: ['gym', 'fitness', 'workout', 'exercise', 'personal training', 'nutrition', 'BMI calculator', 'protein calculator', 'calories calculator', 'fitness tools', 'health', 'wellness'],
  authors: [{ name: 'FitZone Gym' }],
  creator: 'FitZone Gym',
  publisher: 'FitZone Gym',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fitzone-gym.com',
    siteName: 'FitZone Gym',
    title: 'FitZone Gym - Transform Your Body, Transform Your Life',
    description: 'Join FitZone Gym for the ultimate fitness experience. State-of-the-art equipment, expert trainers, and a supportive community.',
    images: [
      {
        url: '/og-image.jpg', // Add your OG image
        width: 1200,
        height: 630,
        alt: 'FitZone Gym',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FitZone Gym - Transform Your Body, Transform Your Life',
    description: 'Join FitZone Gym for the ultimate fitness experience.',
    images: ['/og-image.jpg'], // Add your Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

