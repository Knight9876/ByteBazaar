// src/components/ConfirmationModal.jsx

import React from "react";

const ConfirmationModal = ({ item, onConfirm, onCancel, disablePopup, setDisablePopup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold">Confirm Removal</h2>
        <p>Are you sure you want to remove {item.name} from the cart?</p>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            checked={disablePopup}
            onChange={(e) => setDisablePopup(e.target.checked)}
            className="mr-2"
          />
          <label>Don't show this again</label>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Remove
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 ml-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
