'use client'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, MessageSquare, Share2, Plus, Image, Video, FileText } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const ContentSharing = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "John Doe",
      avatar: "/placeholder-avatar.jpg",
      department: "Computer Science, Year 3",
      content: "Just finished my machine learning project! Check it out:",
      media: { type: "image", url: "/placeholder.svg?height=200&width=400" },
      likes: 24,
      comments: 8,
    },
  ])

  const [newPost, setNewPost] = useState({
    content: '',
    mediaType: 'none',
    mediaUrl: '',
  })

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault()
    setPosts([
      {
        id: posts.length + 1,
        author: "Current User",
        avatar: "/placeholder-avatar.jpg",
        department: "Student",
        content: newPost.content,
        media: newPost.mediaType !== 'none' ? { type: newPost.mediaType, url: newPost.mediaUrl } : null,
        likes: 0,
        comments: 0,
      },
      ...posts,
    ])
    setNewPost({ content: '', mediaType: 'none', mediaUrl: '' })
  }

  return (
    <Card className="overflow-hidden shadow-lg border-t-4 border-pink-500">
      <CardHeader className="bg-gradient-to-r from-pink-500 to-rose-600">
        <CardTitle className="flex items-center text-white">
          <Share2 className="w-6 h-6 mr-2" />
          Share Your Work
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white">
              <Plus className="w-4 h-4 mr-2" /> Create Post
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Post</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddPost} className="space-y-4">
              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="mediaType">Media Type</Label>
                <select
                  id="mediaType"
                  value={newPost.mediaType}
                  onChange={(e) => setNewPost({...newPost, mediaType: e.target.value})}
                  className="w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="none">None</option>
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                  <option value="short-video">Short Video</option>
                </select>
              </div>
              {newPost.mediaType !== 'none' && (
                <div>
                  <Label htmlFor="mediaUrl">Media URL</Label>
                  <Input
                    id="mediaUrl"
                    value={newPost.mediaUrl}
                    onChange={(e) => setNewPost({...newPost, mediaUrl: e.target.value})}
                    required
                  />
                </div>
              )}
              <Button type="submit">Post</Button>
            </form>
          </DialogContent>
        </Dialog>
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center mb-4">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarImage src={post.avatar} />
                    <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-800">{post.author}</h3>
                    <p className="text-sm text-gray-500">{post.department}</p>
                  </div>
                </div>
                <p className="mb-4 text-gray-700">{post.content}</p>
                {post.media && (
                  <div className="mb-4">
                    {post.media.type === 'image' && (
                      <img src={post.media.url} alt="Post content" className="w-full rounded-md" />
                    )}
                    {post.media.type === 'video' && (
                      <video src={post.media.url} controls className="w-full rounded-md" />
                    )}
                    {post.media.type === 'short-video' && (
                      <video src={post.media.url} controls loop className="w-full rounded-md max-h-96" />
                    )}
                  </div>
                )}
                <div className="flex justify-between text-gray-500">
                  <Button variant="ghost" size="sm" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50">
                    <ThumbsUp className="w-4 h-4 mr-1" /> {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50">
                    <MessageSquare className="w-4 h-4 mr-1" /> {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50">
                    <Share2 className="w-4 h-4 mr-1" /> Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ContentSharing

