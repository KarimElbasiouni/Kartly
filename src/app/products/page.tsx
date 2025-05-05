import ProductCard from "@/components/ui/product-card"
import { Product } from "@/types/product"

const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/products`, {
    // Using next.js cache: 'no-store' to ensure fresh data on each request
    cache: 'no-store'
  })
  
  if (!res.ok){
    throw new Error(`HTTP ${res.status}`)
  }

  return res.json()
} 

export default async function ProductList() {
  const products = await getProducts()
  return (
    <main className="flex-1">
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl font-bold">Sneakers</h1>
        <p className="mt-4 text-lg">Explore our range of sneakers.</p>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Product List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  )
}