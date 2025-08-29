"use client"

import { useEffect, useState } from "react"

export default function EventsPage() {
  const [events, setEvents] = useState<any[]>([])

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/events")
        if (!res.ok) throw new Error("Failed to fetch events")
        const json = await res.json()
        setEvents(json)
      } catch (err) {
        console.error(err)
      }
    }
    fetchEvents()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <ul className="space-y-3">
          {events.map((event, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold">{event.name}</h2>
              <p className="text-gray-600">{event.date}</p>
              <p>{event.location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
