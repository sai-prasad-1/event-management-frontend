'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/config';
import { useRouter } from 'next/navigation';

const Page = ({ params }: { params: { id: number } }) => {
  const [formData, setFormData] = useState({
    hallId: params.id,
    time: '',
    userId: 0,
    theme: '',
    timestamp: '',
    phone : 0,
    address : ''
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    console.log(formData)

    const userId = localStorage.getItem("userId")
    if (!userId) {
      alert("PLease Login TO Book")
      router.push("/auth/login")
    } else {
      setLoading(true)
      e.preventDefault();
      try {
        setFormData({ ...formData, userId: parseInt(userId, 10)! })
        await axios.post(API_BASE_URL+'booking', formData);
        setLoading(false)
        router.back()
      } catch (error) {
        alert('Failed to create booking.');
        setLoading(false)
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className='flex flex-col w-screen h-screen items-center justify-center'>
      <h1>Booking Form</h1>
      <form onSubmit={handleSubmit} className='grid grid-cols-2 w-1/2 gap-6 p-6 bg-gray-200 shadow-lg'>

        <div>
          <label>Time:</label>
          <input
            type="number"
            name="time"
            value={formData.time}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Theme:</label>
          <input
            type="text"
            name="theme"
            value={formData.theme}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Timestamp:</label>
          <input
            type="datetime-local"
            name="timestamp"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            value={formData.timestamp}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='bg-blue-400 px-6 py-2 text-white w-auto' disabled={loading}>{loading ? 'booking...' : 'Book Now'}</button>
      </form>
    </div>
  );
};

export default Page;
