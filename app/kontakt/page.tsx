import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt - Pro Facility Management",
  description:
    "Kontaktieren Sie Pro Facility Management für ein unverbindliches Angebot. Wir freuen uns auf Ihre Anfrage.",
  alternates: {
    canonical: "https://www.profacilitymanagement.de/kontakt",
  },
}

export default function KontaktPage() {
  return (
    <>
      <Navigation />

      <PageHero
        title="Kontakt"
        subtitle="Wir freuen uns auf Ihre Anfrage und beraten Sie gerne zu all unseren Leistungen."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left: Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Kontaktdaten</h2>
                <p className="text-muted-foreground text-sm">
                  Rufen Sie uns an oder schreiben Sie uns – wir antworten innerhalb von 24 Stunden.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-0.5">Adresse</h3>
                    <p className="text-muted-foreground text-sm">
                      Ostlandstraße 5<br />63796 Kahl am Main
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-0.5">Telefon</h3>
                    <a href="tel:+4915214861221" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      +49 1521 4861221
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-0.5">E-Mail</h3>
                    <a href="mailto:info@profacilitymanagement.de" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      info@profacilitymanagement.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-0.5">Öffnungszeiten</h3>
                    <p className="text-muted-foreground text-sm">
                      Mo – Fr: 08:00 – 18:00 Uhr<br />Sa: 09:00 – 14:00 Uhr
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-primary text-primary-foreground rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">24/7 Notdienst</h3>
                    <p className="text-primary-foreground/80 text-sm mb-3">
                      Bei dringenden Notfällen rund um die Uhr erreichbar.
                    </p>
                    <a href="tel:+4915214861221" className="inline-flex items-center gap-2 font-bold hover:underline text-sm">
                      <Phone className="h-4 w-4" />
                      +49 1521 4861221
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Schreiben Sie uns</h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
                </p>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
