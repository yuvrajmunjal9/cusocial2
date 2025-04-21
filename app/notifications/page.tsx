'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, AlertCircle } from 'lucide-react'

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New announcement in CS101", time: "2 hours ago" },
    { id: 2, message: "Your post received 10 likes", time: "5 hours ago" },
    { id: 3, message: "Reminder: Assignment due tomorrow", time: "1 day ago" },
  ])

  return (
    <div className="container mx-auto p-4">
      <Card className="overflow-hidden shadow-lg border-t-4 border-blue-500">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600">
          <CardTitle className="flex items-center text-white">
            <Bell className="w-6 h-6 mr-2" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {notifications.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {notifications.map((notification) => (
                <div key={notification.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <p className="text-gray-800">{notification.message}</p>
                  <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No notifications at the moment</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

