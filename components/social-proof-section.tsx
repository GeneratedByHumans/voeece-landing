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
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance">
            Trusted by <span className="gradient-text">creators worldwide</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-2">
            <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
              15,946,635+ pieces of content repurposed
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-border/50">
              <CardContent className="p-4 sm:p-6">
                <p className="text-muted-foreground mb-3 sm:mb-4 italic text-sm sm:text-base leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-sm sm:text-base truncate">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-8 opacity-60 px-2">
          <Badge variant="outline" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
            Powered by Spaceslam Technology
          </Badge>
          <Badge variant="outline" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
            Clerk Auth
          </Badge>
          <Badge variant="outline" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
            OpenAI-Powered
          </Badge>
        </div>
      </div>
    </section>
  )
}
