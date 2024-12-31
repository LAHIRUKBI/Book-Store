import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaUserPlus, FaClipboardList } from 'react-icons/fa';

export default function Admin_Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center tracking-wider">
            Admin Dashboard
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">
        {/* Welcome Section */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-blue-700">
            Welcome to the Admin Dashboard
          </h2>
          <p className="mt-2 text-gray-600">
            Manage your employees and keep everything organized at a glance.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Register Employee Card */}
          <div
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
            onClick={() => navigate('/employeeregister')}
          >
            <div className="flex items-center">
              <FaUserPlus className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Register Employee
                </h3>
                <p className="text-gray-600 mt-1">
                  Add new employees to the system easily.
                </p>
              </div>
            </div>
          </div>

          {/* View Employees Card */}
          <div
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
            onClick={() => navigate('/employeeview')}
          >
            <div className="flex items-center">
              <FaUsers className="text-green-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  View Employees
                </h3>
                <p className="text-gray-600 mt-1">
                  Check and manage all registered employees.
                </p>
              </div>
            </div>
          </div>

          {/* View Orders Card */}
          <div
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
            onClick={() => navigate('/order')}
          >
            <div className="flex items-center">
              <FaClipboardList className="text-purple-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  View Orders
                </h3>
                <p className="text-gray-600 mt-1">
                  Check and manage all customer orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}