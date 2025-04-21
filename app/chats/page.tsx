import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from 'lucide-react'

export default function ChatsPage() {
  return (
    <div className="flex h-full">
      <div className="w-1/3 border-r">
        <Card>
          <CardHeader>
            <CardTitle>Chats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {['Alice Smith', 'Bob Johnson', 'Charlie Brown'].map((name) => (
                <div key={name} className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarImage src={`/placeholder-avatar.jpg`} />
                    <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-sm text-gray-500">Last message...</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          <div className="flex justify-start">
            <div className="bg-gray-200 rounded-lg p-2 max-w-[70%]">
              <p>Hey, how's your project going?</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white rounded-lg p-2 max-w-[70%]">
              <p>It's going well! Just finished the main algorithm.</p>
            </div>
          </div>
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center">
            <Input placeholder="Type a message..." className="flex-1 mr-2" />
            <Button size="icon"><Send className="w-4 h-4" /></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

