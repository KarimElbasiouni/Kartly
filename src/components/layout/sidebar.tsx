import { useEffect, useState } from "react"
import Link from "next/link"
import { X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    if (isOpen) {
      setMounted(true)
    } else {
      const timer = setTimeout(() => {
        setMounted(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div 
        className={`fixed inset-y-0 right-0 w-3/4 max-w-sm bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-xl font-bold">Menu</span>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link 
            href="#" 
            className="text-base font-medium py-2 hover:underline underline-offset-4"
            onClick={onClose}
          >
            Home
          </Link>
          <Link 
            href="#" 
            className="text-base font-medium py-2 hover:underline underline-offset-4"
            onClick={onClose}
          >
            Shop
          </Link>
          <Link 
            href="#" 
            className="text-base font-medium py-2 hover:underline underline-offset-4"
            onClick={onClose}
          >
            Brands
          </Link>
          <Link 
            href="#" 
            className="text-base font-medium py-2 hover:underline underline-offset-4"
            onClick={onClose}
          >
            Releases
          </Link>
          <Link 
            href="#" 
            className="text-base font-medium py-2 hover:underline underline-offset-4"
            onClick={onClose}
          >
            About
          </Link>
          <div className="border-t pt-4 mt-2 space-y-4">
            <Link 
              href="#" 
              className="text-base font-medium py-2 hover:underline underline-offset-4 block"
              onClick={onClose}
            >
              Sign In
            </Link>
            <Button className="w-full" onClick={onClose}>
              <ShoppingBag className="mr-2 h-4 w-4" />
              Cart (0)
            </Button>
          </div>
        </nav>
      </div>
    </div>
  )
} 