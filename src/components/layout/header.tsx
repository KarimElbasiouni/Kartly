"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import HeartIcon from "@/components/icons/heart"
import Sidebar from "./sidebar"

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <HeartIcon className="h-6 w-6" />
            <span className="text-xl font-bold">SneakerVault</span>
            <Badge variant="outline" className="ml-2 text-xs">
              Beta
            </Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer">
              Shop
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer">
              Brands
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer">
              Releases
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 hidden sm:inline-block cursor-pointer">
              Sign In
            </Link>
            <Button className="hidden sm:flex">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Cart (0)
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </header>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  )
}