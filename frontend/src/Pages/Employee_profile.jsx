import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

export default function EmployeeProfile() {
  const [employee, setEmployee] = useState(null);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve the user data from localStorage
    const userData = localStorage.getItem('userData');
    if (userData) {
      const employeeData = JSON.parse(userData);
      setEmployee(employeeData);

      // Fetch payments related to this employee's email
      const fetchPayments = async () => {
        try {
          const response = await fetch(`/api/payment?email=${employeeData.email}`);
          const data = await response.json();
          if (data.success) {
            setPayments(data.data);
          }
        } catch (err) {
          console.error("Error fetching payments:", err);
        } finally {
          setLoading(false);
        }
      };

      fetchPayments();
    } else {
      console.error("No user data found in localStorage.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-100 pt-12">
      <div className="bg-white shadow-md rounded-lg p-8 w-80 text-center">
        <FaUserCircle className="text-6xl text-gray-500 mb-6 mx-auto" />
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Employee Profile</h1>
        <p className="text-gray-700 mb-4">
          <strong>Email:</strong> {employee.email}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Phone:</strong> {employee.phone}
        </p>
        
        {/* Display Payments */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Payment History</h2>
          {payments.length > 0 ? (
            payments.map((payment) => (
              <div key={payment._id} className="bg-gray-50 p-4 mb-4 rounded-lg shadow-sm">
                <p><strong>Product:</strong> {payment.bookId}</p>
                <p><strong>Amount:</strong> ${payment.totalPrice}</p>
                <p><strong>Payment Method:</strong> {payment.paymentMethod}</p>
                <p><strong>Date:</strong> {new Date(payment.paymentDate).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>No payments found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
