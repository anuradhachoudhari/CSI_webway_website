"use client"

import { useEffect, useState } from "react"

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<any[]>([])

  useEffect(() => {
    async function fetchGallery() {
      const res = await fetch("/api/gallery")
      const json = await res.json()
      setGalleryItems(json)
    }
    fetchGallery()
  }, [])

  return (
    <div>
      <h1>Gallery</h1>
      {galleryItems.map((item, index) => (
        <div key={index}>
          <img src={item.imageUrl} alt={item.caption || "Gallery Image"} width={200} />
          <p>{item.caption}</p>
        </div>
      ))}
    </div>
  )
}
