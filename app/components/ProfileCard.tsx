import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function ProfileCard() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="relative h-32 bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="absolute -bottom-12 left-4">
          <Avatar className="w-24 h-24 border-4 border-white">
            <AvatarImage src="/placeholder-avatar.jpg" alt="User avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="pt-16 pb-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-sm text-gray-500">Computer Science, Year 3</p>
          </div>
          <Button variant="outline">Edit Profile</Button>
        </div>
        <p className="text-gray-700 mb-4">
          Passionate about AI and machine learning. Always looking for new projects and collaborations!
        </p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>500 Followers</span>
          <span>250 Following</span>
          <span>50 Posts</span>
        </div>
      </CardContent>
    </Card>
  )
}

