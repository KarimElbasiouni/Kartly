import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PlatformFeatures() {
  const features = [
    {
      image: "/placeholder.svg?height=400&width=600",
      alt: "Limited Edition Drops",
      badge: { text: "Beta Feature", variant: "secondary" },
      title: "Limited Edition Drops",
      description: "Get notified about exclusive releases before they sell out.",
      buttonText: "Set Alerts"
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      alt: "Sneaker Authentication",
      badge: { text: "Coming Soon", variant: "destructive" },
      title: "Sneaker Authentication",
      description: "Our advanced authentication system ensures you only get genuine kicks.",
      buttonText: "Learn More"
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-10" />
              <Image
                src={feature.image}
                alt={feature.alt}
                width={600}
                height={400}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-6 z-20">
                <Badge className="w-fit mb-2" variant={feature.badge.variant as any}>
                  {feature.badge.text}
                </Badge>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="max-w-[400px] mb-4">{feature.description}</p>
                <Button className="w-fit" variant="secondary">
                  {feature.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}