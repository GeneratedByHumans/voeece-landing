import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does BrandVoice.ai work?",
    answer:
      "Simply paste a URL from Instagram or YouTube, and our AI analyzes your content to understand your unique brand voice. Then it repurposes that content into LinkedIn posts, Instagram carousels, Threads posts, and video scripts while maintaining your authentic voice and style.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "We currently support repurposing content from Instagram posts and YouTube videos into LinkedIn posts, Instagram carousels, Threads posts, and video scripts. We're constantly adding new platforms based on user feedback.",
  },
  {
    question: "Can I customize my brand voice?",
    answer:
      "Our AI learns from your existing content to understand your unique brand voice, tone, and style. You can also provide additional guidelines and preferences to fine-tune how your repurposed content sounds.",
  },
  {
    question: "What's included in the free trial?",
    answer:
      "The 14-day free trial includes full access to all Pro features: 100 repurposes, advanced brand voice training, all platform support, and priority support. No credit card required to start.",
  },
  {
    question: "How accurate is the brand voice matching?",
    answer:
      "Our AI is trained on millions of content pieces and uses advanced natural language processing to maintain 95%+ accuracy in brand voice matching. The more content you provide, the better it gets at understanding your unique style.",
  },
  {
    question: "Can I edit the repurposed content?",
    answer:
      "Yes! All repurposed content is fully editable. You can make adjustments, add your own touches, or use our suggestions as a starting point for your own creativity.",
  },
  {
    question: "Is there an API available?",
    answer:
      "Yes, our API is available for Pro and Agency plans. This allows you to integrate BrandVoice.ai directly into your existing workflows and tools.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer email support for all plans, priority support for Pro users, and dedicated support for Agency customers. Our team typically responds within 24 hours (faster for priority support).",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty">
              Everything you need to know about BrandVoice.ai
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-border/50 rounded-lg px-4 sm:px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6">
                  <span className="font-semibold text-sm sm:text-base leading-relaxed pr-2">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 sm:pb-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 sm:mt-16">
            <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">Still have questions?</p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Reach out to our team at{" "}
              <a href="mailto:support@brandvoice.ai" className="text-purple-400 hover:text-purple-300">
                support@brandvoice.ai
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
