import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root.jsx";
import ErrorPage from "./routes/error-page.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Project from "./routes/project.jsx";
import App from "./routes/app.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects/virtual-forest",
    element: <Project name={"virtual-forest"} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/apps/ksh",
    element: <App name={"ksh"} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/apps/cryptop",
    element: <App name={"cryptop"} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/apps/famify",
    element: <App name={"famify"} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/apps/kanswift",
    element: <App name={"Kanswift"} />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
