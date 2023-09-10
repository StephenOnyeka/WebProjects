import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"; 

// Import Swiper styles
import "swiper/css";
// import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

function Portfolio() {
  return (
    <div className="Swiper">
      <Swiper
        speed={9000}
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        Pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        id="MySwiper"
      >
        <SwiperSlide id="sliding">
          <img className=" imagery" src="/images/Crud Application.png" alt="" />
        </SwiperSlide>
        <SwiperSlide id="sliding">
          <img className=" imagery" src="/images/Portfolio.png" alt="" />
        </SwiperSlide>
        <SwiperSlide id="sliding">
          <img className=" imagery" src="/images/contact form.png" alt="" />
        </SwiperSlide>
        <SwiperSlide id="sliding">
          <img className=" imagery" src="/images/Responsive Web.png" alt="" />
        </SwiperSlide>
        <SwiperSlide id="sliding">
          <img className=" imagery" src="/images/Star rating.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Portfolio;
