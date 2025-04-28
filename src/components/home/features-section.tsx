import { CreditCard } from "lucide-react"
import { ShieldIcon } from "@/components/icons/shield"
import { GlobeIcon } from "@/components/icons/globe"
import { UsersIcon } from "@/components/icons/users"

export default function FeaturesSection() {
  const features = [
    {
      icon: <ShieldIcon className="h-8 w-8 mb-2 text-primary" />,
      title: "Authenticity Guarantee",
      description: "Beta verification process"
    },
    {
      icon: <CreditCard className="h-8 w-8 mb-2 text-primary" />,
      title: "Beta Pricing",
      description: "Early access discounts"
    },
    {
      icon: <GlobeIcon className="h-8 w-8 mb-2 text-primary" />,
      title: "Global Beta Releases",
      description: "Test international shipping"
    },
    {
      icon: <UsersIcon className="h-8 w-8 mb-2 text-primary" />,
      title: "Sneaker Community",
      description: "Beta tester exclusives"
    }
  ]

  return (
    <section className="w-full py-8 md:py-12 lg:py-16 border-t border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-1">
              {feature.icon}
              <h3 className="text-sm font-medium">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}