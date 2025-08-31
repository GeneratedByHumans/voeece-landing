import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PointerHighlight } from "@/components/ui/pointer-highlight"
import { BusinessModelAnimation } from "@/components/business-model-animation"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
            Loved by 1,000+ creators worldwide
          </Badge>
        </div>

        <h1
          className="text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance leading-tight"
          style={{ fontSize: "clamp(1.875rem, 5vw, 4rem)" }}
        >
          The best way to grow is to{" "}
          <PointerHighlight pointerClassName="text-purple-500" rectangleClassName="border-purple-500/50 rounded-md">
            <span className="gradient-text">repurpose</span>
          </PointerHighlight>
          .
        </h1>

        <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto text-pretty px-2">
          Transform any Instagram post or YouTube video into LinkedIn posts, carousels, Threads, and video scripts — in
          your unique brand voice, in minutes.
        </p>

        <div className="flex flex-col gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0 sm:flex-row sm:gap-4">
          <Button size="lg" className="gradient-purple-pink-blue text-white px-6 sm:px-8 h-12 sm:h-auto" asChild>
            <Link href="/sign-in?redirect_url=/dashboard">
              <span className="text-base sm:text-lg">Start Repurposing</span>
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="px-6 sm:px-8 bg-transparent h-12 sm:h-auto">
            <span className="text-base sm:text-lg">Watch Demo</span>
          </Button>
        </div>

        {/* Hero Visual Mockup */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-2xl">
            <BusinessModelAnimation />
          </div>
        </div>
      </div>
    </section>
  )
}
