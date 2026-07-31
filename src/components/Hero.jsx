import React from "react";
import Header from "./Header";
import bgImage from "../assets/Coxs-Bazar.jpg";

const Hero = () => {
      return (
            <section
                  className="hero min-h-screen"
                  style={{
                        backgroundImage: `url(${bgImage})`,
                  }}
            >
                  <Header />
            </section>
      );
};

export default Hero;
