"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full h-full bg-gray-900/80 backdrop-blur-xl pl-6 pr-6 flex flex-col justify-center"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center justify-center flex-1">
          <nav className="flex flex-col space-y-8 text-center">
            <Link
              href="#features"
              className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/about"
              className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </nav>
          <div className="flex flex-col space-y-6 pt-12 mt-12 border-t border-border w-full max-w-sm">
            <Button variant="outline" size="lg" asChild className="bg-transparent">
              <Link href="/sign-in" onClick={() => setOpen(false)}>
                Sign In
              </Link>
            </Button>
            <Button size="lg" className="gradient-purple-pink-blue text-white" asChild>
              <Link href="/sign-in?redirect_url=/dashboard" onClick={() => setOpen(false)}>
                Start Free
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
