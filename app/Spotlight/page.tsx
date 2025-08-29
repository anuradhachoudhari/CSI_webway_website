"use client"

import { useEffect, useState } from "react"

export default function SpotlightPage() {
  const [spotlights, setSpotlights] = useState<any[]>([])

  useEffect(() => {
    async function fetchSpotlights() {
      const res = await fetch("/api/spotlight")
      const json = await res.json()
      setSpotlights(json)
    }
    fetchSpotlights()
  }, [])

  return (
    <div>
      <h1>Spotlight</h1>
      {spotlights.map((spotlight, index) => (
        <div key={index}>{spotlight.title}</div>
      ))}
    </div>
  )
}
