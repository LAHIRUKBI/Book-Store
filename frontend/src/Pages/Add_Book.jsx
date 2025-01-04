import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Add_product() {
  const [formData, setFormData] = useState({
    mainCategory: '',
    type: '',
    price: '',
    introduction: '',
  });

  const navigate = useNavigate();

  const bookCategories = {
    "Fiction Genres": [
      "Fantasy", "Mystery", "Thriller", "Historical Fiction", "Romance",
    ],
    "Non-Fiction Genres": [
      "Biography", "Self-Help", "Travel", "Science", "Philosophy",
    ],
    "Literary Classics": [
      "Shakespearean Plays", "19th Century Literature", "Modern Classics", "American Literature", "European Literature",
    ],
    "Young Adult and Children's Books": [
      "Middle Grade Fiction", "Young Adult Fantasy", "Children's Picture Books", "Teen Romance", "Adventure Books for Kids",
    ],
    "Specialty and Niche Books": [
      "Cookbooks", "Graphic Novels", "Poetry", "Art and Design", "Photography",
    ],
    "Health and Wellness Books": [
      "Mental Health", "Fitness", "Nutrition", "Mindfulness", "Alternative Medicine",
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the backend to add the new product
      await axios.post('http://localhost:3000/api/products', formData);
      
      alert('Product added successfully!');
      
      // Clear the form data after successful submission
      setFormData({
        mainCategory: '',
        type: '',
        price: '',
        introduction: '',
      });
  
      // Navigate back to the products view
      navigate('/productview');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  

  const handleMainCategoryChange = (e) => {
    const mainCategory = e.target.value;
    setFormData({
      ...formData,
      mainCategory,
      type: '',
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
        Add Your Book to the Catalog
      </h1>
      <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl">
        Welcome to the book catalog! Use this form to add your book to our collection. 
        Fill in the details about your book, select its category, and showcase your literary creation.
      </p>
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Main Book Category
          </label>
          <select
            className="block w-full px-4 py-2 text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.mainCategory}
            onChange={handleMainCategoryChange}
            required
          >
            <option value="" disabled>Select main book category</option>
            {Object.keys(bookCategories).map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {formData.mainCategory && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type of Book
            </label>
            <select
              className="block w-full px-4 py-2 text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              required
            >
              <option value="" disabled>Select book type</option>
              {bookCategories[formData.mainCategory].map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price (in $)
          </label>
          <input
            type="number"
            className="block w-full px-4 py-2 text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Introduction
          </label>
          <textarea
            className="block w-full px-4 py-2 text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Write a brief introduction for your book."
            value={formData.introduction}
            onChange={(e) => setFormData({ ...formData, introduction: e.target.value })}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-medium text-lg shadow-md hover:shadow-lg transition-all"
        >
          Add Book to Catalog
        </button>
      </form>

      <div className="text-center text-gray-600 mt-12">
        <p className="text-md">Join our collection of amazing books!</p>
        <p className="text-sm">Contact us for any inquiries or support.</p>
      </div>
    </div>
  );
}
