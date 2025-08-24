import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"

export function FeaturedEvents() {
  const events = [
    {
      title: "Annanya Fest 2024",
      description: "Our flagship cultural & technical festival celebrating innovation, creativity, and talent",
      date: "March 15-17, 2024",
      location: "CCOEW Campus",
      participants: "1000+ Students",
      image: "/college-cultural-festival.png",
      highlights: ["Technical Competitions", "Cultural Performances", "Guest Lectures", "Food Festival"],
      color: "primary",
    },
    {
      title: "Dahi Handi Celebration",
      description: "A unique annual celebration showcasing teamwork, tradition, and festive spirit",
      date: "August 30, 2024",
      location: "College Grounds",
      participants: "500+ Students",
      image: "/dahi-handi-students.png",
      highlights: ["Human Pyramids", "Traditional Music", "Cultural Unity", "Prize Distribution"],
      color: "accent",
    },
    {
      title: "Umang - Garba Night",
      description: "Celebrate Navratri with colorful traditions, dance, and cultural vibes",
      date: "October 12, 2024",
      location: "College Grounds",
      participants: "800+ Students",
      image: "/placeholder-40z0a.png",
      highlights: ["Traditional Garba", "Costume Competition", "Live Music", "Cultural Exchange"],
      color: "secondary",
    },
  ]

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">Signature Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the magic of our most celebrated festivals and events that define the spirit of CCEW
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.color === "primary"
                        ? "bg-primary text-primary-foreground"
                        : event.color === "accent"
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    Featured
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-sans text-xl">{event.title}</CardTitle>
                <CardDescription className="text-base">{event.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {event.participants}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Event Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {event.highlights.map((highlight, idx) => (
                      <span key={idx} className="px-2 py-1 bg-muted text-xs rounded-md">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full group">
                  Learn More
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
