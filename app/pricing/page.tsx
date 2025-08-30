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
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Choose your <span className="gradient-text">perfect plan</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Start with a free trial, then choose the plan that scales with your content creation needs
            </p>

            <div className="flex items-center justify-center space-x-4">
              <span className="text-sm">Monthly</span>
              <Switch />
              <span className="text-sm">Yearly</span>
              <Badge variant="secondary" className="ml-2">
                Save 20%
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`glass-card border-border/50 relative ${plan.popular ? "border-purple-500/50 scale-105" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 gradient-purple-pink-blue text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                  <div className="mt-6">
                    <span className="text-5xl font-bold">${plan.yearlyPrice}</span>
                    <span className="text-muted-foreground">/month</span>
                    <p className="text-sm text-muted-foreground mt-1">
                      Billed yearly (${plan.monthlyPrice}/month if billed monthly)
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "gradient-purple-pink-blue text-white" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href="/sign-in?redirect_url=/dashboard">Start Free Trial</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <p className="text-sm text-muted-foreground">
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
