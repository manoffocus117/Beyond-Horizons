import React from "react";
import { Link } from "react-router";
import Continue_with from "../components/Continue_with";

const Login = () => {
      return (
            <section className="w-11/12 mx-auto my-40 flex flex-col items-center justify-center">
                  <form className="w-130 space-y-5 border-2 border-gray-300 rounded p-10">
                        <h1 className="secondary-font font-bold text-2xl text-start mb-8">
                              Login
                        </h1>
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
                        {/* remember me field */}
                        <div className="flex items-center justify-between mt-10">
                              <label className="label">
                                    <input
                                          type="checkbox"
                                          className="checkbox"
                                    />
                                    Remember me
                              </label>
                              <div>
                                    <a className="link link-hover text-accent secondary-font underline">
                                          Forgot password?
                                    </a>
                              </div>
                        </div>
                        {/* submit button */}
                        <button className="w-full btn bg-accent secondary-font mt-4">
                              Login
                        </button>
                        <p className="secondary-font text-center">
                              Don't have an account?
                              <Link
                                    to={"/register"}
                                    className={"text-accent underline pl-2"}
                              >
                                    Create an Account
                              </Link>
                        </p>
                  </form>
                  <Continue_with />
            </section>
      );
};

export default Login;
