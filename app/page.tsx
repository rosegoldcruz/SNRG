"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 text-center">
        <div className="backdrop-blur-md bg-black/30 rounded-2xl p-10 border border-white/20 max-w-5xl mx-auto space-y-8">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/snrg-logo.png"
              alt="SNRG Labs Logo"
              width={120}
              height={120}
              className="rounded-full shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Strategic Network <span className="text-accent">Revenue Growth</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            AI + Automation · Arbitrage & High-Frequency Trading · Contracting & Manufacturing
          </p>
          <p className="text-lg text-accent italic font-medium">— It all starts in the Lab</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="/contact">Work With Us</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-white/50 text-white hover:bg-white/10"
              asChild
            >
              <a href="/about">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Divisions</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Four specialized divisions working together to create scalable growth systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <DivisionCard
              icon={<Image src="/images/aeon-icon.png" alt="AEON Icon" width={32} height={32} className="group-hover:opacity-80 transition-opacity" />}
              title="AEON"
              subtitle="The Advanced Efficient Optimized Network"
              description="AI operating system + automation brain powering intelligent decision-making across all divisions."
            />
            <DivisionCard
              icon={<Image src="/images/atom-icon.png" alt="ATOM Icon" width={32} height={32} className="group-hover:opacity-80 transition-opacity" />}
              title="ATOM"
              subtitle="Arbitrage Trustless On-chain Module"
              description="Advanced arbitrage + high-frequency trading engine leveraging market inefficiencies."
            />
            <DivisionCard
              icon={<Image src="/images/vulpine-icon.png" alt="Vulpine Icon" width={32} height={32} className="group-hover:opacity-80 transition-opacity" />}
              title="Vulpine"
              subtitle="Contracting + Lead Generation"
              description="Strategic contracting arm with advanced lead generation systems and client acquisition."
            />
            <DivisionCard
              icon={<Image src="/images/refacekit-icon.png" alt="RefaceKit Icon" width={32} height={32} className="group-hover:opacity-80 transition-opacity" />}
              title="RefaceKit"
              subtitle="Manufacturing + Cabinetry"
              description="Manufacturing division specializing in cabinetry refacing — our proven case study in scalable operations."
            />
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Trust SNRG Labs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CredibilityCard title="10+ Years Combined Experience" text="Deep expertise across AI, call center operations, and financial markets." />
            <CredibilityCard title="TCPA-Compliant Infrastructure" text="Fully compliant outbound communication systems with built-in regulatory safeguards." />
            <CredibilityCard title="Verified Twilio A2P Partner" text="Certified A2P/10DLC setup ensuring reliable, compliant messaging capabilities." />
            <CredibilityCard title="Multi-Division Execution" text="Proven track record across AI, arbitrage, contracting, and manufacturing sectors." />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect rounded-2xl p-10 md:p-16">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/snrg-logo.png"
                alt="SNRG Labs Logo"
                width={80}
                height={80}
                className="rounded-full shadow-lg"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start in the Lab?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Connect with SNRG Labs to explore how our integrated systems can accelerate your growth.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="/contact">Get Started</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

/* Helper Components */
function DivisionCard({ icon, title, subtitle, description }: { icon: React.ReactNode; title: string; subtitle: string; description: string }) {
  return (
    <Card className="glass-effect border-white/20 hover:border-accent/50 transition-all duration-300 group">
      <CardContent className="p-6 text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-primary/20 group-hover:bg-accent/20 transition-colors">{icon}</div>
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-white/70 font-medium">{subtitle}</p>
        <p className="text-white/80 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}

function CredibilityCard({ title, text }: { title: string; text: string }) {
  return (
    <Card className="glass-effect border-white/20">
      <CardContent className="p-6 flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">
          <CheckCircle className="h-6 w-6 text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-white/80 text-sm">{text}</p>
        </div>
      </CardContent>
    </Card>
  )
}
