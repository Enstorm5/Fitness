import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    // Redirect to the Home page without validation
    navigate('/Home'); // Adjusted path to match your routing
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute -top-24 -left-20 w-80 h-80 bg-purple-300 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-indigo-400 rounded-full filter blur-2xl opacity-40 animate-pulse"></div>
      
      <div className="z-10 w-full max-w-md bg-white shadow-lg rounded-2xl p-8 px-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              placeholder="Email"
              required
            />
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transform hover:scale-105 transition duration-300"
          >
            Log In
          </button>
        </form>

        <p className="text-gray-600 mt-4 text-center">
          Don’t have an account?{' '}
          <a href="#" className="text-purple-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
