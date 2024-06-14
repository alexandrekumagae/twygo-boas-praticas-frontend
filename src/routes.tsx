import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import('./pages/home'))
const CourseDetail = lazy(() => import('./pages/course-detail'))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/curso/:uuid",
    element: <CourseDetail />,
  },
]);