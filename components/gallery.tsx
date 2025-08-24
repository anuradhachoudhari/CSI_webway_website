"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Download } from "lucide-react"

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All" },
    { id: "festivals", name: "Festivals" },
    { id: "competitions", name: "Competitions" },
    { id: "workshops", name: "Workshops" },
    { id: "sports", name: "Sports" },
    { id: "cultural", name: "Cultural" },
  ]

  const galleryItems = [
    {
      id: 1,
      title: "Annanya Fest 2023 - Cultural Night",
      category: "festivals",
      image: "/college-cultural-festival-stage.png",
      description: "Students performing traditional and modern dance forms",
    },
    {
      id: 2,
      title: "Hackathon Winners",
      category: "competitions",
      image: "/hackathon-victory-celebration.png",
      description: "Team celebrating their victory at the annual hackathon",
    },
    {
      id: 3,
      title: "Robotics Workshop",
      category: "workshops",
      image: "/robotics-lab-students.png",
      description: "Hands-on robotics workshop by RAC club",
    },
    {
      id: 4,
      title: "Inter-College Sports Meet",
      category: "sports",
      image: "/female-track-athletes.png",
      description: "Annual inter-college athletics championship",
    },
    {
      id: 5,
      title: "Dahi Handi Celebration",
      category: "cultural",
      image: "/dahi-handi-pyramid.png",
      description: "Traditional Dahi Handi celebration with student participation",
    },
    {
      id: 6,
      title: "Tech Talk Session",
      category: "workshops",
      image: "/tech-presentation.png",
      description: "Industry expert sharing insights on emerging technologies",
    },
    {
      id: 7,
      title: "Garba Night - Umang",
      category: "festivals",
      image: "/colorful-garba-dance.png",
      description: "Vibrant Garba night during Navratri celebrations",
    },
    {
      id: 8,
      title: "Coding Competition",
      category: "competitions",
      image: "/coding-competition.png",
      description: "Intense coding competition organized by Coders Club",
    },
    {
      id: 9,
      title: "Music Concert",
      category: "cultural",
      image: "/student-music-concert.png",
      description: "Saptswarangi Music Club annual concert",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Relive the memorable moments from our events, competitions, and celebrations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-200"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {categories.find((cat) => cat.id === item.category)?.name}
                  </Badge>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-background/90 hover:bg-background">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-background/90 hover:bg-background">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-sans font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View More Photos
          </Button>
        </div>
      </div>
    </section>
  )
}
