import type React from "react"
import { Navigation } from "@/components/navigation"
import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"

interface LegalLayoutProps {
  title: string
  children: React.ReactNode
}

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <>
      <Navigation />
      <PageHero title={title} breadcrumbs={[{ label: "Home", href: "/" }]} />
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-gray max-w-none">{children}</div>
        </div>
      </section>
      <Footer />
    </>
  )
}
