"use client"
import { API_BASE_URL } from '@/lib/config';
import React from 'react';
import useSWR from 'swr';

type Booking = {
    id: number;
    hallId: number;
    time: number;
    userId: number;
    theme: string;
    timestamp: string;
    phone: number;
    address: string;
};

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Page = () => {
    const { data, error } = useSWR<Booking[]>(API_BASE_URL + 'booking', fetcher);

    if (error) return <div>Error loading data</div>;
    if (!data) return <div>Loading...</div>;

    console.log(data)

    return (
        <div>
            <h1 className='font-bold text-xl text-center'>Booking List</h1>
            <ul>
                {data.map(booking => (
                    <li key={booking.id} className='flex items-center justify-evenly  bg-gray-100 my-4 px-4 py-6 border border-gray-300 rounded-xl mx-3'>
                        <div className='flex items-center justify-center'>Hall ID: <span className='ml-2'>{booking.hallId}</span></div>
                        <div className='flex    items-center justify-center'>Time: <span className='ml-2'>{booking.time}</span></div>
                        <div className='flex   items-center justify-center'>User ID: <span className='ml-2'>{booking.userId}</span></div>
                        <div className='flex   items-center justify-center'>Theme:  <span className='ml-2'>{booking.theme}</span></div>
                        <div className='flex   items-center justify-center'>Timestamp:  <span className='ml-2'>{booking.timestamp}</span></div>
                        <div className='flex   items-center justify-center'>Phone:  <span className='ml-2'>{booking.phone}</span></div>
                        <div className='flex   items-center justify-center'>Address:  <span className='ml-2'>{booking.address}</span></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;
