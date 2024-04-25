"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/config';
import { useRouter } from 'next/navigation';

type Props = {}

const Page = (props: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const handleSubmit = async () => {
        setLoading(true);
        if(password!=confirmPassword){
            alert("Paaswords do not match")
        setLoading(false);

            return;
        }
        try {
            const response = await axios.post(API_BASE_URL+'register', { username : email, password, });
            console.log(response.data);
            localStorage.setItem("userId",response.data.id)
            router.push("/")
        } catch (error) {
            // Handle error
            console.error('Error:', error);
        }
        setLoading(false);
    };

    return (
        <div className='w-screeen h-screen flex items-center justify-center'>
            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')" }}></div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        Venue Management
                    </div>

                    <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                        Sign up for an account
                    </p>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="SignupEmailAddress">Email Address</label>
                        <input id="SignupEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="SignupPassword">Password</label>
                        <input id="SignupPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="ConfirmPassword">Confirm Password</label>
                        <input id="ConfirmPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>

                    <div className="mt-6">
                        <button onClick={handleSubmit} disabled={loading} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
