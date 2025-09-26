import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Building, Wrench, Shield, Lightbulb, TrendingUp, Users } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <div className="flex justify-center mb-8">
            <Image src="/images/snrg-logo.png" alt="SNRG Labs Logo" width={120} height={120} className="rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">About SNRG Labs</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Founded in 2025 in Sheridan, Wyoming — SNRG Labs LLC is the parent company architecting a new era of
            Strategic Network Revenue Growth. We don’t just adapt to industries — we rewire them.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 md:p-12 fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-white/80 mb-6">
                  To design and deploy scalable systems that connect AI, finance, manufacturing, contracting, telephony, media and logistics into
                  one unified growth engine. We don’t make side projects — we build infrastructures that last.
                </p>
                <p className="text-lg text-white/80">
                  Each division of SNRG Labs is both independent and interconnected, engineered to reinforce one another
                  and amplify results across every vertical we touch.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/snrg-logo.png"
                  alt="SNRG Labs Mission"
                  width={220}
                  height={220}
                  className="rounded-full opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard icon={<Shield className="h-8 w-8 text-accent" />} title="Compliance"
              text="Fully aligned with TCPA, A2P/10DLC, and regulatory frameworks — because trust is built on compliance." />
            <ValueCard icon={<Lightbulb className="h-8 w-8 text-accent" />} title="Innovation"
              text="From AI automation to call center infrastructure — we push boundaries and turn ideas into systems." />
            <ValueCard icon={<TrendingUp className="h-8 w-8 text-accent" />} title="Scalability"
              text="Every system we build is designed to scale — fast, reliable, and global from day one." />
            <ValueCard icon={<Users className="h-8 w-8 text-accent" />} title="Trust"
              text="Relationships that endure. Reliability that’s proven. Delivery that speaks louder than promises." />
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Divisions</h2>
          <div className="space-y-8">
            <DivisionCard
              icon={<Brain className="h-12 w-12 text-primary" />}
              title="AEON"
              subtitle="The Advanced Efficient Optimized Network"
              text="Our AI operating system — the brain behind everything. AEON orchestrates automation, insight, and execution across all divisions." />
            <DivisionCard
              icon={<Zap className="h-12 w-12 text-primary" />}
              title="ATOM"
              subtitle="Arbitrage Trustless On-chain Module"
              text="Our high-frequency trading and arbitrage engine. ATOM identifies inefficiencies across DeFi and TradFi — and executes with precision." />
            <DivisionCard
              icon={<Building className="h-12 w-12 text-primary" />}
              title="Vulpine"
              subtitle="Contracting + Lead Generation"
              text="Our contracting arm and sales engine. Vulpine builds pipelines, connects opportunities, and scales compliant acquisition systems." />
            <DivisionCard
              icon={<Wrench className="h-12 w-12 text-primary" />}
              title="RefaceKit"
              subtitle="Manufacturing + Cabinetry"
              text="Our proof-of-concept in physical industries. RefaceKit shows how systematic innovation transforms traditional manufacturing." />
          </div>
        </div>
      </section>
    </div>
  )
}

/* === Helper Components === */
function ValueCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <Card className="glass-effect border-white/20 hover:border-accent/50 transition-all duration-300">
      <CardContent className="p-6 text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-accent/20">{icon}</div>
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-white/80 text-sm">{text}</p>
      </CardContent>
    </Card>
  )
}

function DivisionCard({
  icon,
  title,
  subtitle,
  text,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  text: string
}) {
  return (
    <Card className="glass-effect border-white/20 hover:border-accent/50 transition-all duration-300">
      <CardContent className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="p-4 rounded-full bg-primary/20">{icon}</div>
          </div>
          <div className="lg:col-span-3 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
            <p className="text-accent font-medium mb-3">{subtitle}</p>
            <p className="text-white/80">{text}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
