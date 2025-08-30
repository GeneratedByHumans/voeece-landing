import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">By Creators, For Creators</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Our mission is to empower content creators with AI that understands their unique voice
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-16">
            <div className="glass-card rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                BrandVoice.ai was born from a simple frustration: spending countless hours manually adapting content for
                different platforms. As creators ourselves, we knew there had to be a better way.
              </p>
              <p className="text-muted-foreground mb-4">
                We realized that the biggest challenge wasn't just repurposing content—it was maintaining that authentic
                voice that makes each creator unique. Generic AI tools would strip away personality, leaving bland,
                robotic content that didn't represent who we really were.
              </p>
              <p className="text-muted-foreground">
                That's when we decided to build something different. Something that would learn from your existing
                content, understand your unique style, and help you scale your voice across platforms without losing
                what makes you, you.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-purple-pink-blue flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-semibold mb-2">Authenticity First</h3>
                  <p className="text-sm text-muted-foreground">
                    Your voice is unique. Our AI preserves what makes your content authentically yours.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-purple-pink-blue flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-semibold mb-2">Time is Precious</h3>
                  <p className="text-sm text-muted-foreground">
                    Spend more time creating, less time reformatting. We handle the busy work.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-purple-pink-blue flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="font-semibold mb-2">Scale Your Reach</h3>
                  <p className="text-sm text-muted-foreground">
                    One piece of content, multiple platforms. Amplify your message everywhere.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Meet the Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="glass-card border-border/50">
                  <CardContent className="p-6 text-center">
                    <img
                      src="/professional-founder-avatar.png"
                      alt="Founder"
                      className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <h3 className="font-semibold text-lg mb-2">Alex Chen</h3>
                    <p className="text-purple-400 mb-3">Co-Founder & CEO</p>
                    <p className="text-sm text-muted-foreground">
                      Former content creator with 500K+ followers. Built his first automation tool to manage his own
                      content workflow.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-border/50">
                  <CardContent className="p-6 text-center">
                    <img src="/professional-cto-avatar.png" alt="CTO" className="w-24 h-24 rounded-full mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Sarah Rodriguez</h3>
                    <p className="text-purple-400 mb-3">Co-Founder & CTO</p>
                    <p className="text-sm text-muted-foreground">
                      AI researcher and former Spaceslam engineer. Passionate about making AI more human and accessible.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to amplify your voice?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of creators who are scaling their content with BrandVoice.ai
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
