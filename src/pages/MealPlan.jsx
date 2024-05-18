import React, { useState } from "react";
import axios from "axios";
import HeaderContent from "../components/HeaderContent/HeaderContent";
import MainContent from "../components/MainContent/MainContent";

const MealPlan = () => {
  const [mealPlan, setMealPlan] = useState(null);
  const [calories, setCalories] = useState(2000);
  const [diet, setDiet] = useState("");
  const [exclude, setExclude] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMealPlan = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/mealplanner/generate`,
        {
          params: {
            timeFrame: "day",
            targetCalories: calories,
            diet: diet,
            exclude: exclude,
            apiKey: import.meta.env.VITE_MEAL_API_KEY,
          },
        }
      );
      setMealPlan(response.data);
    } catch (err) {
      setError("Failed to fetch meal plan. Please try again.");
    } finally {
      setLoading(false);
    }
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
             from-yellow-400 
             via-green-400 
             to-yellow-400 
             animate-gradient-x
             bg-[length:200%_200%]
             "
           // Use the imported variable
        >
      <div className="max-w-4xl mx-auto p-6 bg-white bg-opacity-60 backdrop-blur-md rounded-lg shadow-xl  mt-20">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
          Generate Meal Plan
        </h1>

        <div className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="text-lg font-medium text-gray-700">Target Calories:</span>
              <input
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                className="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter calories (e.g., 2000)"
              />
            </label>

            <label className="block">
              <span className="text-lg font-medium text-gray-700">Diet:</span>
              <select
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
                className="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Any</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="paleo">Paleo</option>
                <option value="keto">Keto</option>
              </select>
            </label>
          </div>

          <label className="block">
            <span className="text-lg font-medium text-gray-700">Exclude Ingredients:</span>
            <input
              type="text"
              value={exclude}
              onChange={(e) => setExclude(e.target.value)}
              className="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Exclude ingredients (comma separated)"
            />
          </label>

          <button
            onClick={fetchMealPlan}
            className="w-full py-3 mt-6 font-semibold text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {loading ? "Generating..." : "Generate Meal Plan"}
          </button>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>

        {mealPlan && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Meal Plan</h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {mealPlan.meals.map((meal) => (
                <div
                  key={meal.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <img
                    src={`https://spoonacular.com/recipeImages/${meal.id}-312x231.${meal.imageType}`}
                    alt={meal.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{meal.title}</h3>
                    <p className="text-sm text-gray-500">Ready in {meal.readyInMinutes} minutes</p>
                    <p className="text-sm text-gray-500">Servings: {meal.servings}</p>
                    <a
                      href={meal.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-green-600 hover:text-green-700"
                    >
                      View Recipe
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mt-10">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Daily Nutritional Info</h3>
              <div className="flex flex-col space-y-2">
                <p>Calories: <span className="font-medium">{mealPlan.nutrients.calories}</span></p>
                <p>Carbohydrates: <span className="font-medium">{mealPlan.nutrients.carbohydrates}g</span></p>
                <p>Fat: <span className="font-medium">{mealPlan.nutrients.fat}g</span></p>
                <p>Protein: <span className="font-medium">{mealPlan.nutrients.protein}g</span></p>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
      </MainContent>
    </>
  );
};

export default MealPlan;
