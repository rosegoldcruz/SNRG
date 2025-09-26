"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Building, Wrench } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/snrg-logo.png"
                alt="SNRG Labs Logo"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance">
              Strategic Network Revenue Growth
            </h1>

            <p className="text-xl md:text-2xl text-white/90 text-balance">
              AI + Automation · Arbitrage & High-Frequency Trading · Contracting & Manufacturing
            </p>

            <div className="text-lg md:text-xl text-accent font-medium italic">— It all starts in the Lab</div>
          </div>

          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold"
            onClick={scrollToContact}
          >
            Work With Us
          </Button>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Divisions</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Four specialized divisions working together to create scalable growth systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AEON */}
            <Card className="glass-effect border-white/20 hover:border-accent/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-primary/20 group-hover:bg-accent/20 transition-colors">
                    <Brain className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">AEON</h3>
                <p className="text-sm text-white/70 font-medium">The Advanced Efficient Optimized Network</p>
                <p className="text-white/80 text-sm">
                  AI operating system + automation brain powering intelligent decision-making across all divisions.
                </p>
              </CardContent>
            </Card>

            {/* ATOM */}
            <Card className="glass-effect border-white/20 hover:border-accent/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-primary/20 group-hover:bg-accent/20 transition-colors">
                    <Zap className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">ATOM</h3>
                <p className="text-sm text-white/70 font-medium">Arbitrage Trustless On-chain Module</p>
                <p className="text-white/80 text-sm">
                  Advanced arbitrage + high-frequency trading engine leveraging market inefficiencies.
                </p>
              </CardContent>
            </Card>

            {/* Vulpine */}
            <Card className="glass-effect border-white/20 hover:border-accent/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-primary/20 group-hover:bg-accent/20 transition-colors">
                    <Building className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">Vulpine</h3>
                <p className="text-sm text-white/70 font-medium">Contracting + Lead Generation</p>
                <p className="text-white/80 text-sm">
                  Strategic contracting arm with advanced lead generation systems and client acquisition.
                </p>
              </CardContent>
            </Card>

            {/* RefaceKit */}
            <Card className="glass-effect border-white/20 hover:border-accent/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-primary/20 group-hover:bg-accent/20 transition-colors">
                    <Wrench className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">RefaceKit</h3>
                <p className="text-sm text-white/70 font-medium">Manufacturing + Cabinetry</p>
                <p className="text-white/80 text-sm">
                  Manufacturing division specializing in cabinetry refacing - our proven case study in scalable
                  operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <Image src="/images/snrg-logo.png" alt="SNRG Labs Logo" width={80} height={80} className="rounded-full" />
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
