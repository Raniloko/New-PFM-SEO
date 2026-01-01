import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs?: { label: string; href: string }[]
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {index > 0 && <ChevronRight className="h-4 w-4" />}
                <Link href={crumb.href} className="hover:text-primary transition-colors">
                  {crumb.label}
                </Link>
              </span>
            ))}
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{title}</span>
          </nav>
        )}

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{title}</h1>
        {subtitle && <p className="text-lg text-muted-foreground mt-4 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  )
}
