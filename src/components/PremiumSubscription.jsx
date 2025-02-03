// src/components/PremiumSubscription.jsx
import React from 'react';
import tiers from '../utils/tiers';
import PremiumSubscriptionCard from './PremiumSubscriptionCard'; // Import the new card component

const PremiumSubscription = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto p-6 py-16 mt-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Choose Your Premium Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((tier, index) => (
            <PremiumSubscriptionCard key={index} tier={tier} /> // Use the new card component
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumSubscription;
