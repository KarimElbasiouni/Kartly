import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    // Get products from the database
    const dbProducts = await prisma.product.findMany({
      include: { images: true }
    })

    // Format the products list for the frontend
    const products = dbProducts.map(product => ({
        id: product.id,
        name: product.name,
        price:parseFloat(product.price),
        image: product.images[0]?.url || "/placeholder.svg?height=300&width=300",
    }))

    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}