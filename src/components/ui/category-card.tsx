// components/ui/category-card.tsx
import Link from "next/link"
import Image from "next/image"
import { Category } from "@/types/category"

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href="#"
      className="group relative flex flex-col items-center rounded-lg p-4 text-center hover:bg-muted"
    >
      <div className="mb-2 rounded-full bg-muted p-2 group-hover:bg-background">
        <Image
          src={category.icon || "/placeholder.svg"}
          alt={category.name}
          width={40}
          height={40}
          className="h-6 w-6"
        />
      </div>
      <h3 className="text-sm font-medium">{category.name}</h3>
    </Link>
  )
}