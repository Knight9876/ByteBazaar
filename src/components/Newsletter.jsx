import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
        <p className="text-lg mb-6">
          Subscribe to our newsletter for the latest updates and exclusive offers from ByteBazaar.
        </p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-600 text-white px-4 py-2 rounded-r-md hover:from-cyan-500 hover:via-violet-600 hover:to-pink-700 focus:outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
