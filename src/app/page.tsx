'use client'

import { Code2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(to_bottom_right,_#F5E2D9,_#EFBD8B,_#9C7464,_#CED3DF,_#17456E,_#2F3648)] text-[#2F3648]">
      <div className="text-center px-4">
        <Code2 size={64} className="mx-auto mb-4 text-[#17456E]" />
        <h1 className="text-5xl font-bold mb-4 text-[#17456E]">Marvin Violantes</h1>
        <p className="text-2xl text-[#2F3648]">Website coming soon...</p>
      </div>
    </div>
  )
}
