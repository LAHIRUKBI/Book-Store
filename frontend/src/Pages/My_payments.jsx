import React, { useEffect, useState } from 'react';

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
    return <div className="text-center text-xl font-semibold">Loading payments...</div>;
  }

  if (error) {
    return <div className="text-center text-xl font-semibold text-red-500">{error}</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">My Payments</h2>
      {payments.length === 0 ? (
        <p className="text-center text-lg text-gray-500">No payments found.</p>
      ) : (
        <div>
          <div className="flex justify-between mb-4">
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
          <ul className="space-y-4">
            {sortedPayments.map((payment, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
                <div className="grid grid-cols-2 gap-4">
                  <div><strong>Book ID:</strong> {payment.bookId}</div>
                  <div><strong>Payment Date:</strong> {new Date(payment.paymentDate).toLocaleDateString()}</div>
                  <div><strong>Amount:</strong> ${payment.totalPrice}</div>
                  <div><strong>Quantity:</strong> {payment.quantity}</div>
                  <div><strong>Payment Method:</strong> {payment.paymentMethod}</div>
                  <div><strong>Customer Name:</strong> {payment.customerName}</div>
                  <div><strong>Customer Address:</strong> {payment.customerAddress}</div>
                  <div><strong>Customer Phone:</strong> {payment.customerPhone}</div>
                  <div><strong>Customer Email:</strong> {payment.customerEmail}</div>
                  <div><strong>Bank Name:</strong> {payment.bankName}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
