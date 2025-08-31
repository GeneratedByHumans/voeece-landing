import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">
              <span className="gradient-text">By Creators, For Creators</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty">
              Our mission is to empower content creators with AI that understands their unique voice
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12 sm:mb-16">
            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                BrandVoice.ai was born from a simple frustration: spending countless hours manually adapting content for
                different platforms. As creators ourselves, we knew there had to be a better way.
              </p>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                We realized that the biggest challenge wasn't just repurposing content—it was maintaining that authentic
                voice that makes each creator unique. Generic AI tools would strip away personality, leaving bland,
                robotic content that didn't represent who we really were.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                That's when we decided to build something different. Something that would learn from your existing
                content, understand your unique style, and help you scale your voice across platforms without losing
                what makes you, you.
              </p>
            </div>

            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-4">Our Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full gradient-purple-pink-blue flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">🎯</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">Authenticity First</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Your voice is unique. Our AI preserves what makes your content authentically yours.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full gradient-purple-pink-blue flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">⚡</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">Time is Precious</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Spend more time creating, less time reformatting. We handle the busy work.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full gradient-purple-pink-blue flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">🚀</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">Scale Your Reach</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    One piece of content, multiple platforms. Amplify your message everywhere.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Meet the Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                <Card className="glass-card border-border/50">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <img
                      src="/professional-founder-avatar.png"
                      alt="Founder"
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4"
                    />
                    <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Alex Chen</h3>
                    <p className="text-purple-400 mb-2 sm:mb-3 text-sm">Co-Founder & CEO</p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Former content creator with 500K+ followers. Built his first automation tool to manage his own
                      content workflow.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-border/50">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <img
                      src="/professional-cto-avatar.png"
                      alt="CTO"
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4"
                    />
                    <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Sarah Rodriguez</h3>
                    <p className="text-purple-400 mb-2 sm:mb-3 text-sm">Co-Founder & CTO</p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      AI researcher and former Spaceslam engineer. Passionate about making AI more human and accessible.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-balance">Ready to amplify your voice?</h2>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base text-pretty">
              Join thousands of creators who are scaling their content with BrandVoice.ai
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
