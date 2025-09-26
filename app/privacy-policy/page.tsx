import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image src="/images/snrg-logo.png" alt="SNRG Labs Logo" width={80} height={80} className="rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/80">Last updated: January 2025</p>
        </div>

        <Card className="glass-effect border-white/20">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-white/80">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                  <p className="mb-4">
                    SNRG Labs LLC ("we," "our," or "us") collects information you provide directly to us, such as when
                    you create an account, use our services, or contact us for support.
                  </p>
                  <p>
                    This may include your name, email address, phone number, company information, and any other
                    information you choose to provide.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and customer service requests</li>
                    <li>Communicate with you about products, services, and events</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                  <p className="mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your
                    consent, except as described in this policy.
                  </p>
                  <p>
                    We may share your information with trusted third parties who assist us in operating our website,
                    conducting our business, or serving our users.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized
                    access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Communications</h2>
                  <p className="mb-4">
                    By providing your contact information, you consent to receive communications from us via email, SMS,
                    or phone. You may opt out at any time by:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Replying STOP to SMS messages</li>
                    <li>Using unsubscribe links in emails</li>
                    <li>Contacting us directly at dcruz@snrglabs.com</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
                  <p className="mb-4">If you have questions about this Privacy Policy, please contact us:</p>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p>
                      <strong className="text-white">SNRG Labs LLC</strong>
                    </p>
                    <p>30 N Gould St Ste R</p>
                    <p>Sheridan, WY 82801</p>
                    <p>Email: dcruz@snrglabs.com</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </section>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
