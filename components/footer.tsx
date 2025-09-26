import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="glass-effect border-t border-white/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/images/snrg-logo.png" alt="SNRG Labs Logo" width={32} height={32} className="rounded-full" />
              <span className="text-lg font-bold text-white">SNRG Labs LLC</span>
            </div>
            <p className="text-white/80 text-sm">Strategic Network Revenue Growth</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold">Contact</h3>
            <div className="text-white/80 text-sm space-y-1">
              <p>30 N Gould St Ste R</p>
              <p>Sheridan, WY 82801</p>
              <p>dcruz@snrglabs.com</p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold">Legal</h3>
            <div className="space-y-1">
              <Link href="/privacy-policy" className="text-white/80 hover:text-white text-sm block transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-white/80 hover:text-white text-sm block transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 SNRG Labs LLC - Powered by AEON's Advanced Efficient Optimized Network
          </p>
        </div>
      </div>
    </footer>
  )
}
