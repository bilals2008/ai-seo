// File: src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ai-seo-2/Home";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, //first website
  },
  {
    path: "/ai-seo-2", 
    element: <Home />, //second website
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
