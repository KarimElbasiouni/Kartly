"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ImageUploader from "@/components/admin/image-uploader"

export default function CreateProductPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    description: "",
    sku: ""
  })
  const [productId, setProductId] = useState<number | null>(null)
  const [step, setStep] = useState(1) // Step 1: Product details, Step 2: Images
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (!response.ok) throw new Error('Failed to create product')
      
      const data = await response.json()
      setProductId(data.id)
      setStep(2) // Move to image upload step
    } catch (error) {
      console.error('Error creating product:', error)
    }
  }
  
  const handleImageUploadComplete = () => {
    // Navigate to product list or product detail page
    router.push('/admin/products')
  }
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Product</h1>
      
      {step === 1 && (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Product Name</label>
            <Input 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div>
            <label htmlFor="brand" className="block text-sm font-medium mb-1">Brand</label>
            <Input 
              id="brand" 
              name="brand" 
              value={formData.brand} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-1">Price</label>
            <Input 
              id="price" 
              name="price" 
              type="number" 
              step="0.01" 
              value={formData.price} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div>
            <label htmlFor="sku" className="block text-sm font-medium mb-1">SKU</label>
            <Input 
              id="sku" 
              name="sku" 
              value={formData.sku} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
            <textarea 
              id="description" 
              name="description" 
              value={formData.description} 
              onChange={handleChange}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              rows={4}
            />
          </div>
          
          <Button type="submit">Create Product</Button>
        </form>
      )}
      
      {step === 2 && productId && (
        <div className="space-y-4 max-w-lg">
          <h2 className="text-xl font-medium">Upload Product Images</h2>
          <p className="text-sm text-gray-500">
            Product created successfully! Now add some images.
          </p>
          
          <ImageUploader 
            productId={productId} 
            onUploadComplete={handleImageUploadComplete} 
          />
          
          <Button onClick={handleImageUploadComplete}>
            Skip Image Upload
          </Button>
        </div>
      )}
    </div>
  )
}