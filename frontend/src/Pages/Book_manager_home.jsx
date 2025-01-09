import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaEye, FaBox, FaChartLine, FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';

export default function Stockmanager_home() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [outOfStock, setOutOfStock] = useState(0);
  const navigate = useNavigate();

  // Fetch product data from backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        const products = response.data;
        setTotalProducts(products.length);
        setOutOfStock(products.filter(product => product.stock === 0).length);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Fetch products on component mount

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-between">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center w-full py-12 px-6">
        <div className="max-w-5xl w-full">
          {/* Overview Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold text-teal-600 mb-4">Welcome to the Stock Manager Dashboard</h1>
            <p className="text-lg text-gray-700">Manage your inventory, track stock levels, and add new products effortlessly.</p>
          </section>

          {/* Action Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
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

            {/* View Confirm Orders */}
            <div
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition transform duration-300"
              onClick={() => navigate('/orderconform')}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 opacity-80"></div>
              <div className="relative z-10 flex flex-col items-center justify-center text-white py-10">
                <FaCheckCircle className="text-5xl mb-4" />
                <h2 className="text-2xl font-semibold mb-2">View Confirm Orders</h2>
                <p className="text-sm text-gray-200 text-center">Check all confirmed orders and manage order details effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
