import Image from "next/image"
import { ShoppingBag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        {product.badge && (
          <Badge className="absolute top-2 right-2" variant="secondary">
            {product.badge}
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <span className="font-bold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button size="sm" variant="ghost">
            <ShoppingBag className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}