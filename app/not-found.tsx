import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen flex flex-col">
        {/* 404 Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-2xl w-full text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-9xl md:text-[150px] font-bold text-primary/20 leading-none">404</h1>
            </div>

            <div className="space-y-4 mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">Seite nicht gefunden</h2>
              <p className="text-lg text-muted-foreground">
                Entschuldigung! Die Seite, die Sie suchen, existiert nicht oder wurde möglicherweise verschoben.
              </p>
            </div>

            {/* Description */}
            <div className="bg-muted/50 rounded-lg p-6 mb-12 border border-border">
              <p className="text-muted-foreground">
                Unser Team bei Pro Facility Management kümmert sich um Ihre Anfragen. Wenn Sie Hilfe benötigen,
                kontaktieren Sie uns gerne direkt oder nutzen Sie die Navigation unten.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">Zur Startseite</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/leistungen">Leistungen erkunden</Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Können wir Ihnen weiterhelfen?</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
                <a href="mailto:info@profacilitymanagement.de" className="text-primary hover:underline font-medium">
                  info@profacilitymanagement.de
                </a>
                <a href="tel:+491521 4861221" className="text-primary hover:underline font-medium">
                  +49 1521 4861221
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
