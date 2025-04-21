'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PlusCircle } from 'lucide-react'

export default function CreateContentPage() {
  const [content, setContent] = useState('')
  const [mediaType, setMediaType] = useState('none')
  const [mediaUrl, setMediaUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({ content, mediaType, mediaUrl })
    // Reset form
    setContent('')
    setMediaType('none')
    setMediaUrl('')
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="overflow-hidden shadow-lg border-t-4 border-purple-500">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-600">
          <CardTitle className="flex items-center text-white">
            <PlusCircle className="w-6 h-6 mr-2" />
            Create New Content
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="mediaType">Media Type</Label>
              <select
                id="mediaType"
                value={mediaType}
                onChange={(e) => setMediaType(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="none">None</option>
                <option value="image">Image</option>
                <option value="video">Video</option>
                <option value="short-video">Short Video</option>
              </select>
            </div>
            {mediaType !== 'none' && (
              <div>
                <Label htmlFor="mediaUrl">Media URL</Label>
                <Input
                  id="mediaUrl"
                  value={mediaUrl}
                  onChange={(e) => setMediaUrl(e.target.value)}
                  required
                />
              </div>
            )}
            <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white">
              Create Post
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

