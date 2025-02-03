import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const AddressBook = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, label: "Home", address: "Flat No. 501, Tower B, Gokul Residency, Andheri West, Mumbai, Maharashtra" },
    { id: 2, label: "Work", address: "Office No. 204, 2nd Floor, Lotus Corporate Park, Goregaon East, Mumbai, Maharashtra" }
  ]);

  const handleAddAddress = () => alert("Add new address clicked!");
  const handleEditAddress = (id) => alert(`Edit address with ID: ${id}`);
  const handleDeleteAddress = (id) =>
    setAddresses((prev) => prev.filter((address) => address.id !== id));

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Address Book
      </h1>

      {/* Address Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {address.label}
            </h2>
            <p className="text-gray-600 mb-4">{address.address}</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => handleEditAddress(address.id)}
                className="text-blue-500 hover:text-blue-700"
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button
                onClick={() => handleDeleteAddress(address.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Address */}
      <div className="text-center">
        <button
          onClick={handleAddAddress}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add New Address
        </button>
      </div>
    </div>
  );
};

export default AddressBook;
