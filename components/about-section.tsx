import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  const services = [
    ["Unterhaltsreinigung", "Teppichbodenreinigung"],
    ["Glasreinigung", "Industriereinigung"],
    ["Bauendreinigung", "Winterdienst"],
    ["Tiefgaragenreinigung / Parkhausreinigung", "Hausmeisterservice"],
    ["Entrümpelung", "Garten- und Grünflächenpflege"],
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">Über uns</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-6">
              Herzlich willkommen bei Pro Facility Management
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ihrem kompetenten und durchzugsstarken Partner von fachgerechter Gebäudereinigung über professionellen
              Hausmeisterdienst bis hin zur Pflege von Grün- und Außenanlagen. Machen Sie sich auf unseren Seiten selbst
              ein Bild von unserem umfassenden Leistungsspektrum und unseren überzeugenden Referenzen. Wir stehen in der
              Region für höchste Qualität, Zuverlässigkeit und faire Kostenkalkulation.
            </p>

            {/* Service Checklist */}
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {services.map((row, i) =>
                row.map((service, j) => (
                  <div key={`${i}-${j}`} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm uppercase">{service}</span>
                  </div>
                )),
              )}
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/ueber-uns">Mehr erfahren</Link>
            </Button>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-primary text-primary-foreground p-4 md:p-6 rounded-lg">
                  <p className="font-bold text-sm md:text-lg leading-snug md:leading-tight">
                    Höchste Qualität, Zuverlässigkeit und faire Kostenkalkulation.
                  </p>
                </div>
                <img
                  src="/professional-cleaning-team-working-office.jpg"
                  alt="Reinigungsteam bei der Arbeit"
                  className="rounded-lg w-full object-cover aspect-square"
                />
              </div>
              <div className="pt-8">
                <img
                  src="/window-cleaner-working-on-glass-building-facade.jpg"
                  alt="Glasreinigung an Fassade"
                  className="rounded-lg w-full object-cover aspect-[3/4]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
