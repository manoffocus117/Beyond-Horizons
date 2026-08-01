import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Slider_img_1 from "../assets/Coxs-Bazar.jpg";
import Slider_img_2 from "../assets/Sea-Beach.png";

const Slider = () => {
      return (
            <>
                  <Swiper
                        pagination={{ clickable: true }}
                        autoplay={true}
                        modules={[Pagination, Autoplay]}
                  >
                        <SwiperSlide className="hero min-h-screen">
                              <img src={Slider_img_1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="hero min-h-screen">
                              <img src={Slider_img_2} alt="" />
                        </SwiperSlide>
                  </Swiper>
            </>
      );
};

export default Slider;
