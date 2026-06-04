"use client"

import type React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

interface HeroProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  backgroundImage?: string
  badge?: string
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref = "/leistungen",
  backgroundImage = "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1920",
  badge,
}: HeroProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (ctaHref?.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(ctaHref)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage || "/images/hero-background.jpg"}
          alt="Pro Facility Management - Professionelle Gebäudedienstleistungen"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {badge && (
          <span className="inline-block bg-primary px-4 py-2 rounded text-sm font-medium mb-6 uppercase tracking-wide">
            {badge}
          </span>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-balance">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-white/90 mb-8">{subtitle}</p>}
        {ctaText && (
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground font-semibold px-8 py-6 text-lg"
            onClick={handleClick}
            asChild={!ctaHref?.startsWith("#")}
          >
            {ctaHref?.startsWith("#") ? <span>{ctaText}</span> : <a href={ctaHref}>{ctaText}</a>}
          </Button>
        )}
      </div>
    </section>
  )
}
