// Navigation.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const username = localStorage.getItem('username');

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-serif font-bold text-white transition duration-300">
          Book Haven
        </a>

        <div className="flex space-x-8">
          <Link to="/" className="text-lg font-medium hover:text-teal-200 transition duration-300">Home</Link>
          <Link to="/books" className="text-lg font-medium hover:text-teal-200 transition duration-300">Books</Link>
          <Link to="/about" className="text-lg font-medium hover:text-teal-200 transition duration-300">About Us</Link>
          <Link to="/contact" className="text-lg font-medium hover:text-teal-200 transition duration-300">Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          {username && (
            <Link
              to={`/employee_profile/${username}`} // Link to the profile page
              className="text-lg font-semibold text-white px-4 py-2 rounded-md bg-teal-600 shadow-md"
            >
              Welcome, <span className="font-bold">{username.split('@')[0]}</span>
            </Link>
          )}
          <Link to="/signup" className="bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 transition duration-300">Sign Up</Link>
          <Link to="/Shop_workers_Login" className="border border-teal-600 text-teal-100 px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition duration-300">Admin</Link>
        </div>
      </div>
    </nav>
  );
}
