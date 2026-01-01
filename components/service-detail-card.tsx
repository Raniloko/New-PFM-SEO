import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceDetailCardProps {
  title: string
  description: string
  features: string[]
  imageUrl: string
}

export function ServiceDetailCard({ title, description, features, imageUrl }: ServiceDetailCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full aspect-video object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-card-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          <Link href="/kontakt">Angebot anfordern</Link>
        </Button>
      </div>
    </div>
  )
}
