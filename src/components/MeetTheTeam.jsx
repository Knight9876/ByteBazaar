import React from "react";

const MeetTheTeam = () => {
  return (
    <section className="max-w-7xl mx-auto text-lg text-justify px-6 py-12 md:px-20 lg:px-40">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Meet the Team
      </h2>
      <div className="flex justify-center space-x-6">
        {/* Team Member Card - Yash Kamble */}
        <div className="bg-gray-100 shadow-lg p-6 rounded-lg text-center w-full md:w-1/3">
          <img
            src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1735201757/profile_photo_y59bsn.png" // Replace with actual image path
            alt="Yash Kamble"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-medium text-gray-800">Yash Kamble</h3>
          <p className="text-sm text-gray-600">CEO and Lead Developer</p>
          <p className="text-sm text-gray-600 mt-4">
            Leading the charge to make ByteBazaar a top-tier e-commerce platform
            with a focus on innovation and user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
