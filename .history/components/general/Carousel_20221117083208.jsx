/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import useDeviceSize from "../hooks/mediaHook";

const Carousel = () => {
  const [width] = useDeviceSize();
  const [current, setCurrent] = useState(0);
  const settings = {
    className: "center",
    autoplay: true,
    // centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    arrows: false,
    slideToScrool: 1,
    lazyLoad: true,
    vertical: true,
    // focusOnSelect: true,
    draggable: true,
    dots: true,
    autoplaySped: 1000,
    speed: 500,
    afterChange: (current) => setCurrent(current),
    // customPaging: (i) => (
    //   <div
    //     className={`w-[20px]  mt-4 h-[4px] rounded-[10px] ${
    //       current === i ? "bg-AP-blue-300" : "bg-gray-500"
    //     }`}
    //   ></div>
    // ),
    responsive: [
      {
        breakpoint: 450,
        settings: {
          autoplay: true,
          centerMode: false,
          //   vertical: true,
          infinite: true,
          //   centerPadding: "60px",
          slidesToShow: 1,
          slideToScroll: 1,
          arrows: false,
          draggable: true,
          dots: true,
          autoplaySped: 1000,
          speed: 500,
          afterChange: (current) => setCurrent(current),
          //   customPaging: (i) => (
          //     <div
          //       className={`w-[20px]  mt-4 h-[4px] rounded-[10px] ${
          //         current === i ? "bg-AP-blue-300" : "bg-gray-500"
          //       }`}
          //     ></div>
          //   ),
        },
      },
    ],
  };

  const images = [
    "https://images.unsplash.com/photo-1579975096649-e773152b04cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcnNoaXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  ];
  return (
    <div>
      <Slider {...settings}>
        {images.map((image, i) => (
          <div key={i} className={`bg-red-400 h-full w-full`}>
            <img
              src={image}
              className={`object-cover  object-center  h-[50%] `}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

// current === i
// ? "scale-110 -translate-x-3  duration-500"
// : `blur-[3px] z-50 ${width <= 410 ? "scale-75" : "scale-100"}`
// }`
