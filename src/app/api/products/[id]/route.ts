import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    try {
      const id = parseInt(params.id)
      
      if (isNaN(id)) {
        return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 })
      }
      // Delete the product images
      await prisma.productImage.deleteMany({
        where: { productId: id }
      })
      // Delete the product
      await prisma.product.delete({
        where: { id }
      })
  
      return NextResponse.json({ success: true })
    } catch (error) {
      console.error('Error deleting product:', error)
      return NextResponse.json(
        { error: 'Failed to delete product' },
        { status: 500 }
      )
    }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 })
    }

    const product = await prisma.product.findUnique({
      where: { id },
      include: { images: true }
    })

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    // Format the product for frontend
    const formattedProduct = {
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.toString()),
      image: product.images[0]?.url || "/placeholder.svg?height=400&width=600"
    }

    return NextResponse.json(formattedProduct)
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 })
  }
}