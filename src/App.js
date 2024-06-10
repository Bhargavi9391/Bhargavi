import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
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
]);

export default function App() {
  return (
    <div className="container">
      <RouterProvider router={routerConfig} />
    </div>
  );
}
