"use client"

import { Button } from "@/components/ui/button"

export function AddNewItemButton() {
  const handleAddNew = () => {
    // This would open a modal or navigate to a form in a real application
    alert("Add new migration item")
  }

  return (
    <Button onClick={handleAddNew} className="bg-black text-white hover:bg-gray-800">
      Add New Item
    </Button>
  )
}

