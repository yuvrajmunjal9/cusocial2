'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from '../contexts/AuthContext'

export default function GroupsPage() {
  const { user } = useAuth()
  const [groups, setGroups] = useState([
    { id: 1, name: 'CS101: Intro to Programming', members: 32, canJoin: true },
    { id: 2, name: 'MATH202: Linear Algebra', members: 28, canJoin: false },
    { id: 3, name: 'ENG105: Academic Writing', members: 35, canJoin: true },
  ])

  const isTeacherOrAdmin = user && (user.role === 'teacher' || user.role === 'admin')

  const handleJoinGroup = (groupId: number) => {
    // Here you would typically make an API call to join the group
    // For this example, we'll just update the local state
    setGroups(groups.map(group => 
      group.id === groupId ? { ...group, members: group.members + 1, canJoin: false } : group
    ))
  }

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Class Groups</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {isTeacherOrAdmin && (
              <Button className="w-full">Create New Group</Button>
            )}
            <div className="space-y-2">
              {groups.map((group) => (
                <div key={group.id} className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-md cursor-pointer">
                  <div className="flex items-center">
                    <Avatar className="w-10 h-10 mr-3">
                      <AvatarImage src={`/placeholder-avatar.jpg`} />
                      <AvatarFallback>{group.name.split(':')[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{group.name}</h3>
                      <p className="text-sm text-gray-500">{group.members} members</p>
                    </div>
                  </div>
                  {group.canJoin ? (
                    <Button variant="outline" size="sm" onClick={() => handleJoinGroup(group.id)}>Join</Button>
                  ) : (
                    <span className="text-sm text-gray-500">Joined</span>
                  )}
                  {isTeacherOrAdmin && (
                    <Button variant="outline" size="sm">Manage</Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

