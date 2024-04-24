"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/config';
import { useRouter } from 'next/navigation';


const Page = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const router = useRouter()

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    axios.post(API_BASE_URL + 'login', formData).then((response) => {
      localStorage.setItem("userId",response.data.id)
      localStorage.setItem("userName",response.data.username)
      router.push("/")
    }).catch((error) => {
      setLoading(false); // Set loading state to false
      alert(error.response.data); // Display the error message to the user
      console.error('Error:', error); // Log the error for debugging purposes
    });
    
    
  };

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-gray-200'>
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            Venue Management
          </div>

          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 ">Welcome Back</h3>

          <p className="mt-1 text-center text-gray-500 ">Login or create account</p>

          <form onSubmit={handleSubmit}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="username"
                placeholder="Email Address"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              
              <button
                type="submit"
                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Sign In'}
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
          <span className="text-sm text-gray-600 ">Don't have an account? </span>

          <a href="#" className="mx-2 text-sm font-bold text-blue-500  hover:underline">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Page;
