"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"

export function EventsCalendar() {
  const upcomingEvents = [
    {
      title: "Tech Talk: AI in Engineering",
      date: "2024-03-25",
      time: "2:00 PM - 4:00 PM",
      location: "Auditorium A",
      category: "Technical",
      organizer: "IEEE Club",
      color: "primary",
    },
    {
      title: "Cultural Evening",
      date: "2024-03-28",
      time: "6:00 PM - 9:00 PM",
      location: "Main Ground",
      category: "Cultural",
      organizer: "Saptswarangi Music Club",
      color: "accent",
    },
    {
      title: "Coding Competition",
      date: "2024-04-02",
      time: "10:00 AM - 6:00 PM",
      location: "Computer Lab",
      category: "Competition",
      organizer: "Coders Club",
      color: "primary",
    },
    {
      title: "Blood Donation Camp",
      date: "2024-04-05",
      time: "9:00 AM - 3:00 PM",
      location: "Medical Center",
      category: "Social Service",
      organizer: "NSS",
      color: "primary",
    },
    {
      title: "Robotics Workshop",
      date: "2024-04-10",
      time: "1:00 PM - 5:00 PM",
      location: "Engineering Lab",
      category: "Workshop",
      organizer: "RAC",
      color: "accent",
    },
    {
      title: "Women in STEM Panel",
      date: "2024-04-15",
      time: "11:00 AM - 1:00 PM",
      location: "Conference Hall",
      category: "Panel Discussion",
      organizer: "SWE",
      color: "primary",
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <section id="calendar" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">Events Calendar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with upcoming events, workshops, competitions, and activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <Badge
                    variant="secondary"
                    className={`${
                      event.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : event.color === "accent"
                          ? "bg-accent/10 text-accent"
                          : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    {event.category}
                  </Badge>
                  <div className="text-right">
                    <div className="text-sm font-medium text-foreground">{formatDate(event.date)}</div>
                  </div>
                </div>
                <CardTitle className="font-sans text-lg leading-tight">{event.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Organized by {event.organizer}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    {event.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to stay updated with all events?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Subscribe to Calendar
            </button>
            <button className="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
              View Full Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
