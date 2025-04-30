import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const productData = [
  {
    name: "Air Zoom Pegasus 39",
    brand: "Nike",
    description: "The iconic running shoe with responsive cushioning and breathable mesh upper.",
    price: "129.99",
    sku: "NKE-PGSUS39-001",
    images: {
      create: [
        { url: "https://example.com/images/nike-pegasus-1.jpg" }
      ]
    }
  },
  {
    name: "Ultraboost 22",
    brand: "Adidas",
    description: "Responsive running shoes with Boost cushioning for ultimate comfort.",
    price: "189.99",
    sku: "ADS-UB22-002",
    images: {
      create: [
        { url: "https://example.com/images/adidas-ultraboost-1.jpg" }
      ]
    }
  },
  {
    name: "990v5",
    brand: "New Balance",
    description: "Premium made-in-USA sneaker with ENCAP midsole technology.",
    price: "184.99",
    sku: "NB-990V5-003",
    images: {
      create: [
        { url: "https://example.com/images/newbalance-990v5-1.jpg" }
      ]
    }
  },
  {
    name: "Chuck Taylor All Star",
    brand: "Converse",
    description: "The timeless canvas high-top sneaker that's been a cultural icon for decades.",
    price: "59.99",
    sku: "CNV-CTAS-004",
    images: {
      create: [
        { url: "https://example.com/images/converse-chucktaylor-1.jpg" }
      ]
    }
  },
  {
    name: "Dunk Low",
    brand: "Nike",
    description: "Iconic basketball-inspired sneaker with a low profile and timeless design.",
    price: "109.99",
    sku: "NKE-DNKLW-005",
    images: {
      create: [
        { url: "https://example.com/images/nike-dunklow-1.jpg" }
      ]
    }
  },
  {
    name: "Classic Leather",
    brand: "Reebok",
    description: "Heritage running shoe with soft leather upper and EVA midsole.",
    price: "79.99",
    sku: "RBK-CLSC-006",
    images: {
      create: [
        { url: "https://example.com/images/reebok-classic-1.jpg" }
      ]
    }
  },
  {
    name: "Old Skool",
    brand: "Vans",
    description: "Skate shoe with iconic side stripe and vulcanized rubber outsole.",
    price: "65.00",
    sku: "VNS-OSKL-007",
    images: {
      create: [
        { url: "https://example.com/images/vans-oldskool-1.jpg" }
      ]
    }
  },
  {
    name: "Suede Classic XXI",
    brand: "Puma",
    description: "Timeless streetwear sneaker with suede upper and rubber outsole.",
    price: "74.99",
    sku: "PMA-SUEDE-008",
    images: {
      create: [
        { url: "https://example.com/images/puma-suede-1.jpg" }
      ]
    }
  },
  {
    name: "Gel-Kayano 28",
    brand: "ASICS",
    description: "Premium running shoe with dynamic support and GEL technology cushioning.",
    price: "159.99",
    sku: "ASC-KAYN28-009",
    images: {
      create: [
        { url: "https://example.com/images/asics-kayano-1.jpg" }
      ]
    }
  }
]

export async function main() {
    for (const product of productData){
await prisma.product.create({data : product})
    }
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });