"use client"
import Link from 'next/link'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  let userId
  if (typeof window !== "undefined") {
    let userId = localStorage.getItem("userId");
    // Use userId and userName as needed
  }
  

    const handleLogout=()=>{
        localStorage.removeItem("userId")
        localStorage.removeItem("userName")
    }
  return (
    <header className="bg-white text-black py-4 px-6 flex items-center justify-between m-5">
            <Link className="flex items-center gap-2" href="#">
              <CalendarIcon className="h-6 w-6" />
              <span className="text-xl font-bold">Venue Booking</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link className="hover:underline" href="/find-hall">
                Explore Venues
              </Link>
              <Link className="hover:underline" href="#">
                About
              </Link>

{
    !userId ?<>
              <Link className="hover:underline  border-blue-700 px-4 border-2 py-1" href="/auth/login">
                Login
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-md bg-blue-700 text-white px-4 py-2  hover:bg-gray-200 transition-colors"
                href="/auth/signup"
              >
                Sign Up
              </Link>
              </>:<button
                className="inline-flex items-center justify-center rounded-md bg-blue-700 text-white px-4 py-2  hover:bg-gray-200 transition-colors"
               onClick={handleLogout}
              >
                LogOut
              </button>
}
            </nav>
            <button className="md:hidden">
              <MenuIcon className="h-6 w-6" />
            </button>
          </header>
  )
}

export default NavBar



function CalendarIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    )
  }
  
  
  function MenuIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }
  