import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaPhoneAlt, FaHome, FaCalendarAlt, FaIdBadge } from 'react-icons/fa'; // Import Font Awesome icons

export default function Employee_register() {
  const [formData, setFormData] = useState({
    companyNumber: '',
    name: '',
    address: '',
    gender: '',
    phoneNumber: '',
    dateOfBirth: '',
    section: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/employees/register', formData);
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8">
      <form className="bg-white shadow-xl rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Registration of Employees</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div>
            {/* Section Field */}
            <div className="mb-6 flex items-center border-b-2 border-gray-300">
              <FaIdBadge className="text-gray-600 mr-3" />
              <select
                id="section"
                name="section"
                className="w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              >
                <option value="">Select Section</option>
                <option value="Stock Manager">Stock Manager</option>
                <option value="Delivery Manager">Delivery Manager</option>
              </select>
            </div>
            <div className="mb-6 flex items-center border-b-2 border-gray-300">
              <FaIdBadge className="text-gray-600 mr-3" />
              <input
                type="text"
                id="companyNumber"
                name="companyNumber"
                placeholder="Enter company ID"
                className="w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6 flex items-center border-b-2 border-gray-300">
              <FaUser className="text-gray-600 mr-3" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                className="w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6 flex items-center border-b-2 border-gray-300">
              <FaHome className="text-gray-600 mr-3" />
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter address"
                className="w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div className="mb-6 flex items-center border-b-2 border-gray-300">
              <select
                id="gender"
                name="gender"
                className="w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-6 flex items-center border-b-2 border-gray-300">
              <FaPhoneAlt className="text-gray-600 mr-3" />
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter phone number"
                className="w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6 flex items-center border-b-2 border-gray-300">
              <FaCalendarAlt className="text-gray-600 mr-3" />
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors shadow-md"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
    </div>
  );
}
