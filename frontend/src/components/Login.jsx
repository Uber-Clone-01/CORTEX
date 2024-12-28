import React, { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from '../config/axios';
import Navbar from "./navbar";
import {UserContext} from '../context/user.context'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error messages
    axios.post('/users/login', {
      email,
      password
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('token', res.data.token);
        setUser(res.data.user);
        navigate('/homescreen');
      })
      .catch((err) => {
        console.error(err.response?.data || "Error occurred");
        setErrorMessage(err.response?.data?.message || "Login failed. Please try again.");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-200">
      <Navbar />
      {/* Logo */}
      <div className="mb-8">
        <img
          src="/assets/CortexAILogo.png" // Ensure this path is correct
          alt="Logo"
          className="w-16 h-16 shadow-md transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Login Form */}
      <div className="w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg shadow-md transition-transform duration-300 hover:scale-110">
        <h2 className="text-2xl font-semibold text-center text-gray-100">
          Sign in to Your Account
        </h2>

        <form className="mt-6" onSubmit={submitHandler}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400"
            >
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-200"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-200"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Footer Links */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            New to the platform?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-500 hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;


