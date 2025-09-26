import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Building, Wrench, Shield, Lightbulb, TrendingUp, Users } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image src="/images/snrg-logo.png" alt="SNRG Labs Logo" width={100} height={100} className="rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">About SNRG Labs</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-balance">
            Founded in 2025 and based in Sheridan, Wyoming, SNRG Labs LLC is the parent company driving innovation
            across AI, finance, contracting, and manufacturing.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-white/80 mb-6">
                  Build scalable systems that connect AI, finance, contracting, and manufacturing into one unified
                  growth engine. We don't just create products — we architect entire ecosystems of interconnected
                  solutions.
                </p>
                <p className="text-lg text-white/80">
                  Every division operates as both an independent entity and an integral part of our larger network,
                  creating synergies that amplify results across all sectors.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/snrg-logo.png"
                  alt="SNRG Labs Mission"
                  width={200}
                  height={200}
                  className="rounded-full opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-effect border-white/20 hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">Compliance</h3>
                <p className="text-white/80 text-sm">
                  Operating with the highest standards of regulatory compliance and ethical business practices.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Lightbulb className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">Innovation</h3>
                <p className="text-white/80 text-sm">
                  Pushing boundaries through cutting-edge technology and creative problem-solving approaches.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-accent/20">
                    <TrendingUp className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">Scalability</h3>
                <p className="text-white/80 text-sm">
                  Building systems designed to grow exponentially while maintaining efficiency and quality.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">Trust</h3>
                <p className="text-white/80 text-sm">
                  Building lasting relationships through transparency, reliability, and consistent delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Divisions</h2>
          <div className="space-y-8">
            {/* AEON */}
            <Card className="glass-effect border-white/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="flex justify-center lg:justify-start">
                    <div className="p-4 rounded-full bg-primary/20">
                      <Brain className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <div className="lg:col-span-3 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">AEON</h3>
                    <p className="text-accent font-medium mb-3">The Advanced Efficient Optimized Network</p>
                    <p className="text-white/80">
                      Our AI operating system and automation brain that powers intelligent decision-making across all
                      divisions. AEON processes data, identifies opportunities, and orchestrates actions across our
                      entire network of systems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ATOM */}
            <Card className="glass-effect border-white/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="flex justify-center lg:justify-start">
                    <div className="p-4 rounded-full bg-primary/20">
                      <Zap className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <div className="lg:col-span-3 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">ATOM</h3>
                    <p className="text-accent font-medium mb-3">Arbitrage Trustless On-chain Module</p>
                    <p className="text-white/80">
                      Advanced arbitrage and high-frequency trading engine that leverages market inefficiencies across
                      traditional and decentralized finance. ATOM executes sophisticated trading strategies with
                      precision and speed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vulpine */}
            <Card className="glass-effect border-white/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="flex justify-center lg:justify-start">
                    <div className="p-4 rounded-full bg-primary/20">
                      <Building className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <div className="lg:col-span-3 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">Vulpine</h3>
                    <p className="text-accent font-medium mb-3">Contracting + Lead Generation</p>
                    <p className="text-white/80">
                      Strategic contracting arm with advanced lead generation systems and client acquisition
                      capabilities. Vulpine connects businesses with opportunities while maintaining the highest
                      standards of compliance and service delivery.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* RefaceKit */}
            <Card className="glass-effect border-white/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="flex justify-center lg:justify-start">
                    <div className="p-4 rounded-full bg-primary/20">
                      <Wrench className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <div className="lg:col-span-3 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">RefaceKit</h3>
                    <p className="text-accent font-medium mb-3">Manufacturing + Cabinetry</p>
                    <p className="text-white/80">
                      Manufacturing division specializing in cabinetry refacing — our proven case study in scalable
                      operations. RefaceKit demonstrates how our systematic approach transforms traditional industries
                      through innovation and efficiency.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
