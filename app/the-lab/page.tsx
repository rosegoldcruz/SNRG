import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Network, Cpu, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function TheLabPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image src="/images/snrg-logo.png" alt="SNRG Labs Logo" width={100} height={100} className="rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Why Choose SNRG Labs?</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-balance">
            Where Strategic Network Revenue Growth begins — in the Lab
          </p>
        </div>
      </section>

      {/* SNRG Explanation */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Strategic Network Revenue Growth</h2>
              <p className="text-lg text-white/80 max-w-4xl mx-auto">
                SNRG isn't just our name — it's our methodology. We create strategic networks that generate sustainable
                revenue growth through intelligent system integration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-effect border-accent/30">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-accent/20">
                      <Network className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">Strategic</h3>
                  <p className="text-white/80 text-sm">
                    Every decision is data-driven and aligned with long-term growth objectives.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-accent/30">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-accent/20">
                      <Cpu className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">Network</h3>
                  <p className="text-white/80 text-sm">
                    Interconnected systems that amplify results through intelligent coordination.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-accent/30">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-accent/20">
                      <TrendingUp className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">Revenue Growth</h3>
                  <p className="text-white/80 text-sm">
                    Sustainable, scalable revenue generation across multiple verticals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Philosophy */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">"It all starts in the Lab"</h2>
            <div className="space-y-6 text-lg text-white/80">
              <p>
                Every product and division is an experiment scaled into a growth engine. We operate at the intersection
                of AI, automation, arbitrage, contracting, manufacturing, and telecommunications.
              </p>
              <p>
                We are positioned as the lab and incubator for scalable business systems — not just a single product,
                but a living network that evolves, adapts, and grows.
              </p>
              <p className="text-accent font-medium italic">
                In the Lab, possibilities become realities, and realities become revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Points */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Proven Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-effect border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">10+ Years Combined Experience</h3>
                    <p className="text-white/80 text-sm">
                      Deep expertise across AI systems, call center operations, and financial markets.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">TCPA-Compliant Infrastructure</h3>
                    <p className="text-white/80 text-sm">
                      Fully compliant outbound communication systems with built-in regulatory safeguards.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Verified Twilio A2P Partner</h3>
                    <p className="text-white/80 text-sm">
                      Certified A2P/10DLC setup ensuring reliable, compliant messaging capabilities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Multi-Division Execution</h3>
                    <p className="text-white/80 text-sm">
                      Proven track record across AI, arbitrage, contracting, and manufacturing sectors.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <Image src="/images/snrg-logo.png" alt="SNRG Labs Logo" width={80} height={80} className="rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Enter the Lab?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Experience the power of Strategic Network Revenue Growth. Let's build something extraordinary together.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="/contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
