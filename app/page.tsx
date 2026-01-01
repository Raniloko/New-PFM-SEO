import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { AdditionalServices } from "@/components/additional-services"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navigation />

      <Hero
        badge="Facility Management"
        title="Pro Facility Management - Professionelle Gebäudedienstleistungen in Kahl am Main"
        subtitle="Gebäudereinigung • Hausmeisterservice • Grünflächenpflege"
        ctaText="Unsere Leistungen entdecken"
        ctaHref="#services"
        backgroundImage="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-12 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ihr vertrauenswürdiger Partner für Gebäudedienstleistungen
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Unternehmen und private Immobilieneigentümer vertrauen auf Pro Facility Management. Unser fachkundiges Team
            liefert zuverlässige, hochwertige Dienstleistungen – pünktlich, professionell und zu fairen Preisen. Wir
            verstehen, dass Ihre Immobilie Ihre Ansprüche widerspiegelt. Deshalb setzen wir höchste Standards bei
            Qualität, Sorgfalt und Kundenbetreuung um.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Pro Facility Management - Ihr Partner für professionelle Gebäudeverwaltung
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Pro Facility Management ist Ihr zuverlässiger Partner für alle Aspekte der professionellen
              Gebäudeverwaltung und Facilities Management. Mit einem engagierten Team bieten wir umfassende Lösungen für
              gewerbliche und private Immobilien.
            </p>
            <p>
              Unsere Dienstleistungen im Bereich Facility Management umfassen professionelle Gebäudereinigung,
              spezialisierte Hausmeisterdienste, fachgerechte Winterdienste, hochwertige Glasreinigung und umfangreiche
              Gartenpflege. Wir verstehen, dass eine gut verwaltete Immobilie nicht nur äußerlich attraktiv, sondern
              auch optimal funktional sein muss.
            </p>
            <p>
              Bei Pro Facility Management steht die Qualität an erster Stelle. Jedes Projekt wird mit größter Sorgfalt
              und Aufmerksamkeit zum Detail durchgeführt. Unsere Mitarbeiter sind hochprofessionell geschult und nutzen
              moderne Technologien, um sicherzustellen, dass Ihre Immobilie immer in bestem Zustand ist.
            </p>
            <p>
              Wir bieten transparente und faire Kostenkalkulationen ohne versteckte Gebühren. Unsere Preise sind
              wettbewerbsfähig und bieten das beste Preis-Leistungs-Verhältnis in der Region. Zuverlässigkeit ist unser
              Versprechen – wir halten, was wir sagen, und liefern konsistent hochwertige Arbeit.
            </p>
            <p>
              Mit Pro Facility Management können Sie sich auf Ihr Kerngeschäft konzentrieren, während wir uns um die
              Verwaltung und Instandhaltung Ihrer Immobilie kümmern. Kontaktieren Sie uns noch heute, um zu erfahren,
              wie wir Ihre Facility Management Anforderungen erfüllen können.
            </p>
          </div>
        </div>
      </section>

      <AboutSection />

      <div id="services">
        <ServicesSection />
      </div>

      <AdditionalServices />

      <ContactCTA />

      <Footer />
    </>
  )
}
