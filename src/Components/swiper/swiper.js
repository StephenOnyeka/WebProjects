import React, { useRef, useState } from "react";
// Import Swiper React components 
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function Logo() {
  return (
    <>
      <Swiper
        speed={9000}
        spaceBetween={30}
        slidesPerView={5}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="\images\adidas.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="\images\Balenciaga.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="\images\dolce & gabbana.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="\images\Gucci.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="\images\louis vuitton.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="\images\Nike.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="\images\Supreme.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="\images\versace.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="\images\champion Logo.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Logo;
