import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Megaphone, Plus } from 'lucide-react'

const AnnouncementSection = () => {
  return (
    <Card className="overflow-hidden shadow-lg border-t-4 border-indigo-500">
      <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600">
        <CardTitle className="flex items-center text-white">
          <Megaphone className="w-6 h-6 mr-2" />
          Announcements
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-200">
          <div className="p-4 bg-yellow-50 hover:bg-yellow-100 transition-colors">
            <h3 className="font-semibold text-yellow-800">Exam Schedule Update</h3>
            <p className="text-sm text-yellow-700">The final exam schedule has been posted. Please check your student portal for details.</p>
          </div>
          <div className="p-4 bg-blue-50 hover:bg-blue-100 transition-colors">
            <h3 className="font-semibold text-blue-800">Campus Event: Tech Fair</h3>
            <p className="text-sm text-blue-700">Join us this Friday for the annual Tech Fair in the Student Union building.</p>
          </div>
        </div>
        <div className="p-4">
          <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white">
            <Plus className="w-4 h-4 mr-2" /> Create Announcement
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default AnnouncementSection

