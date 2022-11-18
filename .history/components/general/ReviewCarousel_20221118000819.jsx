/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
// import useDeviceSize from "../hooks/mediaHook";
import ReviewCard from "./ReviewCard";

const ReviewCarousel = () => {
  //   const [width] = useDeviceSize();
  const [current, setCurrent] = useState(false);
  const settings = {
    className: "center",
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    arrows: false,
    slideToScrool: 2,
    lazyLoad: true,
    focusOnSelect: true,
    draggable: true,
    dots: true,
    autoplaySpeed: 5000,
    speed: 2000,
    afterChange: (current) => setCurrent(current),
    customPaging: (i) => (
      <div
        className={`w-[20px]  mt-8 h-[4px] rounded-[10px] ${
          current === i ? "bg-black" : "bg-gray-300"
        }`}
      ></div>
    ),
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
          beforeChange: (current) => setCurrent(current),
          customPaging: (i) => (
            <div
              className={`w-[20px]  mt-4 h-[4px] rounded-[10px] ${
                current === i ? "bg-AP-blue-300" : "bg-blue-500"
              }`}
            ></div>
          ),
        },
      },
    ],
  };

  return (
    <div className="max-w-[1100px] mx-auto">
      <Slider {...settings}>
        <ReviewCard
          name="PSt Godswill"
          role="Enugu Branch"
          src={
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          }
        />
        <ReviewCard name={"Chidera Ede"} role="Lagos Branch" />
        <ReviewCard name="PSt Godswill" role="Enugu Branch" />
        <ReviewCard name={"Chidera Ede"} role="Lagos Branch" />
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
