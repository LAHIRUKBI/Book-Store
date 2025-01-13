import React, { useEffect, useState } from "react";
import axios from "axios";

export default function User_view() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/employees/users");
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Remove user handler
  const handleRemoveUser = async (id) => {
    const confirm = window.confirm("Are you sure you want to remove this user?");
    if (confirm) {
      try {
        await axios.delete(`http://localhost:3000/api/employees/users/${id}`);
        setUsers(users.filter((user) => user._id !== id));
        alert("User removed successfully.");
      } catch (error) {
        console.error("Error removing user:", error);
        alert("Failed to remove user.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50 py-10 px-8">
      {/* User List */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        USER LIST
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-white shadow-lg rounded-lg p-6 transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-green-800">
              {user.email}
            </h2>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> {user.phone}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Address:</strong> {user.address}
            </p>
            <button
              onClick={() => handleRemoveUser(user._id)}
              className="mt-4 px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition duration-300"
            >
              Drop User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
