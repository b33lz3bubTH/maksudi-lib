import Link from "next/link"
import { ScrollReveal } from "@/components/ui"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Last Updated: April 26, 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to EchoWare's Privacy Policy. This Privacy Policy explains how EchoWare ("we," "us," or "our")
              collects, uses, discloses, and safeguards your information when you use our WhatsApp ecommerce services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you create an account, place an
              order, contact customer support, or otherwise communicate with us. This may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Contact information (name, email address, phone number, shipping address)</li>
              <li>Payment information (processed through secure third-party payment processors)</li>
              <li>Order history and preferences</li>
              <li>Communications with our customer service team</li>
              <li>WhatsApp interaction data</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and provide customer support</li>
              <li>Improve our services and develop new features</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Detect and prevent fraud and abuse</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement military-grade encryption and maintain administrative, technical, and physical safeguards
              designed to protect your information. However, no security system is impenetrable, and we cannot guarantee
              the security of our systems 100%.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Sharing</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Service providers who perform services on our behalf</li>
              <li>Merchants using our platform to fulfill your orders</li>
              <li>Third parties as required by law</li>
              <li>Third parties in connection with a business transaction</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your information</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>
              Email: privacy@echoware.co.in
              <br />
              Address: EchoWare Headquarters, Tech Park, Bangalore, India
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="/about-us" className="text-purple-600 hover:text-purple-800 font-medium">
              ← Back to About Us
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
