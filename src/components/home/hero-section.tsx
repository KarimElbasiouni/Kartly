import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <Badge className="inline-block" variant="secondary">
              Now in Beta
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Elevate Your Sneaker Game
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Discover exclusive drops, limited editions, and classic kicks. Join our beta to get early access to
              the hottest releases.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">
                Shop Collection
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                New Releases
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=800"
              alt="Sneaker Collection"
              width={800}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}