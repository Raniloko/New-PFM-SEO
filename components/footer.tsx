import Link from "next/link"
import Image from "next/image"
import { CookieSettingsButton } from "@/components/cookie-settings-button"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <Image
              src="/logo.png"
              alt="Pro Facility Management"
              width={180}
              height={50}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Ihr kompetenter Partner für professionelle Facility Management Lösungen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/leistungen", label: "Leistungen" },
                { href: "/ueber-uns", label: "Über Uns" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Leistungen</h3>
            <ul className="space-y-2">
              {[
                { href: "/leistungen#unterhaltsreinigung", label: "Unterhaltsreinigung" },
                { href: "/leistungen#teppichbodenreinigung", label: "Teppichbodenreinigung" },
                { href: "/leistungen#glasreinigung", label: "Glasreinigung" },
                { href: "/leistungen#industriereinigung", label: "Industriereinigung" },
                { href: "/leistungen#bauendreinigung", label: "Bauendreinigung" },
                { href: "/leistungen#winterdienst", label: "Winterdienst" },
                { href: "/leistungen#tiefgaragenreinigung", label: "Tiefgarage / Parkhaus" },
                { href: "/leistungen#hausmeisterservice", label: "Hausmeisterservice" },
                { href: "/leistungen#entruempelung", label: "Entrümpelung" },
                { href: "/leistungen#garten-gruenflaechenpflege", label: "Garten & Grünflächen" },
              ].map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span className="text-white/70">
                  Ostlandstraße 5<br />
                  63796 Kahl am Main
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span>☎️</span>
                <span className="text-white/70">+49 1521 4861221</span>
              </li>
              <li className="flex items-center gap-3">
                <span>✉️</span>
                <span className="text-white/70">info@profacilitymanagement.de</span>
              </li>
              <li className="flex items-start gap-3">
                <span>🕐</span>
                <span className="text-white/70">
                  Mo-Fr: 08:00 - 18:00 Uhr
                  <br />
                  Sa: 09:00 - 14:00 Uhr
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Pro Facility Management. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap gap-6 justify-center md:justify-end">
              <Link href="/impressum" className="text-white/60 hover:text-white text-sm transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-white/60 hover:text-white text-sm transition-colors">
                Datenschutz
              </Link>
              <CookieSettingsButton />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
