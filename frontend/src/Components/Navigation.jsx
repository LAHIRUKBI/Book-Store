import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);  // Mobile menu toggle
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/"); 
  };

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-serif font-bold text-white">
          Book Haven
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop links */}
        <div className={`flex space-x-8 ${menuOpen ? 'block' : 'hidden'} lg:flex`}>
          <Link to="/" className="text-lg font-medium hover:text-teal-200">
            Home
          </Link>
          {email && (
            <Link to="/books" className="text-lg font-medium hover:text-teal-200">
              Books
            </Link>
          )}
          <Link to="/about_Us" className="text-lg font-medium hover:text-teal-200">
            About Us
          </Link>
          <Link to="/contact" className="text-lg font-medium hover:text-teal-200">
            Contact
          </Link>
        </div>

        {/* User profile / login buttons */}
        <div className="relative">
          {email ? (
            <button
              onClick={() => navigate(`/employee_profile/${email}`)}
              className="text-lg font-semibold px-4 py-2 rounded-md bg-teal-600 shadow-md"
            >
              Welcome, <span className="font-bold">{email}</span>
            </button>
          ) : (
            <div className="flex space-x-4">
              <Link
                to="/signup"
                className="bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700"
              >
                Sign Up
              </Link>
              <Link
                to="/Shop_workers_Login"
                className="border border-teal-600 text-teal-100 px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 hover:text-white"
              >
                Admin
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
