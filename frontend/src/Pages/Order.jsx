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

  const handleSendToBookManager = async (customerName) => {
    const selectedPayment = payments.find((payment) => payment.customerName === customerName);

    if (!selectedPayment) {
      alert('Payment details not found!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/orders/create', {
        customerName: selectedPayment.customerName,
        customerAddress: selectedPayment.customerAddress,
        customerPhone: selectedPayment.customerPhone,
        totalPrice: selectedPayment.totalPrice,
        quantity: selectedPayment.quantity,
        bankName: selectedPayment.bankName,
        paymentDate: selectedPayment.paymentDate,
        bookId: selectedPayment.bookId,
        bookTitle: selectedPayment.bookTitle,
      });

      if (response.data.success) {
        alert(`Customer Name ${customerName} sent to Book Manager successfully!`);
      } else {
        throw new Error(response.data.message || 'Unknown error occurred');
      }
    } catch (error) {
      console.error('Error sending to Book Manager:', error.message);
      alert('Failed to send details to Book Manager. Please try again.');
    }
  };

  const handleDeletePayment = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/payment/${id}`);
      if (response.status === 200) {
        setPayments((prev) => prev.filter((payment) => payment._id !== id));
        alert('Payment deleted successfully!');
      } else {
        alert('Failed to delete the payment.');
      }
    } catch (error) {
      console.error('Error deleting payment:', error.message);
      alert('Failed to delete the payment. Please try again.');
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold text-gray-600">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold text-red-600">{error}</p>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">ORDERS</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="border px-6 py-3">Customer Name</th>
              <th className="border px-6 py-3">Address</th>
              <th className="border px-6 py-3">Phone</th>
              <th className="border px-6 py-3">Total Price</th>
              <th className="border px-6 py-3">Quantity</th>
              <th className="border px-6 py-3">Bank Name</th>
              <th className="border px-6 py-3">Payment Date</th>
              <th className="border px-6 py-3">Book ID</th>
              <th className="border px-6 py-3">Book Title</th>
              <th className="border px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr
                key={payment._id}
                className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition duration-200`}
              >
                <td className="border px-6 py-4">{payment.customerName}</td>
                <td className="border px-6 py-4">{payment.customerAddress}</td>
                <td className="border px-6 py-4">{payment.customerPhone}</td>
                <td className="border px-6 py-4">{payment.totalPrice}</td>
                <td className="border px-6 py-4">{payment.quantity}</td>
                <td className="border px-6 py-4">{payment.bankName}</td>
                <td className="border px-6 py-4">{new Date(payment.paymentDate).toLocaleString()}</td>
                <td className="border px-6 py-4">{payment.bookId}</td>
                <td className="border px-6 py-4">{payment.bookTitle}</td>
                <td className="border px-6 py-4 flex gap-2">
                  <button
                    onClick={() => handleSendToBookManager(payment.customerName)}
                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
                  >
                    Send to Book Manager
                  </button>
                  <button
                    onClick={() => handleDeletePayment(payment._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 text-center">
        <p className="text-gray-600">
          You can track all payments and take necessary actions. The details are updated in real-time.
        </p>
      </div>
    </div>
  );
}
