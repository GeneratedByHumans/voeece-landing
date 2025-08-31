import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "Perfect for individual creators",
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      "10 repurposes per month",
      "Basic brand voice training",
      "LinkedIn & Instagram support",
      "Email support",
      "Content calendar integration",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    description: "Ideal for growing teams",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "100 repurposes per month",
      "Advanced brand voice training",
      "All platform support",
      "Priority support",
      "Team collaboration",
      "Advanced analytics",
      "Custom templates",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Agency",
    description: "Built for agencies and enterprises",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "Unlimited repurposes",
      "Multiple brand voices",
      "White-label option",
      "Dedicated support",
      "Client management",
      "Advanced reporting",
      "Custom integrations",
      "Priority feature requests",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">
              Choose your <span className="gradient-text">perfect plan</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 text-pretty px-2">
              Start with a free trial, then choose the plan that scales with your content creation needs
            </p>

            <div className="flex items-center justify-center space-x-3 sm:space-x-4">
              <span className="text-sm">Monthly</span>
              <Switch />
              <span className="text-sm">Yearly</span>
              <Badge variant="secondary" className="ml-2 text-xs sm:text-sm px-2 sm:px-3">
                Save 20%
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`glass-card border-border/50 relative ${plan.popular ? "border-purple-500/50 md:scale-105" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 gradient-purple-pink-blue text-white text-xs sm:text-sm">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-3 sm:pb-4 pt-6 sm:pt-6">
                  <CardTitle className="text-xl sm:text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm sm:text-base">{plan.description}</p>
                  <div className="mt-4 sm:mt-6">
                    <span className="text-4xl sm:text-5xl font-bold">${plan.yearlyPrice}</span>
                    <span className="text-muted-foreground text-sm sm:text-base">/month</span>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Billed yearly (${plan.monthlyPrice}/month if billed monthly)
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0"
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
                    size="lg"
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

          <div className="text-center mt-12 sm:mt-16">
            <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Need a custom plan?{" "}
              <Link href="/contact" className="text-purple-400 hover:text-purple-300">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
