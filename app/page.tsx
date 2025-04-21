import AnnouncementSection from './components/AnnouncementSection'
import NotificationBar from './components/NotificationBar'
import ContentSharing from './components/ContentSharing'
import UpcomingEvents from './components/UpcomingEvents'
import { ProfileCard } from './components/ProfileCard'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <NotificationBar />
      <div className="flex-1 p-4 space-y-6 max-w-7xl mx-auto w-full">
        <div className="mb-6">
          <ProfileCard />
        </div>
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">Welcome to CU Social</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnnouncementSection />
          <UpcomingEvents />
        </div>
        <ContentSharing />
      </div>
    </div>
  )
}

