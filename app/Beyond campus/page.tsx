"use client"

import { useEffect, useState } from "react"

export default function BeyondCampusPage() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/beyond-campus")
      const json = await res.json()
      setData(json)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Beyond Campus</h1>
      {data.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </div>
  )
}

