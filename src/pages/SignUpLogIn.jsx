import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebaseConfig"; // Import your Firebase auth instance
import SignUpLogInToggle from "../components/SignUpLogInToggle";
import AuthForm from "../components/AuthForm";

const SignUpLogIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const location = useLocation();
  const fromLocation = location.state?.from || "/"; // Default to home if no previous location
  console.log(fromLocation);
  
  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setError(""); // Clear error when toggling forms
  };

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        // Login logic
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // Signup logic
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate(fromLocation);
    } catch (err) {
      setError(err.message); // Display error message
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate(fromLocation); // Redirect to the previous page or default to "/"
    } catch (err) {
      setError(err.message); // Display error message
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 mt-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        {isLogin ? "Login" : "Sign Up"}
      </h2>

      <div className="flex justify-center mb-6">
        <SignUpLogInToggle isLogin={isLogin} toggleForm={toggleForm} />
      </div>

      <AuthForm
        isLogin={isLogin}
        onSubmit={(e, email, password) => handleSubmit(e, email, password)}
      />

      <div className="mt-6 text-center">
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-cyan-200 py-3 rounded-lg flex items-center justify-center gap-2"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-6 h-6"
          />
          Continue with Google
        </button>
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={toggleForm}
          className="text-white hover:underline focus:outline-none"
        >
          {isLogin ? "Create an account" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default SignUpLogIn;
