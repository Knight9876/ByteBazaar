import React, { useEffect, useState } from "react";
import AccountDetails from "../components/AccountDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import OrderHistory from "../components/OrderHistory";
import AddressBook from "../components/AddressBook";
import PaymentMethods from "../components/PaymentMethods";
import { getAuth } from "firebase/auth";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    profile_pic: null,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const [activeTab, setActiveTab] = useState("accountDetails");
  const navigate = useNavigate();
  
  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
  
    if (!currentUser) {
      console.error("User is not authenticated.");
      return;
    }
  
    currentUser.displayName = currentUser.email.split("@")[0];
  
    setUser({
      name: currentUser.displayName,
      email: currentUser.email,
      // profile_pic: currentUser.photoURL,
    });
  
  }, [setUser]); // Ensure dependencies are properly handled

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Logs out the user
      console.log("User logged out");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "accountDetails":
        return <AccountDetails />;
      case "orderHistory":
        return <OrderHistory />;
      case "addressBook":
        return <AddressBook />;
      case "paymentMethods":
        return <PaymentMethods />;
      default:
        return <AccountDetails />;
    }
  };

  console.log(user);
  
  
  return (
    <div className="max-h-max bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="p-6 border-b border-gray-200 flex items-center gap-4">
          {user.profile_pic ?  (
            <img
              src={user.profile}
              alt="profile-image"
              className="w-10 h-10 rounded-full border p-1 sm:w-20 sm:h-20"
            />
          ) : (
            <FontAwesomeIcon
            icon={faCircleUser}
              title="User Profile"
              className="w-10 h-10 rounded-full border p-1 sm:w-20 sm:h-20"
            />
          )}
            <div>
              <h1 className="text-xl font-bold text-gray-800">{user.displayName || "Your Name"}</h1>
              <p className="text-gray-500">{user.email || "Your Email"}</p>
            </div>
            <button
              className="ml-auto bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 sm:block"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>

          {/* Tabs Section */}
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="sm:w-1/8 bg-gray-50 border-b md:border-r md:border-b-0 border-gray-200">
              <ul className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2 p-4 overflow-x-auto md:overflow-visible items-center sm:justify-center">
                <li>
                  <button
                    className={`px-4 py-2 rounded-lg w-full md:w-auto ${
                      activeTab === "accountDetails"
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => handleTabChange("accountDetails")}
                  >
                    Account Details
                  </button>
                </li>
                <li>
                  <button
                    className={`px-4 py-2 rounded-lg w-full md:w-auto ${
                      activeTab === "orderHistory"
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => handleTabChange("orderHistory")}
                  >
                    Order History
                  </button>
                </li>
                <li>
                  <button
                    className={`px-4 py-2 rounded-lg w-full md:w-auto ${
                      activeTab === "addressBook"
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => handleTabChange("addressBook")}
                  >
                    Address Book
                  </button>
                </li>
                <li>
                  <button
                    className={`px-4 py-2 rounded-lg w-full md:w-auto ${
                      activeTab === "paymentMethods"
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => handleTabChange("paymentMethods")}
                  >
                    Payment Methods
                  </button>
                </li>
                
              </ul>
            </div>

            {/* Main Content */}
            <div className="md:w-3/4 p-4 md:p-6">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
