import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Hero from "../pages/Hero";
import Booking from "../pages/Booking";
import Login from "../pages/Login";

const router = createBrowserRouter([
      {
            path: "/",
            element: <Root />,
            children: [
                  {
                        path: "/",
                        element: <Hero />,
                  },
                  {
                        path: "/booking",
                        element: <Booking />,
                  },
                  {
                        path: "/login",
                        element: <Login />,
                  },
            ],
      },
]);

export default router;
