import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShippingFast } from "react-icons/fa";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookTitle, totalPrice, quantity, bookId } = location.state || {};

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

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const employeeData = JSON.parse(userData);
      setFormData((prevState) => ({
        ...prevState,
        phone: employeeData.phone,
        email: employeeData.email,
      }));
    } else {
      console.error("No user data found in localStorage.");
    }
  }, []);

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
    if (!bankData.bankName) newErrors.bankName = "Bank is required.";
    if (!bankData.cardNumber || !regexCard.test(bankData.cardNumber))
      newErrors.cardNumber = "Valid card number is required.";
    if (!bankData.expiryDate) newErrors.expiryDate = "Expiry date is required.";
    if (!bankData.cvv || !regexCVV.test(bankData.cvv)) {
      newErrors.cvv = "Valid CVV is required.";
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
          formData,
          bankData,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setPaymentSuccess(true);
        setIsPaymentConfirmed(true);
        setIsPopupVisible(false); // Hide the confirmation popup
        setIsSuccessPopupVisible(true); // Show the success popup

        setTimeout(() => {
          navigate("/mypayments"); // Navigate to /mypayments after success
        }, 2000); // Wait 2 seconds before navigating
      } else {
        throw new Error(data.message || "Payment failed. Please try again.");
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
      console.error("Payment error:", error);
    }
  };

  const isFormValid = Object.values(formData).every((value) => value) && Object.values(bankData).every((value) => value);
  const isButtonDisabled = !isFormValid;

  if (!bookTitle) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white p-7 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-teal-600 mb-4">{bookTitle}</h2>
          <p className="text-xl font-semibold mb-4">Total Price: RS {totalPrice.toFixed(2)}</p>

          {/* Form container with flex layout */}
          <div className="flex justify-between mb-6">
            {/* Form to collect user data */}
            <div className="w-1/2 pr-4">
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
                    readOnly
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
                    readOnly
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
              </div>
            </div>

            {/* Bank payment form */}
            <div className="w-1/2 pl-4">
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
                    <option value="Commercial">Commercial Bank</option>
                    <option value="NDB">NDB Bank</option>
                  </select>
                  {errors.bankName && <p className="text-red-500 text-sm">{errors.bankName}</p>}
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
                  {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
                </div>
                <div className="mb-4">
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
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={handlePaymentSubmit}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md shadow-md"
              disabled={isButtonDisabled}
            >
              <FaShippingFast className="mr-2" />
              Proceed to Pay
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Confirmation Popup */}
        {isPopupVisible && (
          <div className="fixed inset-0 bg-opacity-50 bg-black flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
              <p className="text-xl font-semibold">Are you sure you want to proceed with the payment?</p>
              <div className="flex justify-between mt-6">
                <button
                  onClick={handleConfirmPayment}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md"
                >
                  Yes, Confirm Payment
                </button>
                <button
                  onClick={() => setIsPopupVisible(false)}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md"
                >
                  No, Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Popup */}
        {isSuccessPopupVisible && (
          <div className="fixed inset-0 bg-opacity-50 bg-black flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
              <h3 className="text-xl font-semibold text-green-500">Payment Successful!</h3>
              <p>Your payment has been processed successfully.</p>
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => navigate("/mypayments")}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md"
                >
                  View Payment Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
