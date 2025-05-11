import Link from "next/link"
import Image from "next/image"
import { PencilIcon, PlusIcon } from "lucide-react"
import prisma from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import DeleteProductButton from "@/components/admin/product-delete"

async function getProducts() {
  const products = await prisma.product.findMany({
    include: {
      images: {
        take: 1 //take only first image for thumbnail
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  
  return products
}

interface ProductImage {
    url: string;
}

interface Product {
    id: number;
    name: string;
    brand: string;
    sku: string;
    price: number | string; // Accepting both types since we're calling toString()
    images: ProductImage[];
    createdAt: Date;
}



export default async function AdminProductsPage() {
  const products = await getProducts()
  
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <Link href="/api/products/create" passHref>
          <Button>
            <PlusIcon className="h-4 w-4 mr-2" />
            Add New Product
          </Button>
        </Link>
      </div>
      
      <div className="bg-white rounded-md shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                    No products found. Create your first product!
                  </td>
                </tr>
              ) : (
                products.map((product: Product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="h-10 w-10 relative rounded overflow-hidden">
                        <Image
                          src={product.images[0]?.url || "/placeholder.svg?height=40&width=40"}
                          alt={product.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{product.brand}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{product.sku}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        ${parseFloat(product.price.toString()).toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <Link href={`/api/products/edit?id=${product.id}`} passHref>
                          <Button variant="outline" size="sm">
                            <PencilIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                        </Link>
                        <DeleteProductButton productId={product.id} productName={product.name} />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
