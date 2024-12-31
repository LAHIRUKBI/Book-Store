import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  const confirmLogout = () => {
    localStorage.removeItem("email");
    setLogoutModal(false);
    navigate("/"); 
  };

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-serif font-bold text-white">
          Book Haven
        </a>

        <div className="flex space-x-8">
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

        <div className="relative">
          {email ? (
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
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

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-20">
              <Link
                to={`/employee_profile/${email}`}
                className="block px-4 py-2 hover:bg-teal-100"
              >
                Profile
              </Link>
              <button
                onClick={() => setLogoutModal(true)}
                className="block w-full text-left px-4 py-2 hover:bg-teal-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {logoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-10 rounded-2xl shadow-2xl text-center transform scale-110 transition-transform duration-300 ease-in-out">
            <p className="text-3xl font-bold text-white mb-6">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-center space-x-6">
              <button
                onClick={confirmLogout}
                className="w-32 px-6 py-3 bg-red-500 text-white rounded-lg shadow-xl hover:bg-red-600 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Yes
              </button>
              <button
                onClick={() => setLogoutModal(false)}
                className="w-32 px-6 py-3 bg-gray-300 text-gray-700 rounded-lg shadow-xl hover:bg-gray-400 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
