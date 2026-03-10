'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'

export default function MainPage() {
  const { user } = useUser()
  const [sessionId, setSessionId] = useState<string>('')

  useEffect(() => {
    if (user) {
      setSessionId(crypto.randomUUID())
    }
  }, [user])

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex h-screen">
      
      {/* LEFT SIDE - PDF Upload */}
      <div className="w-1/2 border-r flex flex-col items-center justify-center p-10">
        <h2 className="text-xl font-semibold mb-4">Upload PDF</h2>

        <input type="file" accept="application/pdf" />

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Upload
        </button>
      </div>

      {/* RIGHT SIDE - Chat */}
      <div className="w-1/2 flex flex-col justify-between p-6">

        <div className="flex-1 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Chat with AI</h2>

          {/* Chat messages */}
          <div className="space-y-2">
            <p className="bg-gray-200 p-2 rounded w-fit">
              Hello! Upload a PDF to start chatting.
            </p>
          </div>
        </div>

        {/* Chat input */}
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="Ask something..."
            className="flex-1 border rounded px-3 py-2"
          />

          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            Send
          </button>
        </div>

      </div>

    </div>
  )
}