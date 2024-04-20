
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import PopularVenues from "./popular-venues"

export function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">

      <main className="flex-1">
        <div className="absolute top-0 z-50 left-0 right-0">
          <header className="bg-white text-black py-4 px-6 flex items-center justify-between m-5">
            <Link className="flex items-center gap-2" href="#">
              <CalendarIcon className="h-6 w-6" />
              <span className="text-xl font-bold">Venue Booking</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link className="hover:underline" href="#">
                Explore Venues
              </Link>
              <Link className="hover:underline" href="#">
                About
              </Link>
              <Link className="hover:underline" href="#">
                Pricing
              </Link>
              <Link className="hover:underline" href="#">
                Login
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-gray-900 hover:bg-gray-200 transition-colors"
                href="#"
              >
                Sign Up
              </Link>
            </nav>
            <button className="md:hidden">
              <MenuIcon className="h-6 w-6" />
            </button>
          </header>
        </div>
        <section className="relative h-[600px] md:h-[700px] lg:h-[900px]">
          <Image alt="Venue Hero" className="object-cover" layout="fill" src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVudWV8ZW58MHx8MHx8fDA%3D" />
          <div className="absolute inset-0 bg-gray-900/70 flex flex-col items-center justify-center px-6 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Find Your Perfect Event Venue</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">
              Discover unique spaces for weddings, conferences, parties, and more
            </p>
            <div className="bg-white rounded-md shadow-lg w-full max-w-3xl p-4 flex items-center gap-4">
              <div className="flex-1">
                <input className="w-full border-none focus:ring-0 text-gray-900" placeholder="Location" type="text" />
              </div>
              <div className="flex-1">
                <select className="w-full border-none focus:ring-0 text-gray-900 bg-transparent" defaultValue="">
                  <option value="" disabled>Select Event Type</option>
                  <option value="birthday">Birthday</option>
                  <option value="wedding">Wedding</option>
                  <option value="conference">Conference</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="flex-1">
                <input className="w-full border-none focus:ring-0 text-gray-900" placeholder="Date" type="text" />
              </div>
              <Button className="flex-none">Explore Now</Button>
            </div>
          </div>
        </section>


        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Top Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card>
                <img
                  alt="Event 1"
                  className="rounded-t-md"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-black">Wedding Celebration</h3>
                  <p className="text-gray-500 mb-4">June 10, 2023</p>
                  <p className="text-gray-700">Join us for a beautiful wedding celebration at our stunning venue.</p>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Event 2"
                  className="rounded-t-md"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">Corporate Conference</h3>
                  <p className="text-gray-500 mb-4">July 15, 2023</p>
                  <p className="text-gray-700">Attend our annual corporate conference in our state-of-the-art venue.</p>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Event 3"
                  className="rounded-t-md"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">Birthday Party</h3>
                  <p className="text-gray-500 mb-4">August 20, 2023</p>
                  <p className="text-gray-700">Celebrate a special birthday with us in our beautiful venue.</p>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Event 4"
                  className="rounded-t-md"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">Charity Gala</h3>
                  <p className="text-gray-500 mb-4">September 5, 2023</p>
                  <p className="text-gray-700">Join us for a night of giving back at our elegant venue.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
<PopularVenues/>
      </main>
      <footer className="bg-gray-900 text-white py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <p>© 2023 Venue Booking. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link className="hover:underline" href="#">
              Terms
            </Link>
            <Link className="hover:underline" href="#">
              Privacy
            </Link>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

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
