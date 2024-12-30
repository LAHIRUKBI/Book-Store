import React from 'react';

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-brown-800 via-orange-700 to-yellow-600 text-white px-8 py-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-serif font-bold text-yellow-300 transition duration-300">
  Book Haven
</a>


        
        {/* Navigation Links */}
        <div className="flex space-x-8">
          <a href="/" className="text-lg font-medium hover:text-yellow-200 transition duration-300">Home</a>
          <a href="/books" className="text-lg font-medium hover:text-yellow-200 transition duration-300">Books</a>
          <a href="/about" className="text-lg font-medium hover:text-yellow-200 transition duration-300">About Us</a>
          <a href="/contact" className="text-lg font-medium hover:text-yellow-200 transition duration-300">Contact</a>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-4">
          <a
            href="/signup"
            className="bg-yellow-500 text-brown-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Sign Up
          </a>
          <a
            href="/admin"
            className="border border-yellow-500 text-yellow-100 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 hover:text-brown-900 transition duration-300"
          >
            Admin
          </a>
        </div>
      </div>
    </nav>
  );
}
