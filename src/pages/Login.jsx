import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axios"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
  
      console.log("Login successful, token:", response.data.token); // khaby token
      localStorage.setItem("token", response.data.token);
  
      setTimeout(() => {
        console.log("Redirecting to /timer...");
        window.location.href = "/timer";
        //navigate("/timer");

      }, 500); 
  
    } catch (err) {
      console.log("Login failed:", err);
      setError("Invalid credentials. Please try again.");
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Welcome Back to <span className="text-accent">Luna</span>
        </h2>

      
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="text-accent focus:ring-0 focus:ring-offset-0 focus:ring-accent"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <a
              href="#forgot-password"
              className="text-sm text-accent hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-accent text-white py-2 rounded-md text-lg font-semibold hover:bg-secondary transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to={"/signup"}
            className="text-accent font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
