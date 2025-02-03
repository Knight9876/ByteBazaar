import React, { useState } from "react";

const PaymentOptions = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [cardDetails, setCardDetails] = useState({ name: "", number: "", expiry: "", cvv: "" });
  const [upiId, setUpiId] = useState("");

  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: "💳" },
    { id: "upi", name: "UPI", icon: "📱" },
    { id: "cod", name: "Cash on Delivery (COD)", icon: "💵" },
  ];

  const handlePaymentSelection = (method) => {
    setSelectedMethod(method.id);
  };

  const handlePaymentSubmit = () => {
    if (selectedMethod === "card") {
      if (!cardDetails.name || !cardDetails.number || !cardDetails.expiry || !cardDetails.cvv) {
        alert("Please fill in all card details.");
        return;
      }
      alert("Processing card payment...");
    } else if (selectedMethod === "upi") {
      if (!upiId) {
        alert("Please enter your UPI ID.");
        return;
      }
      alert("Redirecting to UPI payment...");
    } else if (selectedMethod === "cod") {
      alert("Order placed with Cash on Delivery.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Select Payment Method</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            onClick={() => handlePaymentSelection(method)}
            className={`cursor-pointer border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white flex flex-col items-center gap-4 ${
              selectedMethod === method.id ? "border-blue-500" : ""
            }`}
          >
            <span className="text-3xl">{method.icon}</span>
            <span className="text-lg font-semibold">{method.name}</span>
          </div>
        ))}
      </div>

      {selectedMethod === "card" && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Enter Card Details</h2>
          <input
            type="text"
            placeholder="Cardholder Name"
            className="w-full border p-2 rounded mb-3"
            onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Card Number"
            className="w-full border p-2 rounded mb-3"
            maxLength="16"
            onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
          />
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Expiry (MM/YY)"
              className="w-1/2 border p-2 rounded"
              maxLength="5"
              onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
            />
            <input
              type="password"
              placeholder="CVV"
              className="w-1/2 border p-2 rounded"
              maxLength="3"
              onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
            />
          </div>
        </div>
      )}

      {selectedMethod === "upi" && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Enter UPI ID or Scan QR</h2>
          <input
            type="text"
            placeholder="example@upi"
            className="w-full border p-2 rounded mb-3"
            onChange={(e) => setUpiId(e.target.value)}
          />
          <div className="mt-4 text-center">
            <p className="text-gray-600 mb-2">Or Scan QR to Pay</p>
            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              QR Code
            </div>
          </div>
        </div>
      )}

      {selectedMethod === "cod" && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Cash on Delivery Selected</h2>
          <p className="text-gray-600">Please keep the exact amount ready at the time of delivery.</p>
        </div>
      )}

      {selectedMethod && (
        <button
          onClick={handlePaymentSubmit}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full md:w-auto"
        >
          Confirm Payment
        </button>
      )}
    </div>
  );
};

export default PaymentOptions;
