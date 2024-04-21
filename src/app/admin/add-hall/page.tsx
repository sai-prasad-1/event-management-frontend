"use client"
import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/config';

const AddItemForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        categories: '',
        price: '',
        description: '',
        photos: [],
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        const urls = value.split(',').map((url) => url.trim());
        setFormData((prevFormData: any) => ({
            ...prevFormData,
            photos: [...prevFormData.photos, ...urls],
        }));
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Make POST request to backend API
            await axios.post(`${API_BASE_URL+"hall"}`, formData);
            // Reset form data after successful submission
            setFormData({
                name: '',
                location: '',
                categories: '',
                price: '',
                description: '',
                photos: [],
            });
            alert('Item added successfully!');
        } catch (error) {
            console.error('Error adding item:', error);
            alert('Error adding item. Please try again.');
        } finally {
            setLoading(false);
        }
    };
 
    return (
        <div className='flex w-screen h-screen items-center justify-center'>
        <form onSubmit={handleSubmit} className='grid grid-cols-2 w-1/2 gap-6 p-6 bg-gray-200 shadow-lg'>
            <div>
                <label className="text-gray-700 " htmlFor="username">Venue Name</label>
                <input type="text" name="name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" value={formData.name} onChange={handleChange} placeholder="Name" required />
            </div>
            <div>
                <label className="text-gray-700 0" htmlFor="username">Location</label>
                <input type="text" name="location" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" value={formData.location} onChange={handleChange} placeholder="Location" required />

            </div>
            <div>
                <label className="text-gray-700 d" htmlFor="username">Categoery</label>
                <input type="text" name="categories" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" value={formData.categories} onChange={handleChange} placeholder="Categories" required />

            </div>
            <div>
                <label className="text-gray-700 " htmlFor="username">Price</label>

                <input type="number" name="price" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" value={formData.price} onChange={handleChange} placeholder="Price" required />
            </div>

            <div>
                <label className="text-gray-700 " htmlFor="username">Price</label>

                <textarea name="description" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" value={formData.description} onChange={handleChange} placeholder="Description" required />
            </div>
            <div>
                <label className="text-gray-700 " htmlFor="username">Photo URLS</label>

                <textarea name='photos' onChange={handlePhotoChange}  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" value={formData.photos} required />
            
                </div>


            <button type="submit" className='bg-blue-400 px-6 py-2 text-white' disabled={loading}>{loading ? 'Adding...' : 'Add Item'}</button>
        </form>
        </div>
    );
};

export default AddItemForm;
