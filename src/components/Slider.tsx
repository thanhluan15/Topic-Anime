import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/swiper.min.css"

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Waifu from "./Waifu";
import { waifuInfo } from "../utils/dummyData";

function App() {
  return (
    <div className="container">
      <h1 className="heading text-3xl text-white">Comment</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {waifuInfo.map((i, index) => {
          return (
            <SwiperSlide className="m-auto">
              <Waifu
                src={waifuInfo[index].src}
                waifuName={waifuInfo[index].waifuName}
                comment={waifuInfo[index].comment}
              ></Waifu>
            </SwiperSlide>
          );
        })}

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
