import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Header from "../components/Header";

const Root = () => {
      return (
            <>
                  <Header />
                  <Hero />
                  <Outlet />
                  <Footer />
            </>
      );
};

export default Root;
