import React from "react";

const ContactCTA = () => {
  return (
    <div className="bg-gray-100 px-6 py-12 md:px-20 lg:px-40">
      <section className="max-w-7xl mx-auto text-lg text-justify">
        <h2 className="text-3xl text-gray-800 mb-4 text-center font-bold">
          Let's Connect
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          We would love to hear from you! Whether you have a question, feedback,
          or just want to chat, feel free to reach out to us.
        </p>
        <a
          href="/contactus"
          className="block w-full max-w-xs mx-auto px-6 py-3 bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-600 text-white rounded-md text-center hover:from-cyan-500 hover:via-violet-600 hover:to-pink-700 transition duration-200"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ContactCTA;
