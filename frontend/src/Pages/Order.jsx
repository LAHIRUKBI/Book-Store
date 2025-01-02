import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Order() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/payment');
        setPayments(response.data.data);
      } catch (err) {
        setError('Error fetching payment details');
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold text-center text-gray-700 mb-8">
        Payment Details
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Customer Name</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Total Price</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Bank Name</th>
              <th className="border px-4 py-2">Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment._id}>
                <td className="border px-4 py-2">{payment.customerName}</td>
                <td className="border px-4 py-2">{payment.customerAddress}</td>
                <td className="border px-4 py-2">{payment.customerPhone}</td>
                <td className="border px-4 py-2">{payment.totalPrice}</td>
                <td className="border px-4 py-2">{payment.quantity}</td>
                <td className="border px-4 py-2">{payment.bankName}</td>
                <td className="border px-4 py-2">{new Date(payment.paymentDate).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
