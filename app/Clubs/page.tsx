"use client"

import { useEffect, useState } from "react"

export default function ClubsPage() {
  const [clubs, setClubs] = useState<any[]>([])

  useEffect(() => {
    async function fetchClubs() {
      const res = await fetch("/api/clubs")
      const json = await res.json()
      setClubs(json)
    }
    fetchClubs()
  }, [])

  return (
    <div>
      <h1>Clubs</h1>
      {clubs.map((club, index) => (
        <div key={index}>{club.name}</div>
      ))}
    </div>
  )
}
