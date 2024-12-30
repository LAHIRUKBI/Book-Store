import React from 'react';

export default function Navigation() {
  return (
    <nav className="bg-green-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-green-200">
          Tea Factory
        </a>
        
        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="/" className="hover:text-green-400 transition duration-300">Home</a>
          <a href="/signup" className="hover:text-green-400 transition duration-300">Customer</a>
          <a href="/admin" className="hover:text-green-400 transition duration-300">administrator</a>
        </div>
      </div>
    </nav>
  );
}
