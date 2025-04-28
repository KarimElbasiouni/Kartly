import { Badge } from "@/components/ui/badge"
import CategoryCard from "@/components/ui/category-card"
import { categories } from "@/data/categories"

export default function CategoriesSection() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="inline-block" variant="outline">
              Browse Styles
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Shop by Category</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Explore our beta catalog by browsing these sneaker categories.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}