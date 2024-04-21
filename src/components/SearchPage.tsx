"use client"
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import { Input } from '@/components/ui/input';
import { API_BASE_URL } from '@/lib/config';

type Hall = {
  id: number;
  name: string;
  location: string;
  categories: string;
  price: number;
  description: string;
  photos: string[];
};

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

export function SearchPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>(''); // State for maximum price
  const { data: halls, error, isLoading } = useSWR<Hall[]>(API_BASE_URL + "hall", fetcher);
  const searchParams = useSearchParams()


  useEffect(() => {
   const search = searchParams.get('query')
    if (search && typeof search === 'string') {
      setSearchTerm(search);
    }
  }, [searchParams]);

  if (error) {
    return <div>Error fetching data</div>;
  }
  if (isLoading) {
    return <div>Loading.......</div>;
  }

  const filteredHalls = halls?.filter((hall) =>
    hall.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hall.categories.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hall.location.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter((hall) =>
    maxPrice === '' || hall.price <= maxPrice
  );

  return (
    <div className="w-full">
      <header className="bg-gray-100 py-6 px-4 md:px-6 flex flex-col md:flex-row md:items-center">
        <div className="relative flex-1 mb-4 md:mb-0">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 " />
          <Input
            className="pl-12 w-full"
            placeholder="Search for products, brands, and more..."
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center mx-4">
          <span className="mr-2">Max Price:</span>
          <Input
            className="w-24"
            type="number"
            min="0"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value !== '' ? parseInt(e.target.value) : '')}
          />
        </div>
      </header>
      <main className="container mx-auto py-8 px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredHalls?.map((hall) => (
          <div key={hall.id} className="rounded-lg overflow-hidden shadow-lg">
            <img
              alt={hall.name}
              className="w-full h-60 object-cover"
              height={300}
              src={hall.photos[0]} // Displaying the first photo
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4 bg-white ">
              <h3 className="font-bold text-lg">{hall.name}</h3>
              <p className="text-sm text-gray-500  line-clamp-2">
                {hall.description}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
