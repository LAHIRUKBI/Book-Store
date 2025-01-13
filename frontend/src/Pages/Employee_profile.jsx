import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaRegClock,
} from "react-icons/fa";

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

  const handleMyPayments = () => {
    navigate("/mypayments");
  };

  if (loading) {
    return <div className="text-center text-xl font-semibold">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-gray-100 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-green-400 p-8 text-white">
            <div className="flex items-center gap-6">
              <FaUserCircle className="text-8xl" />
              <div>
                <h1 className="text-3xl font-bold">Welcome, {employee.email}!</h1>
                <p className="text-sm mt-1">We're glad to have you here.</p>
              </div>
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Information */}
            <div className="bg-gray-50 rounded-lg shadow p-6 text-gray-800">
              <h2 className="text-lg font-bold mb-4">Profile Details</h2>
              <p className="flex items-center gap-2 mb-4">
                <FaEnvelope className="text-gray-500" />
                <strong>Email:</strong> {employee.email}
              </p>
              <p className="flex items-center gap-2 mb-4">
                <FaPhone className="text-gray-500" />
                <strong>Phone:</strong> {employee.phone}
              </p>
              <p className="flex items-center gap-2 mb-4">
                <FaMapMarkerAlt className="text-gray-500" />
                <strong>Address:</strong> {employee.address}
              </p>
            </div>
          </div>

          <div className="p-8 flex flex-col md:flex-row gap-4 justify-center">
  <button
    onClick={() => navigate("/employeeupdateprofile")}
    className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-200 w-40"
  >
    Update Profile
  </button>
  <button
    onClick={handleMyPayments}
    className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-200 w-40"
  >
    My Payments
  </button>
  <button
    onClick={handleLogout}
    className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition duration-200 w-40"
  >
    Logout
  </button>
</div>


        </div>
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
