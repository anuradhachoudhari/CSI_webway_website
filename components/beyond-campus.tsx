import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Trophy, Users, Zap } from "lucide-react"

export function BeyondCampus() {
  const achievements = [
    {
      title: "International Robotics Championship",
      level: "International",
      description:
        "Team CCEW secured 3rd position in the World Robotics Championship held in Singapore, competing against 150+ teams globally.",
      students: "5 Students",
      year: "2023",
      category: "Technical",
      icon: <Globe className="h-6 w-6" />,
      color: "primary",
    },
    {
      title: "National Innovation Contest",
      level: "National",
      description:
        "Won the Smart India Hackathon with an innovative solution for sustainable agriculture using IoT and AI technologies.",
      students: "6 Students",
      year: "2023",
      category: "Innovation",
      icon: <Zap className="h-6 w-6" />,
      color: "accent",
    },
    {
      title: "State Cultural Festival",
      level: "State",
      description:
        "Swept multiple awards at the Maharashtra State Inter-College Cultural Festival, winning in dance, music, and drama categories.",
      students: "15 Students",
      year: "2023",
      category: "Cultural",
      icon: <Trophy className="h-6 w-6" />,
      color: "secondary",
    },
    {
      title: "Inter-College Sports Championship",
      level: "Inter-College",
      description:
        "Dominated the regional sports meet, securing the overall championship trophy with victories in athletics, basketball, and volleyball.",
      students: "25 Students",
      year: "2023",
      category: "Sports",
      icon: <Users className="h-6 w-6" />,
      color: "primary",
    },
    {
      title: "Research Paper Publications",
      level: "International",
      description:
        "Multiple students published research papers in IEEE and ACM conferences, contributing to advancements in AI and sustainable technology.",
      students: "12 Students",
      year: "2023",
      category: "Research",
      icon: <Globe className="h-6 w-6" />,
      color: "accent",
    },
    {
      title: "Social Impact Initiative",
      level: "National",
      description:
        "NSS team recognized nationally for their rural development project, impacting over 1000 families through technology-driven solutions.",
      students: "20 Students",
      year: "2023",
      category: "Social Service",
      icon: <Trophy className="h-6 w-6" />,
      color: "secondary",
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "International":
        return "bg-primary text-primary-foreground"
      case "National":
        return "bg-accent text-accent-foreground"
      case "State":
        return "bg-secondary text-secondary-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">Beyond Campus Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our students excel beyond college boundaries, representing CCEW at state, national, and international levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`p-2 rounded-lg ${
                      achievement.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : achievement.color === "accent"
                          ? "bg-accent/10 text-accent"
                          : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    {achievement.icon}
                  </div>
                  <div className="text-right">
                    <Badge className={getLevelColor(achievement.level)}>{achievement.level}</Badge>
                    <div className="text-xs text-muted-foreground mt-1">{achievement.year}</div>
                  </div>
                </div>
                <CardTitle className="font-sans text-lg leading-tight">{achievement.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {achievement.students}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {achievement.category}
                  </Badge>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-sans font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">International Recognitions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-sans font-bold text-accent mb-2">100+</div>
              <div className="text-sm text-muted-foreground">National Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-sans font-bold text-secondary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">State Level Victories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-sans font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Inter-College Wins</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
