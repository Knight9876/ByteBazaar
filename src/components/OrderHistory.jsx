import React from "react";

const OrderHistory = () => {
  const orders = [
    {
      id: "12345",
      date: "2024-01-15",
      status: "Delivered",
      total: "$120.00",
    },
    {
      id: "12346",
      date: "2024-01-10",
      status: "Processing",
      total: "$80.00",
    },
    {
      id: "12347",
      date: "2024-01-05",
      status: "Cancelled",
      total: "$50.00",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Order History</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Order #{order.id}
              </h2>
              <span
                className={`px-2 py-1 text-sm font-medium rounded ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-600"
                    : order.status === "Processing"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {order.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              <strong>Date:</strong> {order.date}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Total:</strong> {order.total}
            </p>
            <button
              className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => alert(`View details for Order #${order.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
