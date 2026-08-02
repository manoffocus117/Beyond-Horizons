import React from "react";
import Logo_white from "../assets/logo.svg";
import Logo_black from "../assets/logo_black.svg";
import { useLocation } from "react-router";

const Header = () => {
      const location = useLocation();
      console.log(location.pathname);
      return (
            <header className="w-11/12 mx-auto fixed top-0 left-0 right-0 z-10">
                  <nav className="navbar items-center">
                        <div className="navbar-start gap-20 h-20">
                              <img
                                    src={
                                          location.pathname == "login" ||
                                          "register"
                                                ? Logo_black
                                                : Logo_white
                                    }
                                    alt="logo"
                                    className="h-full"
                              />
                              {/* searchbar */}
                              <label
                                    className={`input w-92.5 bg-transparent secondary-font text-[1rem] border ${location.pathname == "login" || "register" ? "border-black" : "border-white"} outline-none`}
                              >
                                    <svg
                                          className="h-[1em] opacity-100 text-white"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                    >
                                          <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2.5"
                                                fill="none"
                                                stroke="currentColor"
                                          >
                                                <circle
                                                      cx="11"
                                                      cy="11"
                                                      r="8"
                                                ></circle>
                                                <path d="m21 21-4.3-4.3"></path>
                                          </g>
                                    </svg>
                                    <input
                                          type="search"
                                          required
                                          placeholder="Search your Destination..."
                                          className={`${location.pathname == "login" || "register" ? "text-black" : "text-white"}`}
                                    />
                              </label>
                        </div>
                        <div className="navbar-end gap-20">
                              <menu
                                    className={`${location.pathname == "login" || "register" ? "text-black" : "text-white"} text-[1rem] flex gap-20 secondary-font`}
                              >
                                    <li>News</li>
                                    <li>Destination</li>
                                    <li>Blog</li>
                                    <li>Contact</li>
                              </menu>
                              <button className="bg-accent secondary-font text-[1rem] font-medium px-6 py-3 rounded">
                                    Login
                              </button>
                        </div>
                  </nav>
            </header>
      );
};

export default Header;
