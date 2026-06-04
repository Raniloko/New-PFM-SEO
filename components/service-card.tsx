"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  imageUrl: string
  targetId?: string
}

export function ServiceCard({ title, description, imageUrl, targetId }: ServiceCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden aspect-[16/10]">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
        <Link
          href={`/leistungen#${targetId}`}
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
        >
          Mehr erfahren
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
