"use client"

import { ArrowDown, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
            Frontend Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting beautiful, responsive, and user-friendly web experiences with modern technologies
          </p>
          <div className="flex items-center justify-center gap-4 mb-12">
            <a href="https://github.com/CoArturo/CoArturo" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>

                <a href="https://www.linkedin.com/in/abel-arturo-belen-astacio-a1737b203/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
          </div>
          <Button onClick={scrollToAbout} variant="ghost" className="animate-bounce">
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
