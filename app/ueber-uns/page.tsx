import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { PageHero } from "@/components/page-hero"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"
import { Award, Users, Clock, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Über Uns - Pro Facility Management",
  description:
    "Erfahren Sie mehr über Pro Facility Management - Ihr zuverlässiger Partner für professionelle Facility Management Lösungen. Geschäftsführer: Cem Bolgi und Ilyas Omar Daib.",
}

const values = [
  {
    icon: Award,
    title: "Qualität",
    description:
      "Wir setzen auf höchste Qualitätsstandards bei all unseren Dienstleistungen. Jeder Auftrag wird mit größter Sorgfalt ausgeführt.",
  },
  {
    icon: Clock,
    title: "Zuverlässigkeit",
    description:
      "Pünktlichkeit und Verlässlichkeit sind die Grundpfeiler unserer Arbeit. Auf uns können Sie sich immer verlassen.",
  },
  {
    icon: Users,
    title: "Kundenzufriedenheit",
    description:
      "Ihre Zufriedenheit steht für uns an erster Stelle. Wir passen unsere Leistungen individuell an Ihre Bedürfnisse an.",
  },
  {
    icon: Shield,
    title: "Kompetenz",
    description:
      "Unser fachkundiges Team bringt umfassende Expertise im Facility Management mit und meistert jede Herausforderung professionell.",
  },
]

const team = [
  {
    name: "Cem Bolgi",
    role: "Geschäftsführer",
    bio: "Herr Bolgi leitet unser Unternehmen mit Expertise und Leidenschaft für exzellenten Service im Facility Management.",
  },
  {
    name: "Ilyas Omar Daib",
    role: "Gesellschafter",
    bio: "Herr Daib setzt sich für höchste Qualitätsstandards in allen Unternehmensbereichen ein und bringt umfassende Branchenkenntnisse mit.",
  },
]

export default function UeberUnsPage() {
  return (
    <>
      <Navigation />

      <PageHero
        title="Über Pro Facility Management"
        subtitle="Ihr zuverlässiger Partner für professionelle Facility Management Lösungen"
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Company Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">Unser Unternehmen</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-6">
              Kompetenz und Zuverlässigkeit für Ihre Immobilien
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Pro Facility Management ist Ihr kompetenter und durchsetzungsstarker Partner für alle Facility
                Management Fragen. Von der fachgerechten Gebäudereinigung über den professionellen Hausmeisterdienst bis
                hin zur Pflege von Grün- und Außenanlagen bieten wir Ihnen ein umfassendes Leistungsspektrum.
              </p>
              <p>
                Unser motiviertes und fachkundiges Team arbeitet nach höchsten Qualitätsstandards und stimmt alle
                Leistungen individuell auf die jeweiligen Anforderungen und Bedürfnisse unserer Kunden ab. So erreichen
                wir stets bestmögliche Ergebnisse.
              </p>
              <p>
                Wir stehen in der Region für höchste Qualität, Zuverlässigkeit und faire Kostenkalkulation. Überzeugen
                Sie sich selbst von unserem Service und werden Sie einer unserer zufriedenen Kunden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">Geschäftsführung</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2">Unser Führungsteam</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">Unsere Werte</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2">Wofür wir stehen</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />

      <Footer />
    </>
  )
}
