import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Award, Target } from "lucide-react"

export function StudentSpotlight() {
  const achievements = [
    {
      name: "xyz",
      year: "Final Year CSE",
      achievement: "Winner - National Level Hackathon",
      description:
        "Led her team to victory in the Smart India Hackathon 2023, developing an innovative solution for rural healthcare.",
      category: "Technical",
      icon: <Trophy className="h-5 w-5" />,
      image: "/confident-female-engineering-student.png",
      color: "primary",
    },
    {
      name: "xyz",
      year: "Third Year ECE",
      achievement: "Best Paper Award - IEEE Conference",
      description: "Published research paper on IoT applications in smart cities at the International IEEE Conference.",
      category: "Research",
      icon: <Award className="h-5 w-5" />,
      image: "/conference-presentation.png",
      color: "accent",
    },
    {
      name: "xyz",
      year: "Second Year ME",
      achievement: "State Level Athletics Champion",
      description: "Won gold medal in 400m sprint at the Maharashtra State Inter-College Athletics Championship.",
      category: "Sports",
      icon: <Star className="h-5 w-5" />,
      image: "/placeholder.svg?height=200&width=200",
      color: "primary",
    },
    {
      name: "xyz",
      year: "Final Year IT",
      achievement: "Cultural Ambassador",
      description:
        "Led the organizing committee for Annanya Fest 2023, managing over 50 events and 2000+ participants.",
      category: "Leadership",
      icon: <Target className="h-5 w-5" />,
      image: "/placeholder.svg?height=200&width=200",
      color: "primary",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">Student Spotlight</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating the outstanding achievements of our talented students across various domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((student, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <img
                    src={student.image || "/placeholder.svg"}
                    alt={student.name}
                    className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="sm:w-2/3">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div
                        className={`p-2 rounded-lg ${
                          student.color === "primary"
                            ? "bg-primary/10 text-primary"
                            : student.color === "accent"
                              ? "bg-accent/10 text-accent"
                              : "bg-secondary/10 text-secondary"
                        }`}
                      >
                        {student.icon}
                      </div>
                      <Badge variant="secondary">{student.category}</Badge>
                    </div>
                    <CardTitle className="font-sans text-xl">{student.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{student.year}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{student.achievement}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{student.description}</p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Have an achievement to share?</p>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Submit Your Story
          </button>
        </div>
      </div>
    </section>
  )
}
