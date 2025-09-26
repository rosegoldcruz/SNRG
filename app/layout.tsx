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
  title: "SNRG Labs LLC - Strategic Network Revenue Growth",
  description:
    "AI + Automation · Arbitrage & High-Frequency Trading · Contracting & Manufacturing - It all starts in the Lab",
  generator: "SNRG Labs LLC",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
            className="w-full h-full object-cover brightness-75"
          >
            <source src="/dynam-background.mp4" type="video/mp4" />
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
