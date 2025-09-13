import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Rendering only, no actual logic
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 relative">
      
      {/* Back Button with Arrow */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 text-2xl text-black rounded-full bg-zinc-200 p-2"
      >
        <FaArrowLeft/>
      </button>

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Sign In</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-2 mt-2 bg-black text-white rounded-3xl font-semibold hover:bg-gray-800 transition-colors duration-300"
          >
            Sign In
          </button>

          {/* Links */}
          <div className="flex justify-between text-xs mt-2">
            <Link to="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
            <Link to="/register" className="text-blue-500 hover:underline">
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
