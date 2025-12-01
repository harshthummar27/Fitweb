import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - FitZone Gym | Your Privacy Matters',
  description: 'Read FitZone Gym\'s privacy policy to understand how we collect, use, and protect your personal information. We are committed to protecting your privacy.',
  keywords: 'privacy policy, data protection, privacy, personal information, GDPR, user privacy',
  openGraph: {
    title: 'Privacy Policy - FitZone Gym',
    description: 'Read FitZone Gym\'s privacy policy to understand how we collect, use, and protect your personal information.',
    type: 'website',
  },
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm md:text-base text-gray-400 mt-4">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="prose prose-lg max-w-none privacy-content">
            
            <h2>1. Introduction</h2>
            <p>
              Welcome to FitZone Gym. We are committed to protecting your personal information and your right to privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
              website and use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide to Us</h3>
            <p>We may collect information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Register for an account or membership</li>
              <li>Use our fitness calculators</li>
              <li>Submit a diet plan request form</li>
              <li>Contact us through our contact form</li>
              <li>Subscribe to our newsletter or blog</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name and contact information (email, phone number, address)</li>
              <li>Age, weight, height, and health-related information</li>
              <li>Fitness goals and preferences</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information, including:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process your diet plan requests and provide personalized recommendations</li>
              <li>Calculate fitness metrics using our calculators</li>
              <li>Send you updates, newsletters, and promotional materials (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and email delivery.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
              <li><strong>With Your Consent:</strong> We may share information with your explicit consent.</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
              the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>6. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you 
              do not accept cookies, you may not be able to use some portions of our website.
            </p>

            <h2>7. Your Rights and Choices</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Data Portability:</strong> Request transfer of your information to another service</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
            </ul>
            <p>To exercise these rights, please contact us using the information provided in the Contact section below.</p>

            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information 
              from children under 13. If you are a parent or guardian and believe your child has provided us with personal 
              information, please contact us immediately.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content 
              of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2>10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and maintained on computers located outside of your state, province, 
              country, or other governmental jurisdiction where data protection laws may differ. By using our services, you 
              consent to the transfer of your information to these facilities.
            </p>

            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
              Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically 
              for any changes.
            </p>

            <h2>12. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> privacy@fitzonegym.com</li>
              <li><strong>Phone:</strong> (555) 123-4567</li>
              <li><strong>Address:</strong> 123 Fitness Street, Health City, HC 12345</li>
            </ul>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

