import HeroSection from '@/components/home/hero-section'
import FeaturesSection from '@/components/home/features-section'
import FeaturedProducts from '@/components/home/featured-products'
import PlatformFeatures from '@/components/home/platform-features'
import CategoriesSection from '@/components/home/categories-section'
import StripeSection from '@/components/home/stripe-section'
import NewsletterSection from '@/components/home/newsletter-section'
import BetaBanner from '@/components/layout/beta-banner'

export default function Home() {
  return (
    <main className="flex-1">
      <BetaBanner />
      <HeroSection />
      <FeaturesSection />
      <FeaturedProducts />
      <PlatformFeatures />
      <CategoriesSection />
      <StripeSection />
      <NewsletterSection />
    </main>
  )
}