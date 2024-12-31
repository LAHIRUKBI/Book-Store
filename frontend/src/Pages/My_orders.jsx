// MyOrders Component
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { email } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/orders/${email}`);
        const data = await res.json();
        setOrders(data.orders);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };
    fetchOrders();
  }, [email]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold">My Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id} className="p-4 mb-4 bg-white shadow-md rounded-md">
            <p><strong>Book:</strong> {order.bookId}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Total Price:</strong> {order.totalPrice}</p>
            <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
            <p><strong>Status:</strong> {order.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
