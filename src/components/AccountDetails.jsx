import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { getAuth, updateProfile } from "firebase/auth";
import { getDatabase, ref, set, get, child, update } from "firebase/database";

const AccountDetails = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    profile_pic: null,
  });

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    dob: "",
  });

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const db = getDatabase();
  const currentUser = auth.currentUser;

  useEffect(() => {
    if (currentUser) {
      const userRef = ref(db, `users/${currentUser.uid}`);
      
      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setUser(userData);
            setFormValues({
              name: userData.name || currentUser.displayName || "",
              phone: userData.phone || "",
              dob: userData.dob || "",
            });
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [currentUser, db]);

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  
  const handleProfileUpdate = () => {
    if (!currentUser) return;
  
    const userRef = ref(db, `users/${currentUser.uid}`);
  
    update(userRef, {
      name: formValues.name,
      phone: formValues.phone,
      dob: formValues.dob
    })
      .then(() => {
        return updateProfile(currentUser, { displayName: formValues.name });
      })
      .then(() => {
        location.reload()
      })
      .catch((error) => {
        alert("Error updating profile:", error);
      });
  };
  

  const handlePasswordChange = () => {}

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <h2 className="text-lg font-semibold mb-4">Profile Overview</h2>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              {currentPassword.profile_pic ? (
                <img
                  src={currentUser.profile_pic}
                  alt="profile-image"
                  className="w-20 h-20 rounded-full border p-1"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircleUser}
                  title="User Profile"
                  className="w-20 h-20 rounded-full border p-1"
                />
              )}
              <div className="text-center md:text-left">
                <p className="text-lg font-semibold">
                  {currentUser?.displayName || "Your Name"}
                </p>
                <p className="text-gray-600">{currentUser?.email || "Your Email"}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full border rounded p-2"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full border rounded p-2 bg-gray-100"
                    value={currentUser?.email}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="w-full border rounded p-2"
                    value={formValues.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    className="w-full border rounded p-2"
                    value={formValues.dob}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handleProfileUpdate}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full md:w-auto"
              >
                Save Changes
              </button>
            </form>
          </div>

          {/* Password Management */}
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <h2 className="text-lg font-semibold mb-4">Password Management</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-600 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full border rounded p-2"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full border rounded p-2"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full border rounded p-2"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handlePasswordChange}
                className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full md:w-auto"
              >
                Change Password
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default AccountDetails;
