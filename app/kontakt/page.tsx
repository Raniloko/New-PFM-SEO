import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt - Pro Facility Management",
  description:
    "Kontaktieren Sie Pro Facility Management für ein unverbindliches Angebot. Wir freuen uns auf Ihre Anfrage.",
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
        <div className="max-w-4xl mx-auto px-4">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Main Contact Card */}
            <div className="bg-muted rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Kontaktdaten</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        Ostlandstraße 5
                        <br />
                        63796 Kahl am Main
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+4915214861221" className="hover:text-primary transition-colors">
                          +49 1521 4861221
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@profacilitymanagement.de" className="hover:text-primary transition-colors">
                          info@profacilitymanagement.de
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Öffnungszeiten</h3>
                      <p className="text-muted-foreground">
                        Mo - Fr: 08:00 - 18:00 Uhr
                        <br />
                        Sa: 09:00 - 14:00 Uhr
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-primary text-primary-foreground rounded-lg p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">24/7 Notdienst</h3>
                  <p className="text-primary-foreground/90 mb-3">
                    Bei dringenden Notfällen erreichen Sie uns rund um die Uhr.
                  </p>
                  <a
                    href="tel:+4915214861221"
                    className="inline-flex items-center gap-2 font-bold text-lg hover:underline"
                  >
                    <Phone className="h-5 w-5" />
                    +49 1521 4861221
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
