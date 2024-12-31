import React, { useEffect, useState } from 'react';
import { FaCreditCard, FaRegCalendarAlt, FaUserAlt, FaMoneyBillWave, FaPhoneAlt, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

export default function My_payments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sortField, setSortField] = useState('paymentDate'); // default sort by paymentDate
  const [sortOrder, setSortOrder] = useState('desc'); // descending order

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      // Fetch payments for the logged-in user
      fetch(`http://localhost:3000/api/payment/payments/${email}`) // Updated endpoint
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch payments');
          }
          return res.json();
        })
        .then((data) => {
          if (data.message) {
            console.error("Error fetching payments:", data.message);
            setError(data.message);  // Show error message from backend
          } else {
            setPayments(data);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching payments:', err);
          setError('An unexpected error occurred. Please try again.');
          setLoading(false);
        });
    } else {
      setLoading(false);
      setError('No email found. Please sign in again.');
    }
  }, []);

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
  };

  // Sort payments by the selected field and order
  const sortedPayments = [...payments].sort((a, b) => {
    const fieldA = a[sortField];
    const fieldB = b[sortField];
    if (fieldA < fieldB) return sortOrder === 'asc' ? -1 : 1;
    if (fieldA > fieldB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  if (loading) {
    return <div className="text-center text-xl font-semibold text-gray-500">Loading payments...</div>;
  }

  if (error) {
    return <div className="text-center text-xl font-semibold text-red-500">{error}</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-6 text-blue-600">My Payments</h2>
      {payments.length === 0 ? (
        <p className="text-center text-lg text-gray-500">No payments found.</p>
      ) : (
        <div>
          <div className="flex justify-between mb-6">
            <button
              onClick={() => handleSort('paymentDate')}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Sort by Date
            </button>
            <button
              onClick={() => handleSort('totalPrice')}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
            >
              Sort by Amount
            </button>
          </div>
          <ul className="space-y-6">
            {sortedPayments.map((payment, index) => (
              <li key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Book ID - Centered in its own box */}
                  <div className="col-span-3 text-center py-4 border-2 border-gray-300 rounded-lg bg-gray-100">
                    <strong className="text-xl text-gray-700">Book ID:</strong> <span className="text-lg">{payment.bookId}</span>
                  </div>
                  <div className="flex items-center">
                    <FaRegCalendarAlt className="text-xl text-gray-500 mr-2" />
                    <strong>Payment Date:</strong> {new Date(payment.paymentDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <FaMoneyBillWave className="text-xl text-green-500 mr-2" />
                    <strong>Amount:</strong> ${payment.totalPrice}
                  </div>
                  <div className="flex items-center">
                    <FaUserAlt className="text-xl text-gray-500 mr-2" />
                    <strong>Customer Name:</strong> {payment.customerName}
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-xl text-gray-500 mr-2" />
                    <strong>Customer Address:</strong> {payment.customerAddress}
                  </div>
                  <div className="flex items-center">
                    <FaPhoneAlt className="text-xl text-gray-500 mr-2" />
                    <strong>Customer Phone:</strong> {payment.customerPhone}
                  </div>
                  <div className="flex items-center">
                    <FaUserAlt className="text-xl text-gray-500 mr-2" />
                    <strong>Customer Email:</strong> {payment.customerEmail}
                  </div>
                  <div className="flex items-center">
                    <FaBuilding className="text-xl text-gray-500 mr-2" />
                    <strong>Bank Name:</strong> {payment.bankName}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
