"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consent) {
      alert("Please agree to receive communications from SNRG Labs.")
      return
    }

    setIsSubmitting(true)
    // TODO: replace with backend integration (email API, form handler, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect rounded-2xl p-10 md:p-14 fade-in">
            <div className="flex justify-center mb-6">
              <Image src="/images/snrg-logo.png" alt="SNRG Labs Logo" width={90} height={90} className="rounded-full" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">Thank You!</h1>
            <p className="text-lg text-white/80 mb-8">
              Your message has been received. Our team will contact you within 24 hours.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3" asChild>
              <a href="/">Return Home</a>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Image src="/images/snrg-logo.png" alt="SNRG Labs Logo" width={100} height={100} className="rounded-full" />
          </div>
          <h1 className="text-5xl font-extrabold text-white drop-shadow mb-6">Contact SNRG Labs</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to bring your project into the Lab? Reach out and let’s get started.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-effect border-white/20 hover:border-accent/40 transition-colors">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-white mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      id="name"
                      name="name"
                      label="Name *"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                    />
                    <FormField
                      id="company"
                      name="company"
                      label="Company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      id="email"
                      name="email"
                      type="email"
                      label="Email *"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                    />
                    <FormField
                      id="phone"
                      name="phone"
                      type="tel"
                      label="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, consent: checked as boolean }))} 
                      className="mt-1 border-white/20 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                    />
                    <Label htmlFor="consent" className="text-sm text-white/80 leading-relaxed">
                      I agree to receive SMS/email communications from SNRG Labs. Message & data rates may apply. 
                      Reply <span className="text-accent font-semibold">STOP</span> to opt out. *
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : <>Send Message <Send className="h-5 w-5" /></>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <InfoCard
              icon={<MapPin className="h-5 w-5 text-accent" />}
              title="Address"
              text={
                <>
                  SNRG Labs LLC <br />
                  30 N Gould St Ste R <br />
                  Sheridan, WY 82801
                </>
              }
            />
            <InfoCard
              icon={<Mail className="h-5 w-5 text-accent" />}
              title="Email"
              text={
                <a href="mailto:dcruz@snrglabs.com" className="text-accent hover:text-accent/80 transition">
                  dcruz@snrglabs.com
                </a>
              }
            />
            <InfoCard
              icon={<Phone className="h-5 w-5 text-accent" />}
              title="Phone"
              text="Twilio number (to be inserted)"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

/* === Helper Components === */
function FormField({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  id: string
  name: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  required?: boolean
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-white">{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        placeholder={placeholder}
      />
    </div>
  )
}

function InfoCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: React.ReactNode }) {
  return (
    <Card className="glass-effect border-white/20 hover:border-accent/40 transition-colors">
      <CardContent className="p-6 flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-white/80 text-sm">{text}</p>
        </div>
      </CardContent>
    </Card>
  )
}
