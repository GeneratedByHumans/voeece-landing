import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <Card className="glass-card border-border/50">
            <CardHeader className="text-center px-4 sm:px-6 pt-6 sm:pt-6">
              <CardTitle className="text-xl sm:text-2xl font-bold">Create your account</CardTitle>
              <p className="text-muted-foreground text-sm sm:text-base">Start your free trial today</p>
            </CardHeader>
            <CardContent className="space-y-4 px-4 sm:px-6 pb-6">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm">
                    First name
                  </Label>
                  <Input id="firstName" placeholder="John" className="h-10 sm:h-auto" autoComplete="given-name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm">
                    Last name
                  </Label>
                  <Input id="lastName" placeholder="Doe" className="h-10 sm:h-auto" autoComplete="family-name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="h-10 sm:h-auto"
                  autoComplete="email"
                  inputMode="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  className="h-10 sm:h-auto"
                  autoComplete="new-password"
                />
              </div>
              <Button className="w-full gradient-purple-pink-blue text-white h-10 sm:h-auto">
                <span className="text-sm sm:text-base">Start Free Trial</span>
              </Button>
              <div className="text-center text-xs text-muted-foreground leading-relaxed">
                By signing up, you agree to our{" "}
                <Link href="/terms" className="text-purple-400 hover:text-purple-300">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-purple-400 hover:text-purple-300">
                  Privacy Policy
                </Link>
              </div>
              <div className="text-center text-xs sm:text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/sign-in" className="text-purple-400 hover:text-purple-300">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
