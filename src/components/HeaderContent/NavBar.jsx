import React, { useState } from "react";
import MenuItems from "../MenuItems/MenuItems";
import logo from "../logo2.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-white bg-opacity-60 backdrop-blur-md text-gray-800 shadow-md z-10">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-4" />
        <span className="text-2xl font-bold">My Fitness</span>
      </div>

      {/* Hamburger icon for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block lg:hidden p-2 focus:outline-none"
      >
        <span className="sr-only">Toggle menu</span>
        <div className="w-6 h-1 bg-gray-800 mb-1"></div>
        <div className="w-6 h-1 bg-gray-800 mb-1"></div>
        <div className="w-6 h-1 bg-gray-800"></div>
      </button>

      {/* Menu items */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:space-x-4 lg:items-center transition-all duration-300`}
      >
        <div className="px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          <MenuItems linkname="Home" url="/" />
        </div>
        <div className="px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          <MenuItems linkname="Workout" url="/Workout" />
        </div>
        <div className="px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          <MenuItems linkname="Meal Plan" url="/Meal-Plan" />
        </div>
        <div className="px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          <MenuItems linkname="About" url="/About" />
        </div>
        <div className="px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          <MenuItems linkname="Select Trainer" url="/select-trainer" />
        </div>
        <div className="px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          <MenuItems linkname="Booking Calendar" url="/booking-calendar" />
        </div>
        <div className="px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          <MenuItems linkname="Delete Account" url="/delete-account" />
        </div>
        <div className="px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          <MenuItems linkname="Payment" url="/payment" />
        </div>
        <div className="px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          <MenuItems linkname="Fitness Profile" url="/fitness-profile" />
        </div>
        <div className="px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          <MenuItems linkname="Prototype" url="/prototype" />
        </div>
        <div className="px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          <MenuItems linkname="Pre-made Workout Plans" url="/premade-workout-plans" />
        </div>
        <div className="px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          <MenuItems linkname="Create Account" url="/create-account" />
        </div>
        <div className="px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          <MenuItems linkname="Log Workout" url="/log-workout" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
