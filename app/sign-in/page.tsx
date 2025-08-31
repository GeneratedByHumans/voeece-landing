import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <Card className="glass-card border-border/50">
            <CardHeader className="text-center px-4 sm:px-6 pt-6 sm:pt-6">
              <CardTitle className="text-xl sm:text-2xl font-bold">Welcome back</CardTitle>
              <p className="text-muted-foreground text-sm sm:text-base">Sign in to your BrandVoice.ai account</p>
            </CardHeader>
            <CardContent className="space-y-4 px-4 sm:px-6 pb-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
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
                  placeholder="Enter your password"
                  className="h-10 sm:h-auto"
                  autoComplete="current-password"
                />
              </div>
              <Button className="w-full gradient-purple-pink-blue text-white h-10 sm:h-auto">
                <span className="text-sm sm:text-base">Sign In</span>
              </Button>
              <div className="text-center">
                <Link href="/forgot-password" className="text-xs sm:text-sm text-purple-400 hover:text-purple-300">
                  Forgot your password?
                </Link>
              </div>
              <div className="text-center text-xs sm:text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/sign-up" className="text-purple-400 hover:text-purple-300">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
