import React, { useState ,useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/user.context";
import axios from "../config/axios";
import Navbar from "./navbar";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const{setUser}=useContext(UserContext);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    axios
      .post("/users/register", { name, email, password })
      .then((res) => {
        setSuccessMessage("Account created successfully!");
        localStorage.setItem('token', res.data.token);
        setUser(res.data.user);
        navigate("/homescreen");
      })
      .catch((err) => {
        setErrorMessage(err.response?.data?.message || "Something went wrong. Please try again.");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-gray-200">
      <Navbar />
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
        <h2 className="text-2xl font-bold text-center text-blue-400">Create Account</h2>
        <form className="mt-6" onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">
              Full Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md text-gray-200 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md text-gray-200 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-400">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md text-gray-200 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Create a password"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400">
              Confirm Password
            </label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-4 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md text-gray-200 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-white bg-blue-500 rounded-md font-bold transition transform duration-300 hover:bg-blue-600 hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
