import { Suspense } from "react"
import { notFound } from "next/navigation"
import prisma from "@/lib/prisma"
import ProductImagesManager from "@/components/admin/product-images-manager"
import ProductDetailsForm from "@/components/admin/product-details-form"

interface ProductImage {
  id: number;
  url: string;
  alt: string | null;
}

async function getProduct(id: string) {
  const productId = parseInt(id)
  if (isNaN(productId)) return null
  
  return prisma.product.findUnique({
    where: { id: productId },
    include: { images: true }
  })
}

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)
  
  if (!product) {
    notFound()
  }
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Edit Product: {product.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ProductDetailsForm product={product} />
        </div>
        
        <div>
          <Suspense fallback={<div>Loading images...</div>}>
            <ProductImagesManager 
              productId={product.id} 
              images={product.images.map((img: ProductImage) => ({
                id: img.id,
                url: img.url,
                alt: img.alt || undefined
              }))} 
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}