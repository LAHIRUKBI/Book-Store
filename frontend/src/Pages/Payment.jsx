import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRegCreditCard, FaMoneyBillWave, FaShippingFast, FaAddressCard, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookTitle, totalPrice, quantity, bookId } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
  });
  const [bankData, setBankData] = useState({
    bankName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBankChange = (e) => {
    const { name, value } = e.target;
    setBankData({
      ...bankData,
      [name]: value,
    });
  };

  const handlePaymentSubmit = async () => {
    // Send the payment data to the backend for processing
    try {
      const response = await fetch('http://localhost:3000/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bookId,
          totalPrice,
          quantity,
          paymentMethod,
          formData,
          bankData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setPaymentSuccess(true);
        setTimeout(() => {
          navigate('/success');
        }, 2000);
      } else {
        alert('Payment failed');
      }
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  if (!bookTitle) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white p-7 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-teal-600 mb-4">{bookTitle}</h2>
          <p className="text-xl font-semibold mb-4">Total Price: RS {totalPrice.toFixed(2)}</p>

          {/* Payment Method Section */}
          <p className="text-lg font-semibold mb-4">Select the method of receiving the item:</p>
          <div className="flex justify-between mb-6 border-b pb-4">
            <div
              onClick={() => setPaymentMethod('pick-up')}
              className={`cursor-pointer ${paymentMethod === 'pick-up' ? 'text-teal-600' : 'text-gray-600'} flex flex-col items-center`}
            >
              <FaShippingFast className="text-3xl mb-2" />
              <span>Pick-up</span>
            </div>
            <div
              onClick={() => setPaymentMethod('delivery')}
              className={`cursor-pointer ${paymentMethod === 'delivery' ? 'text-teal-600' : 'text-gray-600'} flex flex-col items-center`}
            >
              <FaShippingFast className="text-3xl mb-2" />
              <span>Delivery</span>
            </div>
          </div>

          {/* Form to collect user data */}
          {paymentMethod && (
            <div className="mb-6">
              <div className="flex justify-between mb-4">
                <div className="w-1/2 mr-2">
                  <label className="font-semibold">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Name"
                    className="w-full p-3 border rounded-md"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label className="font-semibold">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleFormChange}
                    placeholder="Address"
                    className="w-full p-3 border rounded-md"
                  />
                </div>
              </div>
              <div>
                <label className="font-semibold">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="Phone"
                  className="w-full p-3 border rounded-md"
                />
              </div>
            </div>
          )}

          {/* Bank payment form */}
          {paymentMethod && (
            <div className="mb-6">
              <div className="mb-4">
                <label className="font-semibold">Select Bank</label>
                <select
                  name="bankName"
                  value={bankData.bankName}
                  onChange={handleBankChange}
                  className="w-full p-3 border rounded-md"
                >
                  <option value="">Select Bank</option>
                  <option value="Bank A">Bank A</option>
                  <option value="Bank B">Bank B</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="font-semibold">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={bankData.cardNumber}
                  onChange={handleBankChange}
                  placeholder="Card Number"
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <div className="flex justify-between mb-4">
                <div className="w-1/2 mr-2">
                  <label className="font-semibold">Expiry Date</label>
                  <input
                    type="month"
                    name="expiryDate"
                    value={bankData.expiryDate}
                    onChange={handleBankChange}
                    className="w-full p-3 border rounded-md"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label className="font-semibold">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={bankData.cvv}
                    onChange={handleBankChange}
                    placeholder="CVV"
                    className="w-full p-3 border rounded-md"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Pay Now Button */}
          <div className="mt-8">
            <button
              onClick={handlePaymentSubmit}
              className="bg-teal-500 hover:bg-teal-600 text-white py-4 px-12 w-full rounded-lg font-semibold shadow-lg"
            >
              Pay Now
            </button>
          </div>

          {/* Success Popup */}
          {paymentSuccess && (
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg text-center">
                <h2 className="text-2xl text-teal-600">Payment Successful</h2>
                <p>Thank you for your purchase! Your order will be processed shortly.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
