"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ProductDetailsFormProps {
  product: {
    id: number
    name: string
    brand: string
    price: number | string
    sku: string
    description: string | null
  }
}

export default function ProductDetailsForm({ product }: ProductDetailsFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  
  const [formData, setFormData] = useState({
    name: product.name,
    brand: product.brand,
    price: typeof product.price === 'number' ? product.price.toString() : product.price,
    sku: product.sku,
    description: product.description || ""
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    
    // Reset status messages when form changes
    setError(null)
    setSuccess(false)
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setSuccess(false)
    
    try {
      const response = await fetch(`/api/products/${product.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to update product')
      }
      
      setSuccess(true)
      router.refresh() // Refresh the page data
    } catch (error: unknown){
      setError(error instanceof Error ? error.message : 'An error occurred while updating the product')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-medium">Product Details</h2>
      
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
          min="0"
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
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm">
          Product updated successfully!
        </div>
      )}
      
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Update Product"}
      </Button>
    </form>
  )
}