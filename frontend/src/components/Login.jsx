
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  // Corrected import syntax

import Navbar from "./navbar";  // Importing Navbar component


const Login = () => {


    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    

    const navigate = useNavigate()

    function submitHandler(e) {

        e.preventDefault()

        axios.post('/users/login', {
            email,
            password
        }).then((res) => {
            console.log(res.data)

            localStorage.setItem('token', res.data.token)
            setUser(res.data.user)

            navigate('/homescreen')
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Navbar/>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-neonBlue">Login</h2>
        <form className="mt-6"
        onSubmit={submitHandler}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
             onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:ring-neonBlue focus:border-neonBlue"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:ring-neonBlue focus:border-neonBlue"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-neonBlue text-white px-6 py-3 rounded-md font-bold transition transform duration-300 hover:bg-lightBlue hover:scale-105 shadow-lg"
            >
              Login
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-neonBlue hover:underline">
      Sign Up
    </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
