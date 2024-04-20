'use client'

import React from 'react'
import { Card, CardContent } from './ui/card'

type Props = {}

const PopularVenues = (props: Props) => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Explore Popular Venues</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card>
          <img
            alt="Venue 1"
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
            <h3 className="text-xl font-bold mb-2">The Grand Ballroom</h3>
            <p className="text-gray-500">New York, NY</p>
          </CardContent>
        </Card>
        <Card>
          <img
            alt="Venue 2"
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
            <h3 className="text-xl font-bold mb-2">The Loft</h3>
            <p className="text-gray-500">Los Angeles, CA</p>
          </CardContent>
        </Card>
        <Card>
          <img
            alt="Venue 3"
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
            <h3 className="text-xl font-bold mb-2">The Botanical Garden</h3>
            <p className="text-gray-500">Chicago, IL</p>
          </CardContent>
        </Card>
        <Card>
          <img
            alt="Venue 4"
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
            <h3 className="text-xl font-bold mb-2">The Rooftop</h3>
            <p className="text-gray-500">Miami, FL</p>
          </CardContent>
        </Card>
        <Card>
          <img
            alt="Venue 5"
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
            <h3 className="text-xl font-bold mb-2">The Vineyard</h3>
            <p className="text-gray-500">Napa, CA</p>
          </CardContent>
        </Card>
        <Card>
          <img
            alt="Venue 6"
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
            <h3 className="text-xl font-bold mb-2">The Lakehouse</h3>
            <p className="text-gray-500">Seattle, WA</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default PopularVenues