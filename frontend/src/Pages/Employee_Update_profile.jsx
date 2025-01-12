import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Employee_Update_profile() {
  const [employee, setEmployee] = useState({});
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setEmployee(userData);
      setPhone(userData.phone || "");
      setAddress(userData.address || "");
    }
  }, []);

  const handleUpdate = async () => {
    try {
        const response = await axios.put(
            `http://localhost:3000/api/signup/profile/${employee.email}`,
            { phone, address }
          );
          
      if (response.status === 200) {
        alert("Profile updated successfully!");
        localStorage.setItem("userData", JSON.stringify(response.data));
        navigate("/employee_profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 via-white to-gray-100 py-12 px-6">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Update Profile</h2>
        <div className="text-left mb-4">
          <label className="block text-gray-700">Email (Read-only)</label>
          <input
            type="text"
            value={employee.email}
            disabled
            className="w-full border-gray-300 rounded-lg px-4 py-2 mt-1"
          />
        </div>
        <div className="text-left mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border-gray-300 rounded-lg px-4 py-2 mt-1"
          />
        </div>
        <div className="text-left mb-6">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border-gray-300 rounded-lg px-4 py-2 mt-1"
          />
        </div>
        <button
          onClick={handleUpdate}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-200 w-full text-lg"
        >
          Update
        </button>
      </div>
    </div>
  );
}
