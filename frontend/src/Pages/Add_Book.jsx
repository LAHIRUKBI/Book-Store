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
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 drop-shadow-md">
        Add Your Book to the Catalog
      </h1>
      <p className="text-lg text-gray-700 text-center mb-6 max-w-3xl">
        Welcome to the book catalog! Use this form to add your book to our collection. 
        Simply select a category, fill in the details about your book, and showcase your literary creation to a broader audience.
      </p>
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-xl shadow-xl space-y-6 border border-gray-300"
      >
        <label className="block">
          <span className="text-blue-600 font-semibold">Main Book Category</span>
          <select
            className="form-select mt-2 block w-full rounded-lg border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.mainCategory}
            onChange={handleMainCategoryChange}
            required
          >
            <option value="" disabled>Select main book category</option>
            {Object.keys(bookCategories).map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </label>

        {formData.mainCategory && (
          <label className="block">
            <span className="text-blue-600 font-semibold">Type of Book</span>
            <select
              className="form-select mt-2 block w-full rounded-lg border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              required
            >
              <option value="" disabled>Select book type</option>
              {bookCategories[formData.mainCategory].map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </label>
        )}

        <label className="block">
          <span className="text-blue-600 font-semibold">Price (in $)</span>
          <input
            type="number"
            className="form-input mt-2 block w-full rounded-lg border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
          />
        </label>

        <label className="block">
          <span className="text-blue-600 font-semibold">Introduction</span>
          <textarea
            className="form-textarea mt-2 block w-full rounded-lg border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="3"
            placeholder="Write a brief introduction for your book."
            value={formData.introduction}
            onChange={(e) => setFormData({ ...formData, introduction: e.target.value })}
            required
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all"
        >
          Add Book to Catalog
        </button>
      </form>
    </div>
  );
}
