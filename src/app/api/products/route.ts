import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    // Get products from the database
    const dbProducts = await prisma.product.findMany({
      include: { images: true }
    })


    // Interface for the image model from Prisma
    interface ProductImage {
        url: string;
    }

    // Interface for the product model from Prisma
    interface DbProduct {
        id: string;
        name: string;
        price: string; // Prisma typically returns Decimal as string
        images: ProductImage[];
    }

    // Interface for the frontend product
    interface FrontendProduct {
        id: string;
        name: string;
        price: number;
        image: string;
    }

    // Format the products list for the frontend

    const products: FrontendProduct[] = dbProducts.map((product: DbProduct) => ({
            id: product.id,
            name: product.name,
            price: parseFloat(product.price),
            image: product.images[0]?.url || "/placeholder.svg?height=300&width=300",
    }))

    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}