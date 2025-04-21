'use client'

import { useState } from 'react'
import { Bell, Calendar, Clock, MapPin } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const NotificationBar = () => {
  const [events] = useState([
    { id: 1, title: "Library Workshop", time: "2 PM", location: "Main Library", description: "Learn advanced research techniques and database usage." },
    { id: 2, title: "Basketball Game", time: "7 PM", location: "Sports Complex", description: "University team vs. rival college. Come support our team!" },
  ])

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <Bell className="w-5 h-5 mr-2 animate-bounce" />
        <span className="font-semibold text-lg">Today's Events</span>
      </div>
      <div className="text-sm space-x-4">
        {events.map((event) => (
          <Popover key={event.id}>
            <PopoverTrigger asChild>
              <button className="bg-white text-indigo-600 px-2 py-1 rounded-full hover:bg-indigo-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                {event.title} @ {event.time}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-indigo-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  )
}

export default NotificationBar

