'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, MapPin, LinkIcon, Image, Plus, Bell } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useAuth } from '../contexts/AuthContext'

const UpcomingEvents = () => {
  const { user } = useAuth()
  const [events, setEvents] = useState([
    { id: 1, title: "Library Workshop", date: "2023-06-15", time: "14:00", location: "Main Library", image: "/placeholder.svg?height=100&width=200", formLink: "https://example.com/form1", reminder: false },
    { id: 2, title: "Basketball Game", date: "2023-06-16", time: "19:00", location: "Sports Complex", image: "/placeholder.svg?height=100&width=200", formLink: "https://example.com/form2", reminder: false },
    { id: 3, title: "Career Fair", date: "2023-06-18", time: "10:00", location: "Student Center", image: "/placeholder.svg?height=100&width=200", formLink: "https://example.com/form3", reminder: false },
  ])

  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    image: '',
    formLink: ''
  })

  useEffect(() => {
    if (user) {
      fetchReminders()
    }
  }, [user])

  const fetchReminders = async () => {
    try {
      const response = await fetch(`/api/reminders?userId=${user.id}`)
      const reminders = await response.json()
      setEvents(events.map(event => ({
        ...event,
        reminder: reminders.some((r: any) => r.eventId === event.id)
      })))
    } catch (error) {
      console.error('Failed to fetch reminders:', error)
    }
  }

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault()
    setEvents([...events, { ...newEvent, id: events.length + 1, reminder: false }])
    setNewEvent({ title: '', date: '', time: '', location: '', image: '', formLink: '' })
  }

  const toggleReminder = async (id: number) => {
    if (!user) return

    const event = events.find(e => e.id === id)
    if (!event) return

    try {
      const response = await fetch('/api/reminders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          eventId: id,
          date: event.date
        }),
      })

      if (response.ok) {
        setEvents(events.map(event => 
          event.id === id ? { ...event, reminder: !event.reminder } : event
        ))
      } else {
        console.error('Failed to set reminder')
      }
    } catch (error) {
      console.error('Error setting reminder:', error)
    }
  }

  return (
    <Card className="overflow-hidden shadow-lg border-t-4 border-green-500">
      <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600">
        <CardTitle className="flex items-center text-white">
          <Calendar className="w-6 h-6 mr-2" />
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-200">
          {events.map((event) => (
            <div key={event.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center mb-2">
                <img src={event.image} alt={event.title} className="w-16 h-16 object-cover rounded-md mr-4" />
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-800">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-3">{event.date}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Label htmlFor={`reminder-${event.id}`} className="mr-2">Remind me</Label>
                  <Switch
                    id={`reminder-${event.id}`}
                    checked={event.reminder}
                    onCheckedChange={() => toggleReminder(event.id)}
                  />
                </div>
              </div>
              <a href={event.formLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex items-center text-sm">
                <LinkIcon className="w-4 h-4 mr-1" />
                Register for this event
              </a>
            </div>
          ))}
        </div>
        <div className="p-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white">
                <Plus className="w-4 h-4 mr-2" /> Add New Event
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Event</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddEvent} className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} required />
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" value={newEvent.date} onChange={(e) => setNewEvent({...newEvent, date: e.target.value})} required />
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" value={newEvent.time} onChange={(e) => setNewEvent({...newEvent, time: e.target.value})} required />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" value={newEvent.location} onChange={(e) => setNewEvent({...newEvent, location: e.target.value})} required />
                </div>
                <div>
                  <Label htmlFor="image">Image URL</Label>
                  <Input id="image" value={newEvent.image} onChange={(e) => setNewEvent({...newEvent, image: e.target.value})} required />
                </div>
                <div>
                  <Label htmlFor="formLink">Registration Form Link</Label>
                  <Input id="formLink" value={newEvent.formLink} onChange={(e) => setNewEvent({...newEvent, formLink: e.target.value})} required />
                </div>
                <Button type="submit">Add Event</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}

export default UpcomingEvents

