import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()
  const { name, id, password, role } = body

  // Here you would typically create a new user in your database
  // For this example, we'll just simulate a successful signup
  const user = {
    id,
    name,
    role,
  }

  // In a real application, you would implement proper user creation and authentication here
  // For example, you might use a library like NextAuth.js

  return NextResponse.json({ user })
}

