import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaEye } from 'react-icons/fa';

export default function Stockmanager_home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-between">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg py-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-wide">Stock Manager Dashboard</h1>
          <p className="mt-2 text-lg text-gray-200">
            Welcome to the Stock Manager Dashboard! Here, you can easily manage your inventory, view existing products, and add new products to your collection.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center w-full py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl w-full">
          {/* Add Product */}
          <div
            className="group relative bg-black rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition transform duration-300"
            onClick={() => navigate('/addbook')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-80"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-white py-10">
              <FaPlus className="text-5xl mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Add Product</h2>
              <p className="text-sm text-gray-200 text-center">Add new products to the inventory. Easily manage the flow of products and keep your stock up-to-date.</p>
            </div>
          </div>

          {/* View Products */}
          <div
            className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition transform duration-300"
            onClick={() => navigate('/productview')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-700 opacity-80"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-white py-10">
              <FaEye className="text-5xl mb-4" />
              <h2 className="text-2xl font-semibold mb-2">View Products</h2>
              <p className="text-sm text-gray-200 text-center">View all the products in your inventory. Track product quantities, details, and more.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 py-4 text-center text-gray-300">
        <p className="text-sm">&copy; 2024 Stock Manager System. All rights reserved.</p>
      </footer>
    </div>
  );
}
