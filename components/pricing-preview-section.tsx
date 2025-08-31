import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "For creators",
    price: "$19",
    features: ["10 repurposes/month", "Basic brand voice", "LinkedIn & Instagram", "Email support"],
  },
  {
    name: "Pro",
    description: "For teams",
    price: "$49",
    features: ["100 repurposes/month", "Advanced brand voice", "All platforms", "Priority support"],
    popular: true,
  },
  {
    name: "Agency",
    description: "For agencies",
    price: "$99",
    features: ["Unlimited repurposes", "Custom brand voices", "White-label option", "Dedicated support"],
  },
]

export function PricingPreviewSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance">
            Simple, <span className="gradient-text">transparent pricing</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-2">
            Choose the plan that fits your content creation needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`glass-card border-border/50 relative ${plan.popular ? "border-purple-500/50" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 gradient-purple-pink-blue text-white text-xs sm:text-sm">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-3 sm:pb-4 pt-6 sm:pt-6">
                <CardTitle className="text-xl sm:text-2xl">{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm sm:text-base">{plan.description}</p>
                <div className="mt-3 sm:mt-4">
                  <span className="text-3xl sm:text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm sm:text-base">/month</span>
                </div>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full h-10 sm:h-auto ${plan.popular ? "gradient-purple-pink-blue text-white" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="/sign-in?redirect_url=/dashboard">
                    <span className="text-sm sm:text-base">Start Free Trial</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="h-10 sm:h-auto px-6 sm:px-8 bg-transparent" asChild>
            <Link href="/pricing">
              <span className="text-sm sm:text-base">View Full Pricing Details</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
