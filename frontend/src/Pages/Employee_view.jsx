import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Employee_view() {
  const [employees, setEmployees] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/employees");
        setEmployees(response.data.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/employees/users"
        );
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Remove user handler
  const handleRemoveUser = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to remove this user?"
    );
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

  // Remove employee handler
  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/employees/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id));
      alert("Employee removed successfully.");
    } catch (error) {
      console.error("Error removing employee:", error);
      alert("Failed to remove employee.");
    }
  };

  // Placeholder update employee handler
  const handleUpdate = (id) => {
    alert(`Update functionality not implemented for employee ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50 py-10 px-8">
      {/* Employee List */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        EMPLOYEE LIST
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {employees.map((employee) => (
          <div
            key={employee._id}
            className="bg-white shadow-lg rounded-lg p-6 transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col items-center justify-between"
          >
            {/* Employee Info Section */}
            <div className="flex flex-col items-start w-full mb-6">
              {/* Name and Section in the Same Box */}
              <div className="bg-white bg-opacity-60 shadow-lg text-gray-800 px-6 py-4 rounded-lg w-full mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-blue-800">
                  {employee.name}
                </h2>
                <p className="text-gray-700 font-medium">{employee.section}</p>
              </div>
              {/* Additional Employee Info */}
              <div className="space-y-2 text-gray-600 w-full">
                <p>
                  <strong>Company ID Number:</strong> {employee.companyNumber}
                </p>
                <p>
                  <strong>Address:</strong> {employee.address}
                </p>
                <p>
                  <strong>Gender:</strong> {employee.gender}
                </p>
                <p>
                  <strong>Phone:</strong> {employee.phoneNumber}
                </p>
                <p>
                  <strong>Date of Birth:</strong>{" "}
                  {new Date(employee.dateOfBirth).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center w-full space-x-4">
              <button
                onClick={() => handleRemove(employee._id)}
                className="px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition duration-300 w-full max-w-xs"
              >
                Remove
              </button>
              <button
                onClick={() => handleUpdate(employee._id)}
                className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300 w-full max-w-xs"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* User List */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mt-16 mb-12">
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
