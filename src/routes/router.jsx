import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Hero from "../pages/Hero";
import Booking from "../pages/Booking";
import Login from "../pages/Login";
import News from "../pages/News";
import Destination from "../pages/Destination";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Register from "../pages/Register";

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
                  {
                        path: "/news",
                        element: <News />,
                  },
                  {
                        path: "/destination",
                        element: <Destination />,
                  },
                  {
                        path: "/blog",
                        element: <Blog />,
                  },
                  {
                        path: "/contact",
                        element: <Contact />,
                  },
                  {
                        path: "/register",
                        element: <Register />,
                  },
            ],
      },
]);

export default router;
