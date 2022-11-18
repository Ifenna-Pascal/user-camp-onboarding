import React from "react";

function useSetting(current, setCurrent) {
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
    focusOnSelect: true,
    draggable: true,
    dots: true,
    autoplaySpeed: 5000,
    speed: 2000,
    beforeChange: (current) => setCurrent(current),
    customPaging: (i) => (
      <div
        className={`w-[20px]  mt-4 h-[4px] rounded-[10px] ${
          current === i ? "bg-blue-300" : "bg-gray-500"
        }`}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 450,
        settings: {
          autoplay: true,
          centerMode: false,
          vertical: true,
          infinite: true,
          slidesToShow: 1,
          slideToScroll: 1,
          arrows: false,
          draggable: true,
          dots: true,
          autoplaySpeed: 5000,
          speed: 2000,
          beforeChange: (current) => setCurrent(current),
          customPaging: (i) => (
            <div
              className={`w-[20px]  mt-4 h-[4px] rounded-[10px] ${
                current === i ? "bg-blue-300" : "bg-gray-500"
              }`}
            ></div>
          ),
        },
      },
    ],
  };
  return { settings };
}

export default useSetting;
