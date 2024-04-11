'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function MiniProfile() {
  const { data: session } = useSession()
  return (
    <div className='flex items-center justify-between mt-14 w-full  ml-10'>
      <img src={session?.user?.image || '/insta-logo.webp'} alt={`${session?.user?.name} profile pic` || 'Insta Logo'} className='w-16 h-16 rounded-full border  p-[2px]' />
      <div className="flex-1 ml-4">
        <h2 className='font-bold'> {session?.user?.username} </h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      {
        session ? (
          <button className='text-blue-500 text-sm font-semibold' onClick={()=>signOut()}>
            Sign Out
          </button>
        ) : (
          <button className='text-blue-500 text-sm font-semibold' onClick={()=> signIn()}> 
          Log In
          </button>
        )
      }
    </div>
  )
}
