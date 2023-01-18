import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./routes/error-page";
import Team from "./routes/team";
import Schedule from "./routes/schedule";
import PointsTable from "./routes/points_table";
import ProblemStatement from "./routes/problem-statement";
import Home from "./routes/home"

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
            <a href='/schedule'>Schedule Page</a>
          </li>
          <li>
            <a href='/points-table'>Points Table</a>
          </li>
        </ul>
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/problem-statement",
    element: <ProblemStatement />,
  },
  {
    path: "/team",
    element: <Team />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
  {
    path: "/points-table",
    element: <PointsTable/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
