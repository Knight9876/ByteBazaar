// src/utils/tiers.js
const tiers = [
  {
    name: "Free",
    price: "₹0",
    benefits: [
      "Access to basic features",
      "Limited product selection",
      "Standard customer support",
    ],
    bgColor: "bg-gradient-to-r from-gray-200 to-gray-300",
    textColor: "text-gray-500",
    bgColorForShadow: "#9CA3AF",
    textColorBeforeHover: "#000000",
  },
  {
    name: "Basic",
    price: "₹899.99",
    benefits: [
      "Access to premium products",
      "Exclusive discounts",
      "Priority customer support",
    ],
    bgColor: "bg-gradient-to-r from-blue-200 to-blue-300", // Gradient color
    textColor: "text-blue-900",
    bgColorForShadow: "#3B82F6",
    textColorBeforeHover: "#1E3A8A",
  },
  {
    name: "Pro",
    price: "₹1799.99",
    benefits: [
      "All Basic benefits",
      "Early access to new releases",
      "Personalized recommendations",
    ],
    bgColor: "bg-gradient-to-r from-green-200 to-green-300", // Gradient color
    textColor: "text-green-900",
    bgColorForShadow: "#22C55E",
    textColorBeforeHover: "#134E4A",
  },
  {
    name: "Ultimate",
    price: "₹4399.99",
    benefits: [
      "All Pro benefits",
      "Free shipping on all orders",
      "Access to secret product launches",
    ],
    bgColor: "bg-gradient-to-r from-purple-200 to-purple-300", // Gradient color
    textColor: "text-purple-900",
    bgColorForShadow: "#A855F7",
    textColorBeforeHover: "#5B21B6",
  },
];

export default tiers;
