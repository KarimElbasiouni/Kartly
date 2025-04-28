import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/ui/product-card"
import { featuredProducts } from "@/data/products"

export default function FeaturedProducts() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="inline-block" variant="outline">
              Featured Sneakers
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trending Kicks</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Check out the hottest sneakers available during our beta launch.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button size="lg" variant="outline">
            View All Sneakers
          </Button>
        </div>
      </div>
    </section>
  )
}