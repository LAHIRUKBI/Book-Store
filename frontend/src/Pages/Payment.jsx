import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShippingFast } from "react-icons/fa";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookTitle, totalPrice, quantity, bookId } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [bankData, setBankData] = useState({
    bankName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);
  const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState(false); // New state for success popup

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && isNaN(value)) return;
    if (name === "phone" && value.length > 10) return;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBankChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber" || name === "cvv") {
      if (isNaN(value)) return;
    }

    if (name === "cardNumber" && value.length > 16) return;
    if (name === "cvv" && value.length > 3) return;

    setBankData({
      ...bankData,
      [name]: value,
    });
  };

  const handleExpiryChange = (e) => {
    setBankData({
      ...bankData,
      expiryDate: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const regexPhone = /^[0-9]{10}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexCard = /^[0-9]{16}$/;
    const regexCVV = /^[0-9]{3}$/;

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.phone || !regexPhone.test(formData.phone)) {
      newErrors.phone = "Valid phone number is required.";
    }
    if (!formData.email || !regexEmail.test(formData.email)) {
      newErrors.email = "Valid email is required.";
    }
    if (paymentMethod === "delivery") {
      if (!bankData.bankName) newErrors.bankName = "Bank is required.";
      if (!bankData.cardNumber || !regexCard.test(bankData.cardNumber))
        newErrors.cardNumber = "Valid card number is required.";
      if (!bankData.expiryDate) newErrors.expiryDate = "Expiry date is required.";
      if (!bankData.cvv || !regexCVV.test(bankData.cvv)) {
        newErrors.cvv = "Valid CVV is required.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePaymentSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    setIsPopupVisible(true); // Show the confirmation popup
  };

  const handleConfirmPayment = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
        setIsPaymentConfirmed(true);
        setIsPopupVisible(false); // Hide the confirmation popup
        setIsSuccessPopupVisible(true); // Show the success popup

        setTimeout(() => {
          navigate("/mypayments"); // Navigate to /mypayments after success
        }, 2000); // Wait 2 seconds before navigating
      } else {
        alert("Payment failed");
      }
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  const isFormValid = Object.values(formData).every((value) => value) && paymentMethod;
  const isButtonDisabled = !isFormValid;

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
              onClick={() => setPaymentMethod("pick-up")}
              className={`cursor-pointer ${paymentMethod === "pick-up" ? "text-teal-600" : "text-gray-600"} flex flex-col items-center`}
            >
              <FaShippingFast className="text-3xl mb-2" />
              <span>Pick-up</span>
            </div>
            <div
              onClick={() => setPaymentMethod("delivery")}
              className={`cursor-pointer ${paymentMethod === "delivery" ? "text-teal-600" : "text-gray-600"} flex flex-col items-center`}
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
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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
                  {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
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
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div className="mt-4">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Email"
                  className="w-full p-3 border rounded-md"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                  <option value="BOC">Bank of Ceylon (BOC)</option>
                  <option value="HNB">Hatton National Bank (HNB)</option>
                  <option value="Sampath">Sampath Bank</option>
                  <option value="NSB">National Savings Bank (NSB)</option>
                  <option value="Commercial">Commercial Bank</option>
                  <option value="People">People's Bank</option>
                  <option value="Seylan">Seylan Bank</option>
                  <option value="Hatton">Hatton National Bank (HNB)</option>
                </select>
                {errors.bankName && <p className="text-red-500 text-sm">{errors.bankName}</p>}
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 mr-2">
                  <label className="font-semibold">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={bankData.cardNumber}
                    onChange={handleBankChange}
                    placeholder="Card Number"
                    className="w-full p-3 border rounded-md"
                  />
                  {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
                </div>
                <div className="w-1/2 ml-2">
                  <label className="font-semibold">Expiry Date</label>
                  <input
                    type="month"
                    name="expiryDate"
                    value={bankData.expiryDate}
                    onChange={handleExpiryChange}
                    className="w-full p-3 border rounded-md"
                  />
                  {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate}</p>}
                </div>
              </div>
              <div className="mb-4">
                <label className="font-semibold">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={bankData.cvv}
                  onChange={handleBankChange}
                  placeholder="CVV"
                  className="w-full p-3 border rounded-md"
                />
                {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
              </div>
            </div>
          )}

          {/* Payment confirmation */}
          <div className="mb-6">
            <button
              disabled={isButtonDisabled}
              onClick={handlePaymentSubmit}
              className="bg-teal-600 text-white p-4 w-full rounded-lg font-bold disabled:opacity-50"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Popup */}
      {isPopupVisible && !isSuccessPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Are you sure you want to proceed with the payment?</h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleConfirmPayment}
                className="bg-teal-600 text-white py-2 px-4 rounded-md"
              >
                Yes
              </button>
              <button
                onClick={() => setIsPopupVisible(false)}
                className="bg-gray-600 text-white py-2 px-4 rounded-md"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {isSuccessPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Payment Success!</h3>
            <p className="text-lg mb-4">Thank you for your payment. You will be redirected shortly.</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => navigate("/mypayments")}
                className="bg-teal-600 text-white py-2 px-4 rounded-md"
              >
                Go to My Payments
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
