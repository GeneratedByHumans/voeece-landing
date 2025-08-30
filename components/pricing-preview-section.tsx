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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, <span className="gradient-text">transparent pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your content creation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`glass-card border-border/50 relative ${plan.popular ? "border-purple-500/50" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 gradient-purple-pink-blue text-white">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2"
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
                  asChild
                >
                  <Link href="/sign-in?redirect_url=/dashboard">Start Free Trial</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/pricing">View Full Pricing Details</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
