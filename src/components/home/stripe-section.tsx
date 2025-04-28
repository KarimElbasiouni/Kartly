import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function StripeSection() {
  return (
    <section className="w-full py-12 md:py-24 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 items-center">
          <div className="space-y-4">
            <Badge className="inline-block" variant="outline">
              Powered By Stripe
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Secure Beta Checkout</h2>
            <p className="text-muted-foreground">
              During our beta phase, all payments are processed through Stripe's test mode. Try our checkout process
              with zero risk - no real transactions will be processed.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="outline">
                <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2" aria-hidden="true">
                  <path
                    d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
                    fill="currentColor"
                  />
                </svg>
                About Stripe
              </Button>
              <Link href="#" passHref>
                <Button>
                  Beta Tester Guide
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[400px] aspect-video relative rounded-xl overflow-hidden border p-4 bg-background">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1 p-3 border rounded-lg">
                <div className="text-xs text-muted-foreground">Test Card</div>
                <div className="font-mono text-sm">4242 4242 4242 4242</div>
              </div>
              <div className="flex flex-col gap-1 p-3 border rounded-lg">
                <div className="text-xs text-muted-foreground">Any Future Date</div>
                <div className="font-mono text-sm">MM/YY - CVC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}