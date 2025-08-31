import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: "💼",
    title: "LinkedIn Posts",
    description: "Professional content that drives engagement and builds your network",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: "📱",
    title: "Instagram Carousels",
    description: "Storytelling at scale with visually compelling carousel posts",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    icon: "🧵",
    title: "Threads Posts",
    description: "Quick, conversational content that sparks discussions",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: "🎬",
    title: "Video Scripts",
    description: "Ready-to-film scripts optimized for your brand voice",
    gradient: "from-green-500 to-green-600",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance">
            One platform, <span className="gradient-text">endless possibilities</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-2">
            Transform your content into multiple formats while maintaining your unique brand voice
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-card border-border/50 hover:border-border transition-all duration-300 group"
            >
              <CardContent className="p-4 sm:p-6">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-xl sm:text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
