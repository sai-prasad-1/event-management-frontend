
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import PopularVenues from "./popular-venues"
import NavBar from "./ui/NavBar"

export function Landing() {
  const dummyData = [
    {
      "title": "Wedding",
      "tag": "wedding",
      "description": " A wedding is the ceremony of getting married. ",
      "image": "https://images.pexels.com/photos/56926/pexels-photo-56926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "title": "Birthday",
      "tag": "birthday",
      "description": "Thinking of you on your birthday and wishing you everything happy.",
      "image": "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title": "Party",
      "tag": "party",
      "description": "Enjoy oneself at a party or other lively gathering, typically with drinking and music.",
      "image": "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title": "Baptism",
      "tag": "baptism",
      "description": "The sacrament of admission to the church",
      "image": "https://images.pexels.com/photos/10630343/pexels-photo-10630343.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ]
  return (
    <div className="flex flex-col min-h-[100dvh]">

      <main className="flex-1">
        <div className="absolute top-0 z-50 left-0 right-0">
          <NavBar/>
        </div>
        <section className="relative h-[600px] md:h-[700px] lg:h-[900px]">
          <Image alt="Venue Hero" className="object-cover" layout="fill" src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVudWV8ZW58MHx8MHx8fDA%3D" />
          <div className="absolute inset-0 bg-gray-900/70 flex flex-col items-center justify-center px-6 text-white">
            <div className="flex flex-col items-center justify-center px-6 text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Find Your Perfect Event Venue</h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8">
                Discover unique spaces for weddings, conferences, parties, and more
              </p>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 z-[100] w-full  my-7 flex justify-end mx-8"><div className="p-4">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">ContachUs</h2>
              <p className="mt-2 text-gray-500 ">867987643546873554867.</p>
              <p className="mt-2 text-blue-500 ">hello@merakiui.com</p>
            </div>
          </div> </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Top Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {dummyData.map((item, index) => (
                <Card key={index}>
                  <Link href={`/find-venue?query=${item.tag}`}>
                    <img
                      alt="Event 1"
                      className="rounded-t-md"
                      height={250}
                      src={item.image}
                      style={{
                        aspectRatio: "400/250",
                        objectFit: "cover",
                      }}
                      width={400}
                    />
                  </Link>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
                    <p className="text-gray-500 mb-4">June 10, 2023</p>
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}



            </div>
          </div>
        </section>
        <PopularVenues />
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

