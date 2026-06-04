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
            <span>Ostlandstraße 5, 63796 Kahl am Main</span>
            <span>info@profacilitymanagement.de</span>
          </div>
          <span className="font-semibold">+49 1521 4861221</span>
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

            {/* Phone CTA Desktop */}
            <div className="hidden lg:flex items-center gap-2 text-primary">
              <div>
                <p className="text-xs text-muted-foreground">Rufen Sie uns an:</p>
                <p className="font-bold">+49 1521 4861221</p>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden p-2 z-[60] relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menü öffnen"
            >
              <span className="sr-only">Menü</span>
              <div className="flex flex-col gap-1.5 w-6">
                <span
                  className={`block h-0.5 bg-foreground transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-foreground transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-foreground transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Overlay */}
      <div
        className={`fixed inset-0 z-[55] lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Dark backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Slide panel from left */}
        <div
          className={`absolute top-0 left-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="flex items-center justify-between px-6 py-5 border-b">
            <span className="font-semibold text-foreground">Menü</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Menü schließen"
              className="p-1 rounded-md hover:bg-muted transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col flex-1 px-4 py-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-foreground hover:text-primary hover:bg-primary/5 font-medium py-3 px-4 rounded-lg transition-colors text-lg"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact at bottom */}
          <div className="px-6 py-6 border-t bg-muted/30">
            <p className="text-xs text-muted-foreground mb-1">Rufen Sie uns an:</p>
            <a href="tel:+4915214861221" className="font-bold text-primary text-lg">
              +49 1521 4861221
            </a>
            <p className="text-xs text-muted-foreground mt-3">Ostlandstraße 5, 63796 Kahl am Main</p>
          </div>
        </div>
      </div>
    </>
  )
}
