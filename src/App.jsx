import React, { useState } from "react";
import MainContent from "./components/MainContent/MainContent";
import HeaderContent from "./components/HeaderContent/HeaderContent";
import { Link } from "react-router-dom";
import logo from "./assets/logo2.png";

const App = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);
  };

  return (
    <>
      <HeaderContent />
      <MainContent>
        <div 
          className="
            min-h-screen 
            p-5 
            bg-gradient-to-r 
            from-blue-400 
            via-purple-400 
            to-pink-400 
            animate-gradient-x 
            bg-[length:200%_200%]
            animate-gradient-invert
          "
        >  
          {/* Cards and BMI Calculator Section */}
          <div className="flex flex-col items-center gap-12 mb-12">
            {/* Flex Container for Cards and BMI Calculator */}
            <div className="flex flex-col md:flex-row items-center gap-8 mt-20">

              {/* Logo Card */}
              <div className="bg-white bg-opacity-60 rounded-xl shadow-lg p-6 w-64 text-center">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h2 className="text-2xl font-semibold">Fitness Manager PramoD DulanJa Powered with AI</h2>
              </div>

              {/* Meal Plan Card */}
              <Link to="/meal-plan" className="bg-white bg-opacity-60 rounded-xl shadow-lg p-6 w-64 text-center transform hover:scale-105 transition-transform">
                <h2 className="text-2xl font-semibold text-green-600">Meal Plan</h2>
                <p className="text-gray-600 mt-2">Get a tailored meal plan based on your needs.</p>
              </Link>

              {/* BMI Calculator */}
              <div className="bg-white bg-opacity-60 rounded-xl shadow-lg p-6 w-80 mx-auto">
                <h3 className="text-xl font-semibold text-center mb-4">BMI Calculator</h3>
                <div className="flex flex-col gap-4">
                  <input
                    type="number"
                    placeholder="Weight (kg)"
                    className="p-2 border rounded"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Height (cm)"
                    className="p-2 border rounded"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                  <button
                    onClick={calculateBMI}
                    className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 rounded mt-2"
                  >
                    Calculate BMI
                  </button>
                </div>
                {bmi && (
                  <p className="text-center text-lg font-semibold mt-4">
                    Your BMI: {bmi}
                  </p>
                )}
              </div>

              {/* Workout Plan Card */}
              <Link to="/Workout" className="bg-white bg-opacity-60 rounded-xl shadow-lg p-6 w-64 text-center transform hover:scale-105 transition-transform">
                <h2 className="text-2xl font-semibold text-yellow-500">Workout Plan</h2>
                <p className="text-gray-600 mt-2">Discover a workout routine built just for you.</p>
              </Link>

              {/* Personalized Progress Plans Card */}
              <div className="bg-white bg-opacity-60 rounded-xl shadow-lg p-6 w-64 text-center">
                <h2 className="text-2xl font-semibold text-gray-700 pulse">Personalized Progress Plans</h2>
                <p className="text-gray-600 mt-2 pulse">Coming Soon.....</p>
              </div>

            </div>
          </div>

          {/* Fitness Info Section (BMI Chart) */}
          <div className="bg-white bg-opacity-60 rounded-xl shadow-lg p-6 w-full max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-center mb-4">BMI Chart</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="font-bold text-green-600">Underweight</p>
                <p>BMI &lt; 18.5</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-yellow-600">Normal Weight</p>
                <p>BMI 18.5 - 24.9</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-orange-500">Overweight</p>
                <p>BMI 25 - 29.9</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-red-600">Obesity</p>
                <p>BMI &gt;= 30</p>
              </div>
            </div>
          </div>
        </div>
      </MainContent> 
    </>
  );
};

export default App;
