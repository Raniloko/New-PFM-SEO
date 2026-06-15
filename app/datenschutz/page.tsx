import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Datenschutzerklärung - Pro Facility Management",
  description:
    "Datenschutzerklärung der Pro Facility Management UG (haftungsbeschränkt). Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.",
  alternates: {
    canonical: "https://www.profacilitymanagement.de/datenschutz",
  },
}

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            1) Einleitung und Kontaktdaten des Verantwortlichen
          </h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              <strong>1.1</strong> Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns für Ihr Interesse.
              Im Folgenden informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten bei der Nutzung unserer
              Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie persönlich identifiziert werden
              können.
            </p>
            <p>
              <strong>1.2</strong> Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der
              Datenschutz-Grundverordnung (DSGVO) ist Pro Facility Management, Ostlandstraße 5, 63796 Kahl am Main,
              info@profacilitymanagement.de, Telefon: +49 1521 4861221. Der für die Verarbeitung von personenbezogenen
              Daten Verantwortliche ist diejenige natürliche oder juristische Person, die allein oder gemeinsam mit
              anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">2) Datenerfassung beim Besuch unserer Website</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              <strong>2.1</strong> Bei der bloß informatorischen Nutzung unserer Website, also wenn Sie sich nicht
              registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur solche Daten, die Ihr Browser
              an den Seitenserver übermittelt (sog. „Server-Logfiles"). Wenn Sie unsere Website aufrufen, erheben wir
              die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Unsere besuchte Website</li>
              <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
              <li>Menge der gesendeten Daten in Byte</li>
              <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
              <li>Verwendeter Browser</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
            </ul>
            <p>
              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der
              Verbesserung der Stabilität und Funktionalität unserer Website. Eine Weitergabe oder anderweitige
              Verwendung der Daten findet nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles nachträglich
              zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
            </p>
            <p>
              <strong>2.2</strong> Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              personenbezogener Daten und anderer vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den
              Verantwortlichen) eine SSL-bzw. TLS-Verschlüsselung. Sie können eine verschlüsselte Verbindung an der
              Zeichenfolge „https://" und dem Schloss-Symbol in Ihrer Browserzeile erkennen.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">3) Cookies</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen,
              verwenden wir Cookies, also kleine Textdateien, die auf Ihrem Endgerät abgelegt werden. Teilweise werden
              diese Cookies nach Schließen des Browsers automatisch wieder gelöscht (sog. „Session-Cookies"), teilweise
              verbleiben diese Cookies länger auf Ihrem Endgerät und ermöglichen das Speichern von Seiteneinstellungen
              (sog. „persistente Cookies"). Im letzteren Fall können Sie die Speicherdauer der Übersicht zu den
              Cookie-Einstellungen Ihres Webbrowsers entnehmen.
            </p>
            <p>
              Sofern durch einzelne von uns eingesetzte Cookies auch personenbezogene Daten verarbeitet werden, erfolgt
              die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des Vertrages, gemäß Art. 6
              Abs. 1 lit. a DSGVO im Falle einer erteilten Einwilligung oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur
              Wahrung unserer berechtigten Interessen an der bestmöglichen Funktionalität der Website sowie einer
              kundenfreundlichen und effektiven Ausgestaltung des Seitenbesuchs.
            </p>
            <p>
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln
              über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen
              können.
            </p>
            <p>
              Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalität unserer Website eingeschränkt
              sein kann.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">4) Google Analytics</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Diese Website nutzt Google Analytics 4 (GA4), einen Webanalysedienst der Google Ireland Limited, Gordon
              House, Barrow Street, Dublin 4, Irland (Muttergesellschaft: Google LLC, 1600 Amphitheatre Parkway,
              Mountain View, CA 94043, USA).
            </p>
            <p>
              Google Analytics wird ausschließlich nach Ihrer ausdrücklichen Einwilligung geladen und verarbeitet Daten
              auf Basis von Art. 6 Abs. 1 lit. a DSGVO. Ohne Ihre Einwilligung wird keinerlei Verbindung zu
              Google-Servern hergestellt.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Zweck:</strong> Analyse des Nutzerverhaltens zur Verbesserung unseres Angebots
              </li>
              <li>
                <strong>Verarbeitete Daten:</strong> IP-Adresse (anonymisiert), Seitenaufrufe, Verweildauer,
                Browsertyp, Geräteinformationen
              </li>
              <li>
                <strong>IP-Anonymisierung:</strong> Aktiv – Ihre IP-Adresse wird vor der Übermittlung an Google
                gekürzt
              </li>
              <li>
                <strong>Speicherdauer:</strong> 14 Monate (Google-Standard)
              </li>
              <li>
                <strong>Drittlandübertragung:</strong> Die erhobenen Daten können in die USA übertragen werden. Google
                ist nach dem EU-US Data Privacy Framework zertifiziert (Art. 45 DSGVO).
              </li>
            </ul>
            <p>
              <strong>Widerruf:</strong> Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft über die
              Cookie-Einstellungen (verfügbar im Footer der Website) widerrufen. Weitere Informationen finden Sie in der{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                Datenschutzerklärung von Google
              </a>
              .
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">5) Kontaktaufnahme</h2>

          <div className="text-muted-foreground space-y-4">
            <p>
              Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden – ausschließlich zum
              Zweck der Bearbeitung und Beantwortung Ihres Anliegens und nur im dafür erforderlichen Umfang –
              personenbezogene Daten verarbeitet.
            </p>
            <p>
              Rechtsgrundlage für die Verarbeitung dieser Daten ist unser berechtigtes Interesse an der Beantwortung
              Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf einen Vertrag ab, so ist
              zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden gelöscht,
              wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist und
              sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">6) Datenverarbeitung zur Bestellabwicklung</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Soweit für die Vertragsabwicklung zu Liefer- und Zahlungszwecken erforderlich, werden die von uns
              erhobenen personenbezogenen Daten gemäß Art. 6 Abs. 1 lit. b DSGVO an das beauftragte Transportunternehmen
              und das beauftragte Kreditinstitut weitergegeben.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">7) Rechte des Betroffenen</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              <strong>7.1</strong> Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem Verantwortlichen
              hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten die nachstehenden Betroffenenrechte
              (Auskunfts- und Interventionsrechte), wobei für die jeweiligen Ausübungsvoraussetzungen auf die angeführte
              Rechtsgrundlage verwiesen wird:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Auskunftsrecht gemäß Art. 15 DSGVO;</li>
              <li>Recht auf Berichtigung gemäß Art. 16 DSGVO;</li>
              <li>Recht auf Löschung gemäß Art. 17 DSGVO;</li>
              <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO;</li>
              <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO;</li>
              <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO;</li>
              <li>Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO;</li>
              <li>Recht auf Beschwerde gemäß Art. 77 DSGVO.</li>
            </ul>
            <p>
              <strong>7.2 Beschwerderecht bei der Aufsichtsbehörde (Art. 77 DSGVO)</strong>
            </p>
            <p>
              Sie haben das Recht, sich jederzeit bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren:
            </p>
            <div className="bg-muted/40 rounded-lg p-4 text-sm space-y-1">
              <p className="font-semibold text-foreground">
                Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)
              </p>
              <p>Postfach 3163, 65021 Wiesbaden</p>
              <p>
                Telefon:{" "}
                <a href="tel:+496111408-0" className="underline hover:text-foreground">
                  +49 611 1408-0
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a href="mailto:poststelle@datenschutz.hessen.de" className="underline hover:text-foreground">
                  poststelle@datenschutz.hessen.de
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://datenschutz.hessen.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  datenschutz.hessen.de
                </a>
              </p>
            </div>
            <p>
              <strong>7.3 WIDERSPRUCHSRECHT</strong>
            </p>
            <p className="font-bold uppercase">
              WENN WIR IM RAHMEN EINER INTERESSENABWÄGUNG IHRE PERSONENBEZOGENEN DATEN AUFGRUND UNSERES ÜBERWIEGENDEN
              BERECHTIGTEN INTERESSES VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER
              BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG WIDERSPRUCH MIT WIRKUNG FÜR DIE ZUKUNFT EINZULEGEN.
            </p>
            <p className="font-bold uppercase">
              MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN. EINE
              WEITERVERARBEITUNG BLEIBT ABER VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
              NACHWEISEN KÖNNEN, DIE IHRE INTERESSEN, GRUNDRECHTE UND GRUNDFREIHEITEN ÜBERWIEGEN, ODER WENN DIE
              VERARBEITUNG DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN DIENT.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">8) Dauer der Speicherung personenbezogener Daten</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen Rechtsgrundlage,
              am Verarbeitungszweck und – sofern einschlägig – zusätzlich anhand der jeweiligen gesetzlichen
              Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen).
            </p>
            <p>
              Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer ausdrücklichen Einwilligung gemäß
              Art. 6 Abs. 1 lit. a DSGVO werden die betroffenen Daten so lange gespeichert, bis Sie Ihre Einwilligung
              widerrufen.
            </p>
            <p>
              Existieren gesetzliche Aufbewahrungsfristen für Daten, die im Rahmen rechtsgeschäftlicher bzw.
              rechtsgeschäftsähnlicher Verpflichtungen auf der Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet
              werden, werden diese Daten nach Ablauf der Aufbewahrungsfristen routinemäßig gelöscht, sofern sie nicht
              mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein
              berechtigtes Interesse an der Weiterspeicherung fortbesteht.
            </p>
            <p>
              Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese
              Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO ausüben, es sei denn,
              wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und
              Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von
              Rechtsansprüchen.
            </p>
            <p>
              Sofern sich aus den sonstigen Informationen dieser Erklärung über spezifische Verarbeitungssituationen
              nichts anderes ergibt, werden gespeicherte personenbezogene Daten im Übrigen dann gelöscht, wenn sie für
              die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">9) Schriftarten</h2>
          <div className="text-muted-foreground space-y-2">
            <p>
              Diese Website verwendet die Schriftart „Inter", die lokal auf unserem Server gehostet wird. Beim Aufruf
              dieser Website wird keine Verbindung zu Servern von Google oder anderen externen Anbietern hergestellt.
              Eine Übermittlung Ihrer personenbezogenen Daten (z.B. IP-Adresse) an Google findet dabei nicht statt.
            </p>
          </div>
        </section>

        <section className="pt-4 border-t">
          <p className="text-muted-foreground text-sm">Stand: April 2026</p>
        </section>
      </div>
    </LegalLayout>
  )
}
