"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Trash2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DeleteProductButton({ productId, productName }: { productId: number, productName: string }) {
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()
  
  const handleDelete = async () => {
    if (!window.confirm(`Are you sure you want to delete "${productName}"?`)) {
      return
    }
    
    setIsDeleting(true)
    
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
      })
      
      if (!response.ok) {
        throw new Error('Failed to delete product')
      }
      
      router.refresh() // Refresh the page data
    } catch (error) {
      console.error('Error deleting product:', error)
      alert('Failed to delete the product. Please try again.')
    } finally {
      setIsDeleting(false)
    }
  }
  
  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handleDelete} 
      disabled={isDeleting}
      className="text-red-600 hover:bg-red-50 hover:border-red-300"
    >
      <Trash2Icon className="h-4 w-4" />
      <span className="sr-only">Delete</span>
    </Button>
  )
}