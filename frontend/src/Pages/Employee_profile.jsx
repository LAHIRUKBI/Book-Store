// Employee_profile.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EmployeeProfile() {
  const { username } = useParams(); // Get the username from URL
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // Fetch employee details from the server based on the username
    axios
      .get(`/api/signup/${username}`)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee details:", error);
      });
  }, [username]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Employee Profile</h1>
      <div>
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Role:</strong> {employee.role}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
}
