"use client"
import Link from "next/link";
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import useSWR from "swr";
import { API_BASE_URL } from "@/lib/config";


type Hall = {
  id: number;
  name: string;
  location: string;
  categories: string;
  price: number;
  description: string;
  photos: string[];
};

const fetcher = (url: string) => fetch(url).then(res => res.json());

type Props = {
  id:number
}

export function VenueDetails(
  props :Props
) {
  const { data, error } = useSWR(`${API_BASE_URL + "hall/" + props.id}`,fetcher);

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data)

  return (
    <div className="flex flex-col gap-12 max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="grid gap-4">
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-500 dark:text-gray-400">{data.location}</p>
              <Link className="text-gray-900 hover:underline dark:text-gray-50" href="#">
                View on Map
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Tags</h3>
              <p className="text-gray-500 dark:text-gray-400">{data.categories}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="text-gray-500 dark:text-gray-400">
                <a className="hover:underline" href="#">
                  (123) 456-7890
                </a>
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                <a className="hover:underline" href="#">
                  info@theballroom.com
                </a>
              </p>
              <Link className="text-gray-900 hover:underline dark:text-gray-50" href="#">
                Visit Website
              </Link>
            </div>
          </div>
        </div>
        <Carousel className="rounded-lg overflow-hidden">
          <CarouselContent>
            {data.photos.map((photo: string | undefined, index:number) => (
              <CarouselItem key={index}>
                <img
                  alt={`Venue Photo ${index + 1}`}
                  className="aspect-video object-cover"
                  height={600}
                  src={photo}
                  width={800}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="grid gap-8">
        <div>
          <h2 className="text-2xl font-bold">About {data.name}</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4">{data.description}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Key Features</h2>
          <ul className="grid gap-4 mt-4">
            <li className="flex items-start gap-4">
              <CheckIcon className="text-gray-900 w-6 h-6 shrink-0 dark:text-gray-50" />
              <div>
                <h3 className="text-lg font-semibold">Elegant Architecture</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  The Grand Ballrooms historic architecture, with its high ceilings, ornate chandeliers, and grand
                  staircase, creates a truly impressive and memorable atmosphere.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckIcon className="text-gray-900 w-6 h-6 shrink-0 dark:text-gray-50" />
              <div>
                <h3 className="text-lg font-semibold">Outdoor Terrace</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  The venues beautifully landscaped outdoor terrace provides a serene and picturesque setting for
                  cocktail receptions, small gatherings, or simply enjoying the fresh air.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckIcon className="text-gray-900 w-6 h-6 shrink-0 dark:text-gray-50" />
              <div>
                <h3 className="text-lg font-semibold">Exceptional Catering</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  The in-house catering team is renowned for their exceptional cuisine and personalized service,
                  ensuring that every event is a culinary delight.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold">Pricing</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            The Grand Ballroom offers a range of pricing options to suit your event needs. Rates are based on the event
            date, guest count, and selected services. Please contact us for a personalized quote.
          </p>
          <Button className="mt-4">Book Now</Button>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props:any) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
