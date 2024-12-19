import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
  

// import "../App.css";

// import required modules
import { Pagination } from "swiper/modules";
const slideImage = [
  {
    title: "Best video editiong in USA",
    image: ` ${img1}`,
  },
  {
    title: "World Class Video Production",
    image: `${img2}`,
  },
  {
    title: "Best video editiong in USA",
    image: ` ${img3}`,
  },
];

const Hero = () => {
  return (
    <div className="relative container mx-auto max-w-[1600px]">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {slideImage.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="block h-full w-full mx-auto md:flex pt-6 md:pt-0 md:items-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "50vh", // Adjust height as needed
                width: "100",
              }}
            >
              <div className="container mx-auto ">
                <div className="bg-black  opacity-60 flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 rounded-sm">
                  <p className="text-white text-2xl my-4 pt-3 ">{slide.title}</p>
                  <a
                    href="#"
                    className="text-xl inline-block no-underline border-b-1 border-gray-600 hover:text-indigo-500 hover:border-black mb-2 text-white"
                  >
                    view pricing
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
