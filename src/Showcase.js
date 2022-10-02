import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Showcase = () => {
  return (
    <>
      <h2 className="text-2xl font-bold">Project showcase</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Project />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

const Project = () => {
  return (
    <ul className="swiper-wrapper">
      <li className="swiper-slide">
        <a
          href="read if stinky"
          className="relative block border border-gray-100 mb-8"
        >
          {/* <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
          ></button> */}

          <img
            alt="Hotdug Mug"
            src="https://i.pinimg.com/originals/60/9f/79/609f79c036f54c4564ab72e0f89df98f.gif"
            className="h-56 w-full object-contain lg:h-72"
          />

          <div className="p-6">
            <span className="inline-block bg-yellow-400 px-3 py-1 text-xs font-medium">
              New
            </span>

            <h5 className="mt-4 text-lg font-bold">Snoop Dogg dancing</h5>

            <p className="mt-2 text-sm font-medium text-gray-600">$14.99</p>

            <button
              name="add"
              type="button"
              className="mt-4 flex w-full items-center justify-center rounded-sm bg-yellow-500 px-8 py-4"
            >
              <span className="text-sm font-medium"> View on GitHub </span>
            </button>
          </div>
        </a>
      </li>
    </ul>
  );
};
export default Showcase;
