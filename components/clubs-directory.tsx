"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Cpu, Music, Users, Heart, Zap, Brain, Globe, Wrench, Mic, Award } from "lucide-react"

export function ClubsDirectory() {
  const clubCategories = {
    technical: {
      title: "Technical / Professional Clubs",
      icon: <Code className="h-5 w-5" />,
      clubs: [
        {
          name: "Technoformers Club",
          description:
            "Innovation, product development, prototyping; workshops, hackathons, interdisciplinary competitions.",
          icon: <Zap className="h-6 w-6" />,
          members: "120+",
          activities: ["Workshops", "Hackathons", "Product Development", "Innovation Challenges"],
          color: "primary",
        },
        {
          name: "Industry 4.0 Technocrats Club",
          description: "AI, IoT, automation, big data, smart manufacturing; digital transformation exposure.",
          icon: <Brain className="h-6 w-6" />,
          members: "85+",
          activities: ["AI Projects", "IoT Development", "Smart Manufacturing", "Digital Transformation"],
          color: "accent",
        },
        {
          name: "IETE Club",
          description: "Electronics, IT & CS; technical talks, conferences, paper presentations.",
          icon: <Cpu className="h-6 w-6" />,
          members: "95+",
          activities: ["Technical Talks", "Conferences", "Paper Presentations", "Electronics Projects"],
          color: "secondary",
        },
        {
          name: "Material Advantage Student's Chapter",
          description:
            "Materials science (metals, polymers, ceramics, composites, nanomaterials); great for research & higher studies.",
          icon: <Wrench className="h-6 w-6" />,
          members: "60+",
          activities: ["Research Projects", "Material Testing", "Industry Visits", "Academic Conferences"],
          color: "primary",
        },
        {
          name: "Computer Society of India (CSI)",
          description: "India's largest IT body; coding contests, software workshops, hackathons, seminars.",
          icon: <Code className="h-6 w-6" />,
          members: "150+",
          activities: ["Coding Contests", "Software Workshops", "Hackathons", "IT Seminars"],
          color: "accent",
        },
        {
          name: "IEEE",
          description:
            "Global engineering organization; networking, paper publications, conferences, leadership roles.",
          icon: <Globe className="h-6 w-6" />,
          members: "110+",
          activities: ["Networking Events", "Paper Publications", "International Conferences", "Leadership Programs"],
          color: "secondary",
        },
        {
          name: "Coders Club",
          description: "Programming enthusiasts; coding challenges, DSA, development, placement prep.",
          icon: <Code className="h-6 w-6" />,
          members: "200+",
          activities: ["Coding Challenges", "DSA Practice", "Development Projects", "Placement Preparation"],
          color: "primary",
        },
        {
          name: "Robotics and Automation Club (RAC)",
          description: "Robotics, drones, IoT-based automation, embedded systems.",
          icon: <Cpu className="h-6 w-6" />,
          members: "75+",
          activities: ["Robot Building", "Drone Development", "IoT Projects", "Embedded Systems"],
          color: "accent",
        },
        {
          name: "Google Developer Groups (GDG)",
          description: "Google's student tech community; Android, Web, Cloud, AI/ML, Flutter; major resume booster.",
          icon: <Globe className="h-6 w-6" />,
          members: "130+",
          activities: ["Android Development", "Web Development", "Cloud Computing", "AI/ML Projects"],
          color: "secondary",
        },
        {
          name: "Engineering India",
          description: "National innovation & career growth network; connects students with industries.",
          icon: <Award className="h-6 w-6" />,
          members: "90+",
          activities: ["Industry Connections", "Career Guidance", "Innovation Projects", "Professional Development"],
          color: "primary",
        },
      ],
    },
    cultural: {
      title: "Cultural / Extracurricular Clubs",
      icon: <Music className="h-5 w-5" />,
      clubs: [
        {
          name: "Saptswarangi Music Club",
          description: "Singing, instruments, classical & modern music; concerts, events, fests.",
          icon: <Mic className="h-6 w-6" />,
          members: "80+",
          activities: ["Vocal Training", "Instrumental Music", "Concerts", "Music Festivals"],
          color: "accent",
        },
      ],
    },
    leadership: {
      title: "Leadership / Community Clubs",
      icon: <Users className="h-5 w-5" />,
      clubs: [
        {
          name: "Student Representative Council (SRC)",
          description: "Bridge between students & administration; leadership, event management, representation.",
          icon: <Users className="h-6 w-6" />,
          members: "25+",
          activities: [
            "Student Representation",
            "Event Management",
            "Leadership Development",
            "Administration Liaison",
          ],
          color: "primary",
        },
        {
          name: "Society of Women Engineers (SWE)",
          description: "Global women-in-STEM network; mentorship, workshops, networking.",
          icon: <Award className="h-6 w-6" />,
          members: "100+",
          activities: ["Mentorship Programs", "STEM Workshops", "Professional Networking", "Career Development"],
          color: "secondary",
        },
        {
          name: "UBA (Unnat Bharat Abhiyan)",
          description: "Govt. of India initiative; solving real rural problems using technology.",
          icon: <Globe className="h-6 w-6" />,
          members: "50+",
          activities: ["Rural Development", "Technology Solutions", "Community Service", "Government Projects"],
          color: "accent",
        },
        {
          name: "NSS (National Service Scheme)",
          description:
            "Govt.-backed volunteer club; blood donation camps, cleanliness drives, rural development, teaching underprivileged children.",
          icon: <Heart className="h-6 w-6" />,
          members: "180+",
          activities: ["Blood Donation", "Cleanliness Drives", "Rural Development", "Education Outreach"],
          color: "primary",
        },
      ],
    },
  }

  return (
    <section id="clubs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">Clubs Directory</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover your passion and build your future with our diverse range of clubs and organizations
          </p>
        </div>

        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {Object.entries(clubCategories).map(([key, category]) => (
              <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                {category.icon}
                <span className="hidden sm:inline">{category.title.split(" / ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(clubCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.clubs.map((club, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div
                          className={`p-2 rounded-lg ${
                            club.color === "primary"
                              ? "bg-primary/10 text-primary"
                              : club.color === "accent"
                                ? "bg-accent/10 text-accent"
                                : "bg-secondary/10 text-secondary"
                          }`}
                        >
                          {club.icon}
                        </div>
                        <Badge variant="secondary">{club.members} members</Badge>
                      </div>
                      <CardTitle className="font-sans text-lg">{club.name}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{club.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Key Activities:</h4>
                        <div className="flex flex-wrap gap-1">
                          {club.activities.map((activity, idx) => (
                            <span key={idx} className="px-2 py-1 bg-muted text-xs rounded-md">
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-transparent" variant="outline">
                        Join Club
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
