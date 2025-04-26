import Link from "next/link"
import { ScrollReveal } from "@/components/ui"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Last Updated: April 26, 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using EchoWare's WhatsApp ecommerce services, you agree to be bound by these Terms of
              Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Services</h2>
            <p>
              EchoWare provides a WhatsApp-based ecommerce platform that allows businesses to sell products and services
              directly to customers through WhatsApp. Our services include product listing, order management, customer
              communication, and payment processing.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
            <p>
              To use certain features of our services, you may need to create an account. You are responsible for
              maintaining the confidentiality of your account credentials and for all activities that occur under your
              account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use our services for any illegal purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Interfere with or disrupt our services</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services to send spam or unsolicited messages</li>
              <li>Sell prohibited or restricted items</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services, including but not limited to text, graphics,
              logos, icons, images, audio clips, and software, are owned by EchoWare and are protected by copyright,
              trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Payments and Fees</h2>
            <p>
              We charge fees for certain aspects of our services. All fees are non-refundable unless otherwise
              specified. We reserve the right to change our fees at any time with notice to you.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, EchoWare shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly
              or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless EchoWare and its officers, directors, employees, agents,
              and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees
              arising from your use of our services or violation of these Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your account and access to our services at any time, without
              notice, for any reason, including if we believe you have violated these Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on
              this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its
              conflict of law provisions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              Email: legal@echoware.co.in
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
