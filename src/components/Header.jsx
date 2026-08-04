import React from "react";
import Logo_black from "../assets/logo_1.svg";
import Logo_white from "../assets/logo_2.svg";
import { Link, NavLink, useLocation } from "react-router";

const Header = () => {
      const location = useLocation();
      return (
            <header className="w-11/12 mx-auto fixed top-0 left-0 right-0 z-10">
                  <nav className="navbar items-center">
                        <div className="navbar-start gap-20 h-20">
                              <Link to="/" className="h-full">
                                    <img
                                          src={
                                                (location.pathname === "/" &&
                                                      Logo_white) ||
                                                Logo_black
                                          }
                                          alt="logo"
                                          className="h-full"
                                    />
                              </Link>
                              {/* searchbar */}
                              <label
                                    className={`input w-92.5 bg-transparent secondary-font text-[1rem] border ${
                                          (location.pathname === "/" &&
                                                "border-white text-black") ||
                                          "border-black"
                                    } outline-none`}
                              >
                                    <svg
                                          className={`h-4 opacity-100 ${location.pathname === "/" && "text-white"} || text-black`}
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
                                          className={`${
                                                (location.pathname === "/" &&
                                                      "text-white placeholder:text-white") ||
                                                "text-black placeholder:text-black"
                                          }`}
                                    />
                              </label>
                        </div>
                        <div className="navbar-end gap-20">
                              <menu
                                    className={`${
                                          (location.pathname === "/" &&
                                                "text-white") ||
                                          "text-black"
                                    } text-[1rem] flex items-center gap-20 secondary-font font-medium`}
                              >
                                    <NavLink to={"/news"}>News</NavLink>
                                    <NavLink to={"/destination"}>
                                          Destination
                                    </NavLink>
                                    <NavLink to={"/blog"}>Blog</NavLink>
                                    <NavLink to={"/contact"}>Contact</NavLink>
                              </menu>
                              <Link
                                    to={"/login"}
                                    className="bg-accent secondary-font text-[1rem] font-medium px-6 py-3 rounded"
                              >
                                    Login
                              </Link>
                        </div>
                  </nav>
            </header>
      );
};

export default Header;
