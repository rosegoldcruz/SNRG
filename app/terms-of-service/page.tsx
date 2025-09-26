import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image src="/images/snrg-logo.png" alt="SNRG Labs Logo" width={80} height={80} className="rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/80">Last updated: January 2025</p>
        </div>

        <Card className="glass-effect border-white/20">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-white/80">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using the services provided by SNRG Labs LLC ("Company," "we," "our," or "us"), you
                    accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                  <p className="mb-4">SNRG Labs provides strategic network revenue growth services including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>AI and automation solutions (AEON)</li>
                    <li>Arbitrage and trading systems (ATOM)</li>
                    <li>Contracting and lead generation (Vulpine)</li>
                    <li>Manufacturing and cabinetry services (RefaceKit)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
                  <p className="mb-4">You agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Use our services in compliance with all applicable laws</li>
                    <li>Not engage in any activity that interferes with our services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                  <p>
                    All content, features, and functionality of our services are owned by SNRG Labs LLC and are
                    protected by copyright, trademark, and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                  <p>
                    SNRG Labs LLC shall not be liable for any indirect, incidental, special, consequential, or punitive
                    damages resulting from your use of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Communications and Consent</h2>
                  <p className="mb-4">By using our services, you consent to receive communications from us via:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Email notifications and updates</li>
                    <li>SMS messages (standard rates may apply)</li>
                    <li>Phone calls for service-related matters</li>
                  </ul>
                  <p className="mt-4">
                    You may opt out of communications at any time by replying STOP to SMS messages or contacting us
                    directly.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Compliance</h2>
                  <p>
                    Our services comply with applicable regulations including TCPA and A2P/10DLC requirements. We
                    maintain verified partnerships with telecommunications providers to ensure compliant messaging.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
                  <p>
                    These terms shall be governed by and construed in accordance with the laws of Wyoming, without
                    regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
                  <p className="mb-4">For questions about these Terms of Service, please contact us:</p>
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
                  <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                    posting. Your continued use of our services constitutes acceptance of the modified terms.
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
