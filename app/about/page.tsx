import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lightbulb, TrendingUp, Users } from "lucide-react"
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
            Founded in 2025 in Sheridan, Wyoming — SNRG Labs LLC is a B2B SaaS platform providing enterprise telephony and AI automation solutions.
            We empower contractors, manufacturers, and service providers with compliant communication systems.
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
                  To provide enterprise-grade telephony, CRM, and AI automation solutions that enable businesses to scale their communication systems
                  while maintaining full TCPA compliance. We build the infrastructure that powers growth.
                </p>
                <p className="text-lg text-white/80">
                  Our platform modules work together to deliver appointment confirmations, customer notifications, and lead alerts
                  for enterprise clients across multiple industries.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/snrg-logo.png"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Platform Modules</h2>
          <div className="space-y-8">
            <DivisionCard
              icon={<Image src="/images/aeon-icon.png" alt="AEON Icon" width={48} height={48} />}
              title="AEON"
              subtitle="The Advanced Efficient Optimized Network"
              text="Our enterprise AI automation platform — the brain behind client communication workflows. AEON orchestrates intelligent messaging and automation for our SaaS clients." />
            <DivisionCard
              icon={<Image src="/images/atom-icon.png" alt="ATOM Icon" width={48} height={48} />}
              title="ATOM"
              subtitle="Analytics & Optimization Module (Internal Case Study)"
              text="Our internal case study for financial sector implementations. ATOM demonstrates our platform's capabilities in data analytics and optimization for enterprise clients." />
            <DivisionCard
              icon={<Image src="/images/vulpine-icon.png" alt="Vulpine Icon" width={48} height={48} />}
              title="Vulpine"
              subtitle="Contracting + Lead Generation"
              text="Our lead generation and customer communication platform. Vulpine provides contracting and service businesses with compliant messaging systems for client acquisition." />
            <DivisionCard
              icon={<Image src="/images/refacekit-icon.png" alt="RefaceKit Icon" width={48} height={48} />}
              title="RefaceKit"
              subtitle="Manufacturing + Cabinetry"
              text="Our manufacturing communication suite — a proven case study demonstrating platform capabilities. RefaceKit shows how our SaaS solutions transform traditional manufacturing communications." />
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
