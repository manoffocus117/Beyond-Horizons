import React from "react";
import Coxs_bazar from "../assets/Coxs-Bazar.jpg";

const Booking = () => {
      return (
            <section className="">
                  <figure className="relative">
                        <img src={Coxs_bazar} alt="" className="object-cover" />
                        <div className="absolute inset-0 bg-black/50"></div>
                  </figure>
                  <div className="w-full absolute top-[30%] left-[5%] grid grid-cols-2 items-center justify-between ">
                        <div className="w-126.25">
                              <h1 className="text-8xl primary-font text-white">
                                    Cox's bazar
                              </h1>
                              <p className="text-[1rem] secondary-font text-white">
                                    Cox’s Bazar is a town on the southeast coast
                                    of Bangladesh. It’s known for its very long,
                                    sandy beachfront, stretching from Sea Beach
                                    in the north to Kolatoli Beach in the south.
                                    Aggameda Khyang monastery is home to bronze
                                    statues and centuries-old Buddhist
                                    manuscripts. South of town, the tropical
                                    rainforest of Himchari National Park has
                                    waterfalls and many birds. North, sea
                                    turtles breed on nearby Sonadia Island.
                              </p>
                        </div>
                        <form
                              action=""
                              className="bg-white p-10 rounded w-117.5 mx-auto space-y-4"
                        >
                              <fieldset className="fieldset w-full">
                                    <label
                                          className="label secondary-font font-medium text-[1rem]"
                                          htmlFor="origin"
                                    >
                                          Origin
                                    </label>
                                    <input
                                          type="text"
                                          id="origin"
                                          className="input w-full secondary-font text-[1rem] placeholder:text-black font-medium outline outline-none border-0 bg-base-300"
                                          placeholder="Origin"
                                    />
                              </fieldset>
                              <fieldset className="fieldset w-full">
                                    <label
                                          className="label secondary-font font-medium text-[1rem]"
                                          htmlFor="destination"
                                    >
                                          Destination
                                    </label>
                                    <input
                                          type="text"
                                          id="destination"
                                          className="input w-full secondary-font text-[1rem] placeholder:text-black font-medium outline outline-none border-0 bg-base-300"
                                          placeholder="Destination"
                                    />
                              </fieldset>
                              <div className="flex gap-5">
                                    <fieldset className="fieldset w-full">
                                          <label
                                                className="label secondary-font font-medium text-[1rem]"
                                                htmlFor="from-date"
                                          >
                                                From
                                          </label>
                                          <input
                                                type="date"
                                                id="from-date"
                                                className="input w-full secondary-font text-[1rem] placeholder:text-black font-medium outline outline-none border-0 bg-base-300"
                                                placeholder="date"
                                          />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                          <label
                                                className="label secondary-font font-medium text-[1rem]"
                                                htmlFor="to-date"
                                          >
                                                To
                                          </label>
                                          <input
                                                type="date"
                                                id="to-date"
                                                className="input w-full secondary-font text-[1rem] placeholder:text-black font-medium outline outline-none border-0 bg-base-300"
                                                placeholder="Name"
                                          />
                                    </fieldset>
                              </div>

                              <button className="w-full btn bg-accent secondary-font mt-4">
                                    Start Booking
                              </button>
                        </form>
                  </div>
            </section>
      );
};

export default Booking;
