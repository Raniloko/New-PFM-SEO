import Link from "next/link"
import { Circle } from "lucide-react"

export function AdditionalServices() {
  const leftServices = [
    { label: "Teppichbodenreinigung", href: "/leistungen#teppichbodenreinigung" },
    { label: "Industriereinigung", href: "/leistungen#industriereinigung" },
    { label: "Winterdienst", href: "/leistungen#winterdienst" },
    { label: "Hausmeisterservice", href: "/leistungen#hausmeisterservice" },
  ]

  const rightServices = [
    { label: "Garten- und Grünflächenpflege", href: "/leistungen#garten-gruenflaechenpflege" },
    { label: "Photovoltaik-Reinigung", href: "/leistungen#photovoltaik-reinigung" },
    { label: "Schwimmbadreinigung", href: "/leistungen#schwimmbadreinigung" },
    { label: "Entrümpelung", href: "/leistungen#entruempelung" },
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10 uppercase tracking-wide">
          Weitere Leistungen
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
          <ul className="space-y-3">
            {leftServices.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="flex items-center gap-3 hover:text-primary transition-colors group"
                >
                  <Circle className="h-2 w-2 fill-primary text-primary" />
                  <span className="text-foreground group-hover:text-primary transition-colors">{service.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-3">
            {rightServices.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="flex items-center gap-3 hover:text-primary transition-colors group"
                >
                  <Circle className="h-2 w-2 fill-primary text-primary" />
                  <span className="text-foreground group-hover:text-primary transition-colors">{service.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
