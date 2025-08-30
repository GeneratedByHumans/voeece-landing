import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    content: "BrandVoice.ai has completely transformed my content workflow. What used to take hours now takes minutes.",
    avatar: "/professional-woman-avatar.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "Social Media Manager",
    content: "The brand voice consistency is incredible. Our content feels cohesive across all platforms.",
    avatar: "/professional-man-avatar.png",
  },
  {
    name: "Emily Johnson",
    role: "Digital Marketer",
    content: "Finally, a tool that understands my brand voice and helps me scale content creation effortlessly.",
    avatar: "/professional-woman-avatar.png",
  },
]

export function SocialProofSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">creators worldwide</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2">
              15,946,635+ pieces of content repurposed
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-border/50">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 opacity-60">
          <Badge variant="outline" className="px-4 py-2">
            Powered by Spaceslam Technology
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            Clerk Auth
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            OpenAI-Powered
          </Badge>
        </div>
      </div>
    </section>
  )
}
