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
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center border-b pb-4">Employee Registration</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-md shadow">
                <FaIdBadge className="text-gray-600" />
                <select
                  id="section"
                  name="section"
                  className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={handleChange}
                >
                  <option value="">Select Section</option>
                  <option value="Book Manager">Book Manager</option>
                  <option value="Delivery Manager">Delivery Manager</option>
                </select>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-md shadow">
                <FaIdBadge className="text-gray-600" />
                <input
                  type="text"
                  id="companyNumber"
                  name="companyNumber"
                  placeholder="Enter Company ID"
                  className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-md shadow">
                <FaUser className="text-gray-600" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-md shadow">
                <FaHome className="text-gray-600" />
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter Address"
                  className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-md shadow">
                <select
                  id="gender"
                  name="gender"
                  className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-md shadow">
                <FaPhoneAlt className="text-gray-600" />
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter Phone Number"
                  className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-md shadow">
                <FaCalendarAlt className="text-gray-600" />
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors shadow-lg text-lg font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
