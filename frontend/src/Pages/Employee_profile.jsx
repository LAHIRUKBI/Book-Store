import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function EmployeeProfile() {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const employeeData = JSON.parse(userData);
      setEmployee(employeeData);
      setLoading(false);
    } else {
      console.error("No user data found in localStorage.");
      setLoading(false);
    }
  }, []);

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  if (loading) {
    return <div className="text-center text-xl font-semibold">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 via-white to-gray-100 py-12 px-6">
      <div className="bg-white shadow-xl rounded-lg p-8 w-96 text-center">
        <FaUserCircle className="text-6xl text-gray-500 mb-6 mx-auto" />
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Employee Profile</h1>
        <p className="text-gray-700 mb-4">
          <strong>Email:</strong> {employee.email}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Phone:</strong> {employee.phone}
        </p>

        <button
          onClick={handleLogout}
          className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition duration-200"
        >
          LOGOUT
        </button>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-xl font-semibold mb-4">Are you sure you want to log out?</h2>
            <div className="flex justify-between gap-4">
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
              >
                Yes
              </button>
              <button
                onClick={cancelLogout}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
