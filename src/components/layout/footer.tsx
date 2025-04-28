// components/layout/footer.tsx
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import HeartIcon from "@/components/icons/heart"
import FacebookIcon from "@/components/icons/facebook"
import InstagramIcon from "@/components/icons/instagram"
import TwitterIcon from "@/components/icons/twitter"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "New Releases", href: "#" },
        { name: "Best Sellers", href: "#" },
        { name: "Restocks", href: "#" },
        { name: "Sale", href: "#" },
      ]
    },
    {
      title: "Brands",
      links: [
        { name: "Nike", href: "#" },
        { name: "Adidas", href: "#" },
        { name: "Jordan", href: "#" },
        { name: "New Balance", href: "#" },
      ]
    },
    {
      title: "Help",
      links: [
        { name: "Shipping", href: "#" },
        { name: "Returns", href: "#" },
        { name: "Sizing Guide", href: "#" },
        { name: "Track Order", href: "#" },
      ]
    }
  ]

  const socialLinks = [
    { icon: <FacebookIcon className="h-5 w-5" />, name: "Facebook", href: "#" },
    { icon: <InstagramIcon className="h-5 w-5" />, name: "Instagram", href: "#" },
    { icon: <TwitterIcon className="h-5 w-5" />, name: "Twitter", href: "#" },
  ]

  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12 py-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <HeartIcon className="h-6 w-6" />
              <span className="text-xl font-bold">SneakerVault</span>
              <Badge variant="outline" className="text-xs">
                Beta
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Your destination for premium and limited edition sneakers.
            </p>
          </div>
          
          {footerLinks.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-sm font-medium">{group.title}</h4>
              <ul className="space-y-2 text-sm">
                {group.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link href={link.href} className="text-muted-foreground hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t py-6 gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} SneakerVault. Currently in beta testing phase.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, idx) => (
              <Link key={idx} href={link.href} className="text-muted-foreground hover:text-foreground">
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}