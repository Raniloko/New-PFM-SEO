import { ServiceCard } from "./service-card"

export function ServicesSection() {
  const services = [
    {
      title: "Unterhaltsreinigung",
      description:
        "Zur laufenden Unterhaltsreinigung werden verschiedene Reinigungstätigkeiten in Büroräumen, Schulen, Verwaltungsgebäuden oder Industriebetrieben gezählt, die entsprechend der jeweiligen Anforderungen in fest vereinbarten Intervallen ausgeführt werden.",
      imageUrl: "/images/unterhaltsreinigung.jpg",
      targetId: "unterhaltsreinigung",
    },
    {
      title: "Glasreinigung",
      description:
        "Die professionelle Reinigung von Fenstern, Glastüren, -fronten und Glasflächen sorgt in gewerblich und öffentlich genutzten Räumlichkeiten für einen glänzenden ersten Eindruck Ihrer Besucher, Kunden und Geschäftspartner.",
      imageUrl: "/images/glasreinigung.jpg",
      targetId: "glasreinigung",
    },
    {
      title: "Bauendreinigung",
      description:
        "Ordnung und Sauberkeit durch eine professionelle Baureinigung sind die wichtigsten Grundlagen für reibungslose Abläufe zur planmäßigen Abwicklung der verschiedenen Bauphasen, insbesondere bei komplexen Projekten und Bauvorhaben.",
      imageUrl: "/images/bauendreinigung.jpg",
      targetId: "bauendreinigung",
    },
    {
      title: "Tiefgaragenreinigung / Parkhausreinigung",
      description:
        "Die regelmäßige Wartung von Parkhäusern und Tiefgaragen ist unerlässlich, um sie sauber, attraktiv und funktional zu halten. Die von Fahrzeugen abgegebenen Chemikalien und Abgase können Betonbeschichtungen dauerhaft beschädigen.",
      imageUrl: "/images/tiefgaragenreinigung.jpg",
      targetId: "tiefgaragenreinigung",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">Unsere Leistungen</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
            Wir freuen uns auf Ihre Herausforderung!
          </h2>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            Ob Hausmeisterservice, Winterdienst, Grund- oder Unterhaltsreinigung von Büros und Gewerbeflächen: wir
            stimmen unsere Leistungen individuell auf die jeweiligen Anforderungen und Bedürfnisse unserer Kunden ab, um
            stets bestmögliche Ergebnisse zu erreichen.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
