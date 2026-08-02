import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Slider_img_1 from "../assets/Coxs-Bazar.jpg";
import Slider_img_2 from "../assets/sajek.jpg";
import Slider_img_3 from "../assets/sreemangal.jpg";
import Slider_img_4 from "../assets/sundarban.jpg";
import Slider_img_5 from "../assets/kuakata.jpg";

import { FaArrowRightLong } from "react-icons/fa6";

const Slider = () => {
      return (
            <>
                  <Swiper
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={true}
                        modules={[Pagination, Autoplay]}
                  >
                        <SwiperSlide className="hero min-h-screen">
                              <img src={Slider_img_1} alt="" />
                              <div className="slider-text">
                                    <h1>Cox's Bazar</h1>
                                    <p>
                                          The longest natural sea beach in the
                                          world.
                                          <br />
                                          Lorem ipsum dolor sit, amet
                                          consectetur adipisicing elit.
                                          Voluptatem fuga reprehenderit beatae
                                          optio ea saepe libero facilis
                                          accusantium vel dolorum.
                                    </p>
                              </div>
                              <button className="absolute top-[65%] left-[5%] flex items-center gap-2 bg-accent secondary-font text-[1rem] font-medium px-6 py-3 rounded">
                                    Booking
                                    <FaArrowRightLong />
                              </button>
                        </SwiperSlide>
                        <SwiperSlide className="hero min-h-screen">
                              <img src={Slider_img_2} alt="" />
                              <div className="slider-text">
                                    <h1>Sajek Valley</h1>
                                    <p>
                                          The most beautiful valley in
                                          Bangladesh.
                                          <br />
                                          Lorem ipsum dolor sit, amet
                                          consectetur adipisicing elit.
                                          Voluptate nihil odio, optio
                                          consequuntur sint commodi minus
                                          quaerat culpa sit facere?
                                    </p>
                                    <button className="absolute top-[65%] left-[5%] flex items-center gap-2 bg-accent secondary-font text-[1rem] font-medium px-6 py-3 rounded">
                                          Booking
                                          <FaArrowRightLong />
                                    </button>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide className="hero min-h-screen">
                              <img src={Slider_img_3} alt="" />
                              <div className="slider-text">
                                    <h1>Sreemangal</h1>
                                    <p>
                                          The tea garden of Bangladesh.
                                          <br />
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit. Sed enim molestias
                                          voluptas vel assumenda commodi hic
                                          laudantium obcaecati, maxime nostrum?
                                    </p>
                              </div>
                              <button className="absolute top-[65%] left-[5%] flex items-center gap-2 bg-accent secondary-font text-[1rem] font-medium px-6 py-3 rounded">
                                    Booking
                                    <FaArrowRightLong />
                              </button>
                        </SwiperSlide>
                        <SwiperSlide className="hero min-h-screen">
                              <img src={Slider_img_4} alt="" />
                              <div className="slider-text">
                                    <h1>Sundarban</h1>
                                    <p>
                                          The largest mangrove forest in
                                          Bangladesh.
                                          <br />
                                          Lorem ipsum, dolor sit amet
                                          consectetur adipisicing elit. Atque
                                          quaerat cupiditate natus aspernatur
                                          nemo ad provident eligendi sequi
                                          dolorem. Nulla.
                                    </p>
                              </div>
                              <button className="absolute top-[65%] left-[5%] flex items-center gap-2 bg-accent secondary-font text-[1rem] font-medium px-6 py-3 rounded">
                                    Booking
                                    <FaArrowRightLong />
                              </button>
                        </SwiperSlide>
                        <SwiperSlide className="hero min-h-screen">
                              <img src={Slider_img_5} alt="" />
                              <div className="slider-text">
                                    <h1>Kuakata Sea Beach</h1>
                                    <p>
                                          The most beautiful sea beach in
                                          Bangladesh.
                                          <br />
                                          Lorem ipsum, dolor sit amet
                                          consectetur adipisicing elit.
                                          Temporibus ad obcaecati nisi
                                          doloremque voluptate natus voluptates
                                          quasi et quia harum?
                                    </p>
                              </div>
                              <button className="absolute top-[65%] left-[5%] flex items-center gap-2 bg-accent secondary-font text-[1rem] font-medium px-6 py-3 rounded">
                                    Booking
                                    <FaArrowRightLong />
                              </button>
                        </SwiperSlide>
                  </Swiper>
            </>
      );
};

export default Slider;
