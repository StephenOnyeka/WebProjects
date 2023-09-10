import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

function SwiperAni() {
  return (
    <div id="SwiperAni">
      <Swiper
        // slidesPerView={1}
        spaceBetween={50}
        centeredSlides={true}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          margin: 300,
          clickable: true,
          
        }}
        modules={[Autoplay, Pagination ]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <section className="messages_content">
            <div className="image">
              <img src="/images/Screenshot 2023-07-19 083143 (4).png" alt="" />
            </div>
            <br />
            <p>
              " I cannot help but say he's really talented, was worth it!"
              <br /> <br />_ James Connors
            </p>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="messages_content">
            <div className="image">
              {" "}
              <img src="./images/Screenshot 2023-07-19 084427.png" alt="" />
            </div>
            <br />
            <p>
              " I still enjoy that commercial site till today, no lapses. "
              <br /> <br />_ Praise Mbaukwu
            </p>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="messages_content">
            <div className="image">
              {" "}
              <img src="/images/Screenshot 2023-07-19 084741.png" alt="" />
            </div>

  
  <br />          <p>
              " I appreciate his your work-ethic. Hope to work with you again!"
              <br /> <br />_ Linus Wisdom
            </p>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="messages_content">
            <div className="image">
              {" "}
              <img src="images/Screenshot 2023-07-19 083045.png" alt="" />
            </div>
            <br />
            <p>
              " You are one of a kind Steve. I love your art of creativity and
              literacy in your field"
              <br /> <br />_ Sheneille Laura
            </p>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="messages_content">
            <div className="image">
              {" "}
              <img src="/images/Screenshot 2023-07-19 084602 (2).png" alt="" />
            </div>
            <br />
            <p>
              " I appreciate your work for me Stephen, modest and reports in time. Keep working hard"
              <br /> <br />_ Bob Kingstar
            </p>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

// var mySwiper = new Swiper(".swiper-container", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: false,

//   // Navigation arrows
//   nextButton: ".swiper-button-next",
//   prevButton: ".swiper-button-prev",

//   // And if we need scrollbar
//   scrollbar: ".swiper-scrollbar",
//   allowSwipeToPrev: false,
//   allowSwipeToNext: false,
// });

export default SwiperAni


