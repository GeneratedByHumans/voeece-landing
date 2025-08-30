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
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            One platform, <span className="gradient-text">endless possibilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your content into multiple formats while maintaining your unique brand voice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-card border-border/50 hover:border-border transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
