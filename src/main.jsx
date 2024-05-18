import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Workout from './pages/Workout.jsx';
import MealPlan from './pages/MealPlan.jsx';
import About from './pages/AboutUs.jsx';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Workout",
    element: <Workout />,
  },
  {
    path: "/Meal-Plan",
    element: <MealPlan />,
  },
  {
    path: "/About",
    element: <About />,
  },

 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
