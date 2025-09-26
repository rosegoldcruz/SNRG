import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "SNRG Labs LLC - Enterprise Telephony & AI Automation Platform",
  description:
    "B2B SaaS platform providing compliant business communications for contractors, manufacturers, and service providers. Appointment confirmations, customer notifications, and lead alerts for enterprise clients.",
  generator: "SNRG Labs LLC",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover"
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SNRG Labs"
  },
  formatDetection: {
    telephone: false
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SNRG Labs" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="apple-touch-icon" href="/images/snrg-logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}
      >
        {/* Fullscreen Video Background */}
        <div className="fixed inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover brightness-75"
            style={{
              WebkitTransform: "translateZ(0)",
              transform: "translateZ(0)",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden"
            }}
          >
            <source src="/dynam-background.mp4" type="video/mp4" />
            {/* Fallback for very old browsers */}
            <div className="w-full h-full bg-gradient-to-br from-blue-900 via-black to-green-900" />
          </video>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          <Navigation />
          <Suspense>
            <main className="min-h-screen">{children}</main>
          </Suspense>
          <Footer />
        </div>

        <Analytics />
      </body>
    </html>
  )
}
