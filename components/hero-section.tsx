import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <Badge variant="secondary" className="mb-6 px-4 py-2">
          Loved by 1,000+ creators worldwide
        </Badge>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Make content easier. <span className="gradient-text">Repurpose smarter</span>, reach further.
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
          Transform any Instagram post or YouTube video into LinkedIn posts, carousels, Threads, and video scripts — in
          your unique brand voice, in minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="gradient-purple-pink-blue text-white px-8" asChild>
            <Link href="/sign-in?redirect_url=/dashboard">Start Repurposing</Link>
          </Button>
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            Watch Demo
          </Button>
        </div>

        {/* Hero Visual Mockup */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="glass-card rounded-lg p-4 border-2 border-purple-500/20">
                <div className="w-full h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">Original Content</span>
                </div>
                <p className="text-sm text-muted-foreground">Instagram Post / YouTube Video</p>
              </div>

              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full gradient-purple-pink-blue flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              <div className="space-y-3">
                <div className="glass-card rounded-lg p-3 border border-blue-500/20">
                  <div className="w-full h-6 bg-blue-500/20 rounded mb-2"></div>
                  <p className="text-xs text-muted-foreground">LinkedIn Post</p>
                </div>
                <div className="glass-card rounded-lg p-3 border border-pink-500/20">
                  <div className="w-full h-6 bg-pink-500/20 rounded mb-2"></div>
                  <p className="text-xs text-muted-foreground">Instagram Carousel</p>
                </div>
                <div className="glass-card rounded-lg p-3 border border-purple-500/20">
                  <div className="w-full h-6 bg-purple-500/20 rounded mb-2"></div>
                  <p className="text-xs text-muted-foreground">Threads Post</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
