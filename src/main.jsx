import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./routes/error-page";
import Team from "./routes/team";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className='text-blue-500 grid place-content-center text-4xl h-screen'>
        <ul className='grid gap-4'>
          <li>
            <a href='/home'>Home Page</a>
          </li>
          <li>
            <a href='/team'>Team Page</a>
          </li>
          <li>
            <a href='/scheduke'>Schedule Page</a>
          </li>
        </ul>
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/team",
    element: <Team />,
    // errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
