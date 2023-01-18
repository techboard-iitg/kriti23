import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className='text-blue-500'>
        <ul>
          <li>
            <a href='/home'>Home Page</a>{" "}
            <a href='/scheduke'>Schedule Page</a>{" "}
          </li>
        </ul>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
