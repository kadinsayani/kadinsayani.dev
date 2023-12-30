import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root.jsx";
import ErrorPage from "./routes/error-page.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Project from "./routes/projects/project.jsx";
import PrivacyPolicy from "./routes/privacy-policy.jsx";
import Support from "./routes/support.jsx";
import Post from "./routes/blog/post/post.jsx";
import Blog from "./routes/blog/blog.jsx";
import Projects from "./routes/projects/projects.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "projects",
        element: <Projects />,
        errorElement: <ErrorPage />,
      },
      {
        path: "contact",
        element: <Root />,
        errorElement: <ErrorPage />,
      },
      {
        path: "projects/ksh",
        element: <Project name={"ksh"} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "projects/cryptop",
        element: <Project name={"cryptop"} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "projects/famify",
        element: <Project name={"famify"} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "projects/kanbo",
        element: <Project name={"Kanbo"} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "apps/kanbo/privacy-policy",
        element: <PrivacyPolicy name={"Kanbo"} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "apps/kanbo/support",
        element: <Support name={"Kanbo"} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "blog",
        element: <Blog />,
        errorElement: <ErrorPage />,
      },
      {
        path: "blog/:postId",
        element: <Post />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
