"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/leistungen", label: "Leistungen" },
    { href: "/ueber-uns", label: "Über Uns" },
    { href: "/kontakt", label: "Kontakt" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">📍 Ostlandstraße 5, 63796 Kahl am Main</span>
            <span className="flex items-center gap-2">✉️ info@profacilitymanagement.de</span>
          </div>
          <div className="flex items-center gap-2">
            ☎️ <span className="font-semibold">+49 1521 4861221</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo + Company Name */}
            <Link href="/" onClick={handleNavClick} className="flex items-center gap-2 md:gap-4">
              <Image
                src="/logo.png"
                alt="Pro Facility Management"
                width={200}
                height={60}
                className="h-10 md:h-16 w-auto"
              />
              <span className="text-sm md:text-xl lg:text-2xl font-bold text-foreground">Pro Facility Management</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-foreground hover:text-primary font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Phone CTA */}
            <div className="hidden lg:flex items-center gap-2 text-primary">
              <div>
                <p className="text-xs text-muted-foreground">Rufen Sie uns an:</p>
                <p className="font-bold">+49 1521 4861221</p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 border-t mt-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center gap-2 text-primary pt-4 border-t">
                  <span className="font-bold">☎️ +49 1521 4861221</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
