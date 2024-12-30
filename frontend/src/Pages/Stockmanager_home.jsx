import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Stockmanager_home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-between">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg py-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-wide">Stock Manager Dashboard</h1>
          <p className="mt-2 text-lg text-gray-200">Manage your inventory with ease and efficiency</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="grid grid-cols-2 gap-6 max-w-5xl p-6">
          {/* Add Product */}
          <div
            className="group relative bg-blue-600 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition transform duration-300"
            onClick={() => navigate('/addbook')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-80"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-white py-10">
              
              <h2 className="text-2xl font-semibold">Add Book</h2>
              <p className="text-sm text-gray-200">Add new products to the inventory.</p>
            </div>
          </div>

          {/* Add Stock */}
          <div
            className="group relative bg-green-600 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition transform duration-300"
            onClick={() => navigate('/addstock')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 opacity-80"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-white py-10">
              
              <h2 className="text-2xl font-semibold">Add Stock</h2>
              <p className="text-sm text-gray-200">Add and manage stock levels.</p>
            </div>
          </div>

          {/* View Products */}
          <div
            className="group relative bg-yellow-600 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition transform duration-300"
            onClick={() => navigate('/productview')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-700 opacity-80"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-white py-10">
              
              <h2 className="text-2xl font-semibold">View Products</h2>
              <p className="text-sm text-gray-200">See all the products in your inventory.</p>
            </div>
          </div>

          {/* View Stocks */}
          <div
            className="group relative bg-purple-600 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition transform duration-300"
            onClick={() => navigate('/stocksview')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 opacity-80"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-white py-10">
              
              <h2 className="text-2xl font-semibold">View Stocks</h2>
              <p className="text-sm text-gray-200">Review and manage stock details.</p>
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
