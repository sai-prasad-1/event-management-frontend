"use client"

import React from 'react';
import { Card, CardContent } from './ui/card';
import Link from 'next/link';
import useSWR from 'swr';
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

const PopularVenues = () => {
  const { data: halls, error } = useSWR<Hall[]>(API_BASE_URL+"hall", fetcher);

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Explore Popular Venues</h2>
        {!halls ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {halls.slice(0,8).map((hall) => (
              <Card key={hall.id}>
                <Link href={`/venue/${hall.id}`}>
                  <img
                    alt={hall.name}
                    className="rounded-t-md"
                    height={250}
                    src={hall.photos[0]} // Displaying the first photo
                    style={{
                      aspectRatio: '400/250',
                      objectFit: 'cover',
                    }}
                    width={400}
                  />
                </Link>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-black">{hall.name}</h3>
                  <p className="text-gray-800 underline">{hall.location}</p>
                  <p className="text-gray-500">{hall.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularVenues;
