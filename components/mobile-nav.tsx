"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-0 text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-black border-red-900">
        <div className="flex flex-col space-y-4 mt-8">
          <a
            href="#home"
            className="text-white hover:text-red-500 transition-colors text-lg py-2"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-red-500 transition-colors text-lg py-2"
            onClick={() => setOpen(false)}
          >
            About Us
          </a>
          <a
            href="#members"
            className="text-white hover:text-red-500 transition-colors text-lg py-2"
            onClick={() => setOpen(false)}
          >
            Members
          </a>
          <a
            href="#stream"
            className="text-white hover:text-red-500 transition-colors text-lg py-2"
            onClick={() => setOpen(false)}
          >
            Stream
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
