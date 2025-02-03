import React from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebaseConfig"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";

const AuthForm = ({ isLogin, onSubmit }) => {
  const navigate = useNavigate();

  // Google Authentication Handler
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Logged in with Google successfully!");
      navigate("/"); // Redirect to home or dashboard
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      alert("Failed to log in with Google. Please try again.");
    }
  };

  // Email/Password Authentication Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword?.value;

    try {
      if (isLogin) {
        // Login with email/password
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
      } else {
        // Sign up with email/password
        if (password !== confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Sign up successful!");
      }
      navigate("/"); // Redirect to home or dashboard
    } catch (error) {
      console.error("Authentication Error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <InputField id="email" label="Email" type="email" required />
        <InputField id="password" label="Password" type="password" required />
        {!isLogin && (
          <InputField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            required
          />
        )}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-900 transition duration-300"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <div className="text-center mt-4">
        <p className="text-sm">Or continue with:</p>
      </div>
    </div>
  );
};

const InputField = ({ id, label, type, required }) => (
  <div className="mb-6">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      required={required}
      className="mt-1 block w-full border border-gray-300 rounded-md p-3 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600"
      placeholder={type === "email" ? "you@example.com" : "********"}
    />
  </div>
);

export default AuthForm;
