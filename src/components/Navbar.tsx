"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession()

  const handleLogout = () => {
    signOut()
  }

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link href="/">
        <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8 cursor-pointer" />
      </Link>
      <span className="text-lg font-bold">Website</span>
      {session ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      ) : (
        <Link href="/auth/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </Link>
      )}
    </div>
  )
}

export default Navbar