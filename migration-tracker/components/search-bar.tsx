"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="w-full sm:max-w-md">
      <Input
        type="text"
        placeholder="Search migrations..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full"
      />
    </div>
  )
}

