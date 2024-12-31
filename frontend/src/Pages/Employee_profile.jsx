import React, { useEffect, useState } from 'react';

export default function EmployeeProfile() {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // Retrieve the user data from localStorage
    const userData = localStorage.getItem('userData');
    if (userData) {
      setEmployee(JSON.parse(userData));
    } else {
      console.error("No user data found in localStorage.");
    }
  }, []);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Employee Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
        <p className="text-gray-700 mb-2">
          <strong>Name:</strong> {employee.name}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> {employee.email}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Role:</strong> {employee.role}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Phone:</strong> {employee.phone}
        </p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
}
