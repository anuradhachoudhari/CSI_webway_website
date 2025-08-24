"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Sparkles, Users, Calendar, Trophy } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Where Dreams Take Flight</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-foreground leading-tight">
              Beyond
              <span className="text-primary"> Academics</span>
              <br />
              <span className="text-primary">Beyond Limits</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the vibrant world of extracurricular activities at Cummins College of Engineering for Women. From
              cultural festivals to technical clubs, sports to social initiatives - your journey of growth starts here.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Explore Activities
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              Join a Club
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-sans font-bold text-foreground">15+</div>
              <div className="text-sm text-muted-foreground">Active Clubs</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-sans font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Events Yearly</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-sans font-bold text-foreground">100+</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-sans font-bold text-foreground">1000+</div>
              <div className="text-sm text-muted-foreground">Active Students</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="h-6 w-6 text-muted-foreground animate-bounce" />
      </div>
    </section>
  )
}
