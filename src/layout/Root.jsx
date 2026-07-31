import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Root = () => {
      return (
            <>
                  <Hero />
                  <Outlet />
                  <Footer />
            </>
      );
};

export default Root;
