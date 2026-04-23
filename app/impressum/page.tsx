import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Impressum - Pro Facility Management",
  description: "Impressum und rechtliche Angaben der Pro Facility Management.",
}

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
          <div className="text-muted-foreground space-y-2">
            <p className="font-semibold text-foreground">Pro Facility Management UG (haftungsbeschränkt)</p>
            <p>Ostlandstraße 5</p>
            <p>63796 Kahl am Main</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Vertreten durch</h2>
          <div className="text-muted-foreground space-y-2">
            <p>
              <strong>Geschäftsführer:</strong> Cem Bolgi
            </p>
            <p>
              <strong>Gesellschafter:</strong> Ilyas Omar Daib
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt</h2>
          <div className="text-muted-foreground space-y-2">
            <p>Telefon: +49 1521 4861221</p>
            <p>E-Mail: info@profacilitymanagement.de</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Registereintrag</h2>
          <div className="text-muted-foreground space-y-2">
            <p>Eintragung im Handelsregister B</p>
            <p>Registergericht: Amtsgericht Aschaffenburg</p>
            <p>Registernummer: HRB 18434</p>
            <p>Stammkapital: 1.000,00 EUR</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Umsatzsteuer-ID</h2>
          <div className="text-muted-foreground space-y-2">
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</p>
            <p>Wird nach Erteilung ergänzt.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <div className="text-muted-foreground space-y-2">
            <p>Cem Bolgi</p>
            <p>Ostlandstraße 5</p>
            <p>63796 Kahl am Main</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Streitschlichtung</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Haftung für Inhalte</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
              eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Haftung für Links</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
              Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Urheberrecht</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p>
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet.
            </p>
          </div>
        </section>

        <section className="mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            Zurück zur{" "}
            <a href="https://www.profacilitymanagement.de/" className="text-primary hover:underline font-semibold">
              Startseite von Pro Facility Management
            </a>
          </p>
        </section>
      </div>
    </LegalLayout>
  )
}
