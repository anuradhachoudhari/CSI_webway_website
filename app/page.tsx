import { Hero } from "@/components/hero"
import { FeaturedEvents } from "@/components/featured-events"
import { ClubsDirectory } from "@/components/clubs-directory"
import { EventsCalendar } from "@/components/events-calendar"
import { Gallery } from "@/components/gallery"
import { StudentSpotlight } from "@/components/student-spotlight"
import { BeyondCampus } from "@/components/beyond-campus"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <FeaturedEvents />
        <ClubsDirectory />
        <EventsCalendar />
        <Gallery />
        <StudentSpotlight />
        <BeyondCampus />
      </main>
      <Footer />
    </div>
  )
}
