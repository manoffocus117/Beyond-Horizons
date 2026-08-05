import React from "react";
import { Link } from "react-router";
import Continue_with from "../components/Continue_with";

const Register = () => {
      return (
            <section className="w-11/12 mx-auto my-40 flex flex-col items-center justify-center">
                  <form className="w-130 space-y-5 border-2 border-gray-300 rounded p-10">
                        <h1 className="secondary-font font-bold text-2xl text-start mb-8">
                              Create an Account
                        </h1>
                        {/* name field */}
                        <label className="input validator w-full border-0 border-b outline-none rounded-none">
                              <input
                                    type="text"
                                    placeholder="First Name"
                                    required
                                    className="secondary-font"
                              />
                        </label>
                        {/* last name field */}
                        <label className="input validator w-full border-0 border-b outline-none rounded-none">
                              <input
                                    type="text"
                                    placeholder="Last Name"
                                    required
                                    className="secondary-font"
                              />
                        </label>
                        {/* email field */}
                        <label className="input validator w-full border-0 border-b outline-none rounded-none">
                              <input
                                    type="email"
                                    placeholder="Username or Email"
                                    required
                                    className="secondary-font"
                              />
                        </label>
                        <div className="validator-hint hidden">
                              Enter valid email address
                        </div>
                        {/* password field */}
                        <label className="input validator w-full border-0 border-b outline-none rounded-none">
                              <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    className="secondary-font"
                              />
                        </label>
                        <p className="validator-hint hidden">
                              Must be more than 8 characters, including
                              <br />
                              At least one number <br />
                              At least one lowercase letter <br />
                              At least one uppercase letter
                        </p>
                        {/* confirm password field */}
                        <label className="input validator w-full border-0 border-b outline-none rounded-none">
                              <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    required
                                    className="secondary-font"
                              />
                        </label>
                        <p className="validator-hint hidden">
                              Must be more than 8 characters, including
                              <br />
                              At least one number <br />
                              At least one lowercase letter <br />
                              At least one uppercase letter
                        </p>
                        {/* submit button */}
                        <button className="w-full btn bg-accent secondary-font mt-4">
                              Login
                        </button>
                        <p className="secondary-font text-center">
                              Already have an account?
                              <Link
                                    to={"/Login"}
                                    className={"text-accent underline pl-2"}
                              >
                                    Login
                              </Link>
                        </p>
                  </form>
                  <Continue_with />
            </section>
      );
};

export default Register;
