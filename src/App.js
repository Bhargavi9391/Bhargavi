import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notes from "./Components/Notes"; // Ensure the path is correct
import "./App.css";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Notes />, // Default route
  },
  {
    path: "notes",
    element: <Notes />,
  }
], {
  basename: "/Bhargavi" // Add your repository name here
});

export default function App() {
  return (
    <div className="container">
      <RouterProvider router={routerConfig} />
    </div>
  );
}
