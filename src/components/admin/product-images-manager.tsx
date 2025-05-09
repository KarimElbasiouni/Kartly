"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ImageUploader from "./image-uploader"

interface ProductImagesManagerProps {
  productId: number
  images: Array<{ id: number, url: string, alt?: string }>
}

export default function ProductImagesManager({ productId, images }: ProductImagesManagerProps) {
  const [productImages, setProductImages] = useState(images)
  const [isDeleting, setIsDeleting] = useState<number | null>(null)
  
  async function handleDelete(imageId: number) {
    if (confirm("Are you sure you want to delete this image?")) {
      setIsDeleting(imageId)
      
      try {
        await fetch(`/api/product-images/${imageId}`, {
          method: 'DELETE',
        })
        
        setProductImages(images => images.filter(img => img.id !== imageId))
      } catch (error) {
        console.error("Failed to delete image:", error)
        alert("Failed to delete image")
      } finally {
        setIsDeleting(null)
      }
    }
  }
  
  function handleUploadComplete(imageUrl: string) {
    // Add new image to the list (ideally fetch the full image object from the server)
    setProductImages([...productImages, { id: Date.now(), url: imageUrl }])
  }
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Product Images</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {productImages.map(image => (
          <div key={image.id} className="relative border rounded-md overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={image.url}
                alt={image.alt || "Product image"}
                fill
                className="object-cover"
              />
            </div>
            <Button
              variant="destructive"
              size="sm"
              className="absolute top-2 right-2"
              onClick={() => handleDelete(image.id)}
              disabled={isDeleting === image.id}
            >
              {isDeleting === image.id ? "..." : "×"}
            </Button>
          </div>
        ))}
      </div>
      
      <div className="border rounded-md p-4">
        <h4 className="font-medium mb-3">Upload New Image</h4>
        <ImageUploader productId={productId} onUploadComplete={handleUploadComplete} />
      </div>
    </div>
  )
}