// src/components/PremiumSubscriptionCard.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons"; // FontAwesome icon for premium and close

const PremiumSubscriptionCard = ({ tier }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`${tier.bgColor} ${tier.textColor} p-4 rounded-lg shadow-lg flex flex-col justify-between`}>
      <div>
        <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
        <p className="text-lg font-bold mb-2">{tier.price}/month</p>
        <ul className="list-disc list-inside mb-4">
          {tier.benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </div>
      {tier.name === "Free" ? (
        <button
          className="px-5 py-2 rounded-md text-[17px] font-medium cursor-pointer text-white"
          style={{
            background: tier.bgColorForShadow,
            boxShadow: `0 0 5px ${tier.bgColorForShadow}, 0 0 20px ${tier.bgColorForShadow}`,
          }}
        >
          Current
        </button>
      ) : (
        <button
          onClick={() => (window.location.href = "/login")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="px-5 py-2 rounded-md text-[17px] font-medium cursor-pointer border transition duration-500 ease-in-out"
          style={{
            color: isHovered ? "white" : tier.textColorBeforeHover,
            background: isHovered ? tier.bgColorForShadow : "transparent",
            borderColor: isHovered ? tier.bgColorForShadow : tier.textColorBeforeHover,
            boxShadow: isHovered
              ? `0 0 5px ${tier.bgColorForShadow}, 0 0 20px ${tier.bgColorForShadow}`
              : "none",
            transition: "background 0.5s ease-in-out, color 0.5s ease-in-out, border-color 0.5s ease-in-out", // Add transition here
          }}
        >
          Go Premium <FontAwesomeIcon icon={faGem} />
        </button>
      )}
    </div>
  );
};

export default PremiumSubscriptionCard;
