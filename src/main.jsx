import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Workout from './pages/Workout.jsx';
import MealPlan from './pages/MealPlan.jsx';
import About from './pages/AboutUs.jsx';
import TrainerAvailability from './pages/TrainerAvailability.jsx';
import SelectTrainer from './pages/SelectTrainer.jsx';
import BookingCalendar from './pages/BookingCalendar.jsx';
import DeleteAccount from './pages/DeleteAccount.jsx';

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
  {
    path: "/trainer-availability",
    element: <TrainerAvailability />,
  },
  {
    path: "/select-trainer",
    element: <SelectTrainer />,
  },
  {
    path: "/booking-calendar",
    element: <BookingCalendar />,
  },
  {
    path: "/delete-account",
    element: <DeleteAccount />,
  },

 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
