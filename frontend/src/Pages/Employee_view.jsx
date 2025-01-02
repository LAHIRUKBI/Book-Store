import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Employee_view() {
  const [employees, setEmployees] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/employees');
        setEmployees(response.data.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/employees/users');
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);


  // Remove employee handler
  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/employees/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id));
      alert('Employee removed successfully.');
    } catch (error) {
      console.error('Error removing employee:', error);
      alert('Failed to remove employee.');
    }
  };

  // Placeholder update employee handler
  const handleUpdate = (id) => {
    alert(`Update functionality not implemented for employee ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Employee List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <div
            key={employee._id}
            className="bg-white bg-opacity-90 shadow-lg rounded-lg p-6 transform hover:-translate-y-2 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{employee.name}</h2>
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
              <strong>Date of Birth:</strong> {new Date(employee.dateOfBirth).toLocaleDateString()}
            </p>
            <p>
              <strong>Section:</strong> {employee.section}
            </p>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => handleRemove(employee._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300"
              >
                Remove Employee
              </button>
              <button
                onClick={() => handleUpdate(employee._id)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
              >
                Update Employee
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{user.email}</h2>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Address:</strong> {user.address}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
