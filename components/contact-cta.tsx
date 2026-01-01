import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactCTA() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-muted-foreground mb-4">Kontaktieren Sie uns jederzeit gern.</p>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">Kontakt</h2>
        <p className="text-lg text-muted-foreground mb-8">Wir freuen uns auf Ihre Herausforderung!</p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
          <a
            href="tel:+4915214861221"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-5 w-5 text-primary" />
            <span className="font-semibold">+49 1521 4861221</span>
          </a>
          <a
            href="mailto:info@profacilitymanagement.de"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5 text-primary" />
            <span className="font-semibold">info@profacilitymanagement.de</span>
          </a>
        </div>

        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/kontakt">Jetzt kontaktieren</Link>
        </Button>
      </div>
    </section>
  )
}
