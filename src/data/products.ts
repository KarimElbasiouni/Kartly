import { Product } from "@/types/product"

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Air Max Pulse",
    price: 149.99,
    originalPrice: 189.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Beta",
  },
  {
    id: 2,
    name: "Ultra Boost 23",
    price: 179.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Jordan Retro 4",
    price: 219.99,
    originalPrice: 249.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Limited",
  },
  {
    id: 4,
    name: "Dunk Low Premium",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: "New",
  },
]