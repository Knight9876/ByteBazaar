import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const PaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "Visa",
      lastFour: "1234",
      expiry: "12/25",
    },
    {
      id: 2,
      type: "MasterCard",
      lastFour: "5678",
      expiry: "11/24",
    },
  ]);

  const handleAddPaymentMethod = () => alert("Add new payment method clicked!");
  const handleEditPaymentMethod = (id) =>
    alert(`Edit payment method with ID: ${id}`);
  const handleDeletePaymentMethod = (id) =>
    setPaymentMethods((prev) => prev.filter((method) => method.id !== id));

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Payment Methods
      </h1>

      {/* Payment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {method.type}
            </h2>
            <p className="text-gray-600">**** **** **** {method.lastFour}</p>
            <p className="text-gray-600 mb-4">Expires: {method.expiry}</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => handleEditPaymentMethod(method.id)}
                className="text-blue-500 hover:text-blue-700"
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button
                onClick={() => handleDeletePaymentMethod(method.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Payment Method */}
      <div className="text-center">
        <button
          onClick={handleAddPaymentMethod}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add New Payment Method
        </button>
      </div>
    </div>
  );
};

export default PaymentMethods;
