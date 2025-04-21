import { NextResponse } from 'next/server'

// This would typically be a database call
const reminders: { userId: string; eventId: number; date: string }[] = []

export async function POST(request: Request) {
  const { userId, eventId, date } = await request.json()

  // Add the reminder to our "database"
  reminders.push({ userId, eventId, date })

  // In a real application, you would set up a job to send a notification on the specified date
  console.log(`Reminder set for user ${userId} for event ${eventId} on ${date}`)

  return NextResponse.json({ message: 'Reminder set successfully' })
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
  }

  // Filter reminders for the specific user
  const userReminders = reminders.filter(reminder => reminder.userId === userId)

  return NextResponse.json(userReminders)
}

