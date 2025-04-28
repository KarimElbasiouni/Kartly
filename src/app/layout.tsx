// app/layout.tsx
import { type Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import BetaBanner from '@/components/layout/beta-banner'
import './globals.css'

export const metadata: Metadata = {
  title: 'SneakerVault | Premium Sneaker Marketplace',
  description: 'Discover exclusive drops, limited editions, and classic kicks.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <div className="w-full mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}