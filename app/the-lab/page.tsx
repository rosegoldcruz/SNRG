"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Network, Cpu, TrendingUp, FlaskConical } from "lucide-react"
import Image from "next/image"

export default function TheLabPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-5xl mx-auto text-center fade-in">
          <div className="flex justify-center mb-10">
            <Image
              src="/images/snrg-logo.png"
              alt="SNRG Labs Logo"
              width={120}
              height={120}
              className="rounded-full shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6">
            Why Choose <span className="text-accent">SNRG Labs?</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto italic">
            Where Strategic Network Revenue Growth begins — <span className="text-accent">in the Lab</span>.
          </p>
        </div>
      </section>

      {/* Core Methodology */}
      <section className="px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-6xl mx-auto glass-effect rounded-2xl p-10 md:p-16">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-6">
              Strategic Network Revenue Growth
            </h2>
            <p className="text-lg text-white/80 max-w-4xl mx-auto">
              <span className="text-accent font-semibold">SNRG</span> isn’t just our name — it’s our framework.
              We design interconnected systems that generate sustainable growth across industries, 
              transforming experiments into scalable business engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <InfoCard
              icon={<Network className="h-8 w-8 text-accent" />}
              title="Strategic"
              text="Every decision is data-driven, intentional, and aligned with long-term growth."
            />
            <InfoCard
              icon={<Cpu className="h-8 w-8 text-accent" />}
              title="Network"
              text="Integrated systems that amplify results through coordination and intelligence."
            />
            <InfoCard
              icon={<TrendingUp className="h-8 w-8 text-accent" />}
              title="Revenue Growth"
              text="Sustainable, scalable revenue streams built for expansion across verticals."
            />
          </div>
        </div>
      </section>

      {/* Lab Philosophy */}
      <section className="px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-5xl mx-auto glass-effect rounded-2xl p-10 md:p-16 text-center space-y-8">
          <FlaskConical className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-6">“It all starts in the Lab.”</h2>
          <div className="space-y-6 text-lg text-white/80">
            <p>
              Every division begins as an experiment, refined and scaled until it becomes a growth engine.
              From AI and automation to arbitrage, contracting, and manufacturing — our Lab is where
              industries converge.
            </p>
            <p>
              We’re not just building products. We’re architecting a <span className="text-accent font-semibold">
              living network</span> that adapts, evolves, and scales without limits.
            </p>
            <p className="text-accent font-medium italic">
              In the Lab, possibilities become realities. Realities become revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-14">Proven Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <CredibilityCard
              title="33+ Years Combined Experience"
              text="Expertise spanning AI systems, call center operations, and financial markets."
            />
            <CredibilityCard
              title="TCPA-Compliant Infrastructure"
              text="Fully compliant communication stack with regulatory safeguards baked in."
            />
            <CredibilityCard
              title="Verified Twilio A2P Partner"
              text="Certified A2P/10DLC setup ensuring compliance and reliable delivery."
            />
            <CredibilityCard
              title="Multi-Division Execution"
              text="Proven results across AI, arbitrage, contracting, and manufacturing."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center glass-effect rounded-2xl p-10 md:p-16">
          <Image
            src="/images/snrg-logo.png"
            alt="SNRG Labs Logo"
            width={90}
            height={90}
            className="rounded-full mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Enter the Lab?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join us at the intersection of innovation and compliance.  
            Let’s engineer the next breakthrough — together.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold shadow-lg"
            asChild
          >
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </section>
    </div>
  )
}

/* === Helper Components === */
function InfoCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <Card className="glass-effect border-accent/30 hover:border-accent/60 transition-colors duration-300 hover-lift">
      <CardContent className="p-8 text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-accent/20">{icon}</div>
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-white/80 text-sm">{text}</p>
      </CardContent>
    </Card>
  )
}

function CredibilityCard({ title, text }: { title: string; text: string }) {
  return (
    <Card className="glass-effect border-white/20 hover:border-accent/30 transition-colors duration-300 hover-lift">
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
