import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../config/axios";
import Navbar from "./navbar";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
 

  const navigate = useNavigate(); // To redirect after successful signup

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    // Validate password confirmation
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    axios
      .post("/users/signup", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("token", res.data.token); // Save token in local storage if applicable
        setSuccessMessage("Account created successfully!");

        // Redirect to the home page or login page
        navigate("/homescreen")
      })
      .catch((err) => {
        console.log(err.response?.data);
        setErrorMessage(err.response?.data?.message || "An error occurred.");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Navbar/>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-neonBlue">Sign Up</h2>
        <form className="mt-6" onSubmit={submitHandler}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:ring-neonBlue focus:border-neonBlue"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:ring-neonBlue focus:border-neonBlue"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:ring-neonBlue focus:border-neonBlue"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:ring-neonBlue focus:border-neonBlue"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Error Message */}
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

          {/* Success Message */}
          {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-neonBlue text-white px-6 py-3 rounded-md font-bold transition transform duration-300 hover:bg-lightBlue hover:scale-105 shadow-lg"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-neonBlue hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

