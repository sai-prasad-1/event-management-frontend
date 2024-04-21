import { VenueDetails } from '@/components/venue-details'
import React from 'react'

type Props = {}

export default function Page({ params }: { params: { id: number } }) {
    return <div>
        <VenueDetails id={params.id} / >
    </div>
  }

