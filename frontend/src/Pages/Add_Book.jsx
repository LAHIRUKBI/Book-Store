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
      await axios.post('http://localhost:3000/api/products', formData);

      alert('Product added successfully!');

      setFormData({
        mainCategory: '',
        type: '',
        price: '',
        introduction: '',
      });

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
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-10">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add Your Book to the Catalog
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Fill out the form below to showcase your book in our catalog.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Main Book Category
            </label>
            <select
              className="block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-blue-400 focus:outline-none"
              value={formData.mainCategory}
              onChange={handleMainCategoryChange}
              required
            >
              <option value="" disabled>
                Select main book category
              </option>
              {Object.keys(bookCategories).map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {formData.mainCategory && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type of Book
              </label>
              <select
                className="block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-blue-400 focus:outline-none"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                required
              >
                <option value="" disabled>
                  Select book type
                </option>
                {bookCategories[formData.mainCategory].map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price (in $)
            </label>
            <input
              type="number"
              className="block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-blue-400 focus:outline-none"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Introduction
            </label>
            <textarea
              className="block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-blue-400 focus:outline-none"
              rows="4"
              placeholder="Write a brief introduction for your book."
              value={formData.introduction}
              onChange={(e) => setFormData({ ...formData, introduction: e.target.value })}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg shadow hover:bg-blue-700 transition-all"
          >
            Add Book to Catalog
          </button>
        </form>
      </div>

      <div className="text-center text-gray-600 mt-6">
        <p className="text-md">Join our diverse collection of books!</p>
        <p className="text-sm">Need help? Contact us for support.</p>
      </div>
    </div>
  );
}
