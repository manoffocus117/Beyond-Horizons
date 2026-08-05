import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Continue_with = () => {
      return (
            <div className="w-130 mx-auto flex flex-col items-center">
                  <div className="divider secondary-font my-10">OR</div>
                  <div className="flex flex-col gap-2 w-110">
                        <button className="btn bg-white secondary-font rounded-full">
                              <FaFacebook className="text-2xl" /> Continue with
                              Facebook
                        </button>
                        <button className="btn bg-white secondary-font rounded-full">
                              <FaGoogle className="text-2xl" /> Continue with
                              Google
                        </button>
                  </div>
            </div>
      );
};

export default Continue_with;
