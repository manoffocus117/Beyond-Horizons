import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { destinations } from "./../data/destinations";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
      const [thumb_swiper, set_thumb_swiper] = useState(null);
      const prev_ref = useRef(null);
      const next_ref = useRef(null);
      return (
            <section className="hero">
                  {/* main slider */}
                  <Swiper
                        thumbs={{ swiper: thumb_swiper }}
                        navigation={{
                              prevEl: prev_ref.current,
                              nextEl: next_ref.current,
                        }}
                        onBeforeInit={(swiper) => {
                              swiper.navigation.prevEl = prev_ref.current;
                              swiper.navigation.nextEl = next_ref.current;
                        }}
                        autoplay
                        loop
                        modules={[Thumbs, Autoplay, Navigation, Pagination]}
                        className="background-slide"
                  >
                        {destinations.map((item) => (
                              <SwiperSlide key={item.id}>
                                    <img src={item.image} alt={item.title} />
                              </SwiperSlide>
                        ))}
                  </Swiper>
                  {/* custom nav buttons */}
                  <div className="hero-nav">
                        <button
                              ref={prev_ref}
                              className="nav-btn nav-prev"
                              aria-label="Previous slide"
                        >
                              <svg
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                    fill="none"
                              >
                                    <path
                                          d="M15 18l-6-6 6-6"
                                          stroke="currentColor"
                                          strokeWidth="2.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                    />
                              </svg>
                        </button>
                        <button
                              ref={next_ref}
                              className="nav-btn nav-next"
                              aria-label="Next slide"
                        >
                              <svg
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                    fill="none"
                              >
                                    <path
                                          d="M9 18l6-6-6-6"
                                          stroke="currentColor"
                                          strokeWidth="2.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                    />
                              </svg>
                        </button>
                  </div>
                  {/* thumbnail slider */}
                  <Swiper
                        className="card-slider"
                        slidesPerView={3}
                        spaceBetween={10}
                        watchSlidesProgress
                        modules={[Thumbs]}
                        onSwiper={set_thumb_swiper}
                  >
                        {destinations.map((item) => (
                              <SwiperSlide key={item.id}>
                                    <img src={item.image} alt="" />
                              </SwiperSlide>
                        ))}
                  </Swiper>
            </section>
      );
};

export default Hero;
