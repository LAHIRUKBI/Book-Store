import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaUserPlus, FaClipboardList } from "react-icons/fa";

export default function Admin_Home() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-br from-blue-700 to-indigo-600 text-white shadow-xl">
        {/* Profile Section */}
        <div className="p-6 border-b border-indigo-400">
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-indigo-600 font-bold text-xl">
              A
            </div>
            <div>
              <h2 className="text-xl font-semibold">Admin</h2>
              <p className="text-gray-300 text-sm">Admin Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6">
          <ul className="space-y-4">
            <li
              className="flex items-center p-4 hover:bg-indigo-500 rounded-md cursor-pointer transition-all"
              onClick={() => navigate("/employeeregister")}
            >
              <FaUserPlus className="text-white text-lg mr-3" />
              <span className="font-medium">Register Employee</span>
            </li>
            <li
              className="flex items-center p-4 hover:bg-indigo-500 rounded-md cursor-pointer transition-all"
              onClick={() => navigate("/employeeview")}
            >
              <FaUsers className="text-white text-lg mr-3" />
              <span className="font-medium">View Employees</span>
            </li>
            <li
              className="flex items-center p-4 hover:bg-indigo-500 rounded-md cursor-pointer transition-all"
              onClick={() => navigate("/order")}
            >
              <FaClipboardList className="text-white text-lg mr-3" />
              <span className="font-medium">View Orders</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, Admin</h1>
          <p className="text-gray-500">Manage your tasks efficiently.</p>
        </header>

        {/* Cards Section */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Register Employee Card */}
          <div
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => navigate("/employeeregister")}
          >
            <div className="flex items-center space-x-4">
              <FaUserPlus className="text-blue-500 text-4xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Register Employee
                </h3>
                <p className="text-gray-600 mt-2">
                  Add new employees to the system quickly and efficiently.
                </p>
              </div>
            </div>
          </div>

          {/* View Employees Card */}
          <div
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => navigate("/employeeview")}
          >
            <div className="flex items-center space-x-4">
              <FaUsers className="text-green-500 text-4xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  View Employees
                </h3>
                <p className="text-gray-600 mt-2">
                  Browse and manage all registered employees.
                </p>
              </div>
            </div>
          </div>

          {/* View Orders Card */}
          <div
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => navigate("/order")}
          >
            <div className="flex items-center space-x-4">
              <FaClipboardList className="text-purple-500 text-4xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">View Orders</h3>
                <p className="text-gray-600 mt-2">
                  Monitor and manage customer orders effectively.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
