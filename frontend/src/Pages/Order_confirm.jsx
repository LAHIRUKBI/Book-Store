import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Order_confirm() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch all orders from the database
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/orders/list');
        setOrders(response.data.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>
      {orders.length > 0 ? (
        <div className="w-full max-w-4xl p-4 bg-white shadow-lg rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 p-4">Customer Name</th>
                <th className="border-b-2 p-4">Address</th>
                <th className="border-b-2 p-4">Phone</th>
                <th className="border-b-2 p-4">Total Price</th>
                <th className="border-b-2 p-4">Quantity</th>
                <th className="border-b-2 p-4">Bank Name</th>
                <th className="border-b-2 p-4">Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-100">
                  <td className="border-b p-4">{order.customerName}</td>
                  <td className="border-b p-4">{order.customerAddress}</td>
                  <td className="border-b p-4">{order.customerPhone}</td>
                  <td className="border-b p-4">${order.totalPrice}</td>
                  <td className="border-b p-4">{order.quantity}</td>
                  <td className="border-b p-4">{order.bankName}</td>
                  <td className="border-b p-4">
                    {new Date(order.paymentDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No orders found.</p>
      )}
    </div>
  );
}
