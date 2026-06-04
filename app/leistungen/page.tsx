import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { PageHero } from "@/components/page-hero"
import { ServiceDetailCard } from "@/components/service-detail-card"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"
import { ScrollToHash } from "@/components/scroll-to-hash"

export const metadata: Metadata = {
  title: "Unsere Leistungen - Pro Facility Management",
  description:
    "Entdecken Sie unser umfassendes Leistungsspektrum: Gebäudereinigung, Hausmeisterdienst, Glasreinigung, Winterdienst, Gartenpflege und mehr.",
  alternates: {
    canonical: "https://www.profacilitymanagement.de/leistungen",
  },
}

const services = [
  {
    id: "unterhaltsreinigung",
    title: "Unterhaltsreinigung",
    description:
      "Zur laufenden Unterhaltsreinigung werden verschiedene Reinigungstätigkeiten in Büroräumen, Schulen, Verwaltungsgebäuden oder Industriebetrieben gezählt, die entsprechend der jeweiligen Anforderungen in fest vereinbarten Intervallen ausgeführt werden.",
    features: ["Büroreinigung", "Schulreinigung", "Verwaltungsgebäude", "Regelmäßige Intervalle"],
    imageUrl: "/images/unterhaltsreinigung.jpg",
  },
  {
    id: "teppichbodenreinigung",
    title: "Teppichbodenreinigung",
    description:
      "Professionelle Reinigung von Teppichböden und textilen Belägen. Tiefenreinigung, Fleckentfernung und Geruchsneutralisation für hygienisch saubere Räume.",
    features: ["Tiefenreinigung", "Fleckentfernung", "Geruchsneutralisation", "Imprägnierung"],
    imageUrl: "/images/teppichbodenreinigung.jpg",
  },
  {
    id: "glasreinigung",
    title: "Glasreinigung",
    description:
      "Die professionelle Reinigung von Fenstern, Glastüren, -fronten und Glasflächen sorgt in gewerblich und öffentlich genutzten Räumlichkeiten für einen glänzenden ersten Eindruck Ihrer Besucher, Kunden und Geschäftspartner.",
    features: ["Fensterreinigung", "Glasfassaden", "Schaufenster", "Glastüren"],
    imageUrl: "/images/glasreinigung.jpg",
  },
  {
    id: "industriereinigung",
    title: "Industriereinigung",
    description:
      "Spezialisierte Reinigung für Produktions- und Industrieanlagen. Professionelle Reinigung von Maschinen, Hallen und Spezialflächen nach höchsten Sicherheitsstandards.",
    features: ["Maschinenreinigung", "Hallenreinigung", "Spezialreinigung", "Bodenversiegelung"],
    imageUrl: "/images/industriereinigung.jpg",
  },
  {
    id: "bauendreinigung",
    title: "Bauendreinigung",
    description:
      "Ordnung und Sauberkeit durch eine professionelle Baureinigung sind die wichtigsten Grundlagen für reibungslose Abläufe zur planmäßigen Abwicklung der verschiedenen Bauphasen, insbesondere bei komplexen Projekten und Bauvorhaben.",
    features: ["Bauendreinigung", "Bauzwischenreinigung", "Feinreinigung", "Grobreinigung"],
    imageUrl: "/images/bauendreinigung.jpg",
  },
  {
    id: "winterdienst",
    title: "Winterdienst",
    description:
      "Zuverlässiger Winterdienst für sichere Wege und Flächen. Schneeräumung und Streudienst nach Bedarf oder im Abonnement. 24-Stunden Bereitschaft für maximale Sicherheit.",
    features: ["Schneeräumung", "Streudienst", "Eiszapfenentfernung", "24h Bereitschaft"],
    imageUrl: "/images/winterdienst.jpg",
  },
  {
    id: "tiefgaragenreinigung",
    title: "Tiefgaragenreinigung / Parkhausreinigung",
    description:
      "Die regelmäßige Wartung von Parkhäusern und Tiefgaragen ist unerlässlich, um sie sauber, attraktiv und funktional zu halten. Die von Fahrzeugen abgegebenen Chemikalien und Abgase können Betonbeschichtungen dauerhaft beschädigen.",
    features: ["Parkhaus-Reinigung", "Bodenreinigung", "Ölfleck-Entfernung", "Betonschutz"],
    imageUrl: "/images/tiefgaragenreinigung.jpg",
  },
  {
    id: "hausmeisterservice",
    title: "Hausmeisterservice",
    description:
      "Im gesamten Bereich zum professionellen Hausmeisterdienst gehörender Leistungen stehen die individuellen Anforderungen und Vorstellungen unserer Kunden an erster Stelle. Von Kleinreparaturen über Wartungsarbeiten bis hin zum 24-Stunden-Notdienst.",
    features: ["Handwerkerleistungen", "Kleininstandsetzung", "24h Notdienst", "Wartungsarbeiten"],
    imageUrl: "/images/hausmeisterservice.jpg",
  },
  {
    id: "entruempelung",
    title: "Entrümpelung",
    description:
      "Professionelle Entrümpelung von Wohnungen, Büros und Gewerbeflächen. Fachgerechte Entsorgung inklusive. Wir kümmern uns um die komplette Abwicklung.",
    features: ["Wohnungsentrümpelung", "Büroentrümpelung", "Fachgerechte Entsorgung", "Nachlassräumung"],
    imageUrl: "/images/entruempelung.jpg",
  },
  {
    id: "garten-gruenflaechenpflege",
    title: "Garten- und Grünflächenpflege",
    description:
      "Die laufende Pflege und Unterhaltung beinhaltet vielfältige Aufgaben wie z.B. Heckenschnitt, Rasenpflege, Wässern, Laubaufnahme oder das Entfernen von Unrat in den Außenanlagen von Liegenschaften im Siedlungsbereich.",
    features: ["Rasenpflege", "Heckenschnitt", "Bepflanzung", "Laubbeseitigung"],
    imageUrl: "/images/gartenpflege.jpg",
  },
]

export default function LeistungenPage() {
  return (
    <>
      <ScrollToHash />
      <Navigation />

      <PageHero
        title="Unsere Leistungen"
        subtitle="Wir bieten Ihnen ein umfassendes Spektrum an professionellen Facility Management Dienstleistungen."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="sr-only">Alle Leistungen im Überblick</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} id={service.id}>
                <ServiceDetailCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Links: Weitere Leistungen */}
      <section className="py-12 bg-muted border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-foreground mb-6">Schnellübersicht unserer Leistungen</h2>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="inline-block px-4 py-2 bg-white border border-border rounded-md text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />

      <Footer />
    </>
  )
}
