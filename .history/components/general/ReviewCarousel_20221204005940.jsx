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
        className={`w-[25px]  mt-8 h-[4px] rounded-[10px] ${
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
                current === i ? "bg-gray-900" : "bg-gray-400"
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
          name="Ben Victorious"
          role="Enugu Branch"
          review="From meeting old friends and brethren and working together, to spending quality time together in worship, the experience- pure bliss. My story won't be complete without mentioning the Prophecies and Words of our Apostle and Ministers that came through, within the year 2022. I genuinely anticipate the new move of the Holy Spirit in this upcoming annual event: the Young People Love Jesus camp meeting 2022! Be there!"
          src={"/assets/ben.jpg"}
        />
        <ReviewCard
          name={"Nonso"}
          review="It was a life transforming meeting with Daddy Nick in the fullness of God's presence. It shaped my year and walk with God. The moments of worship were awesome. The word of God changed my mentality towards my purpose and pursuit in life. I really enjoyed the games and fellowship with brethren. I really can't wait to attend this year's YPLJ camp meeting."
          role="Nsukka Branch"
          src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        />
        <ReviewCard
          name="PSt Godswill"
          review="Camp Meeting, Wow!! Such a wonderful time in God's presence, it's really an unforgettable experience. Hearing God speak to us through our Spiritual Father and the Ministers and also listening to The Artists and their Team do Morning Devotional Songs Blessed me in no small way. Every Word Of Prophecy said by Our Spiritual Father Concerning Nsukka Church for this Year 2022 have been fulfilled and more are still happening. Waiting Patiently for This Year's Camp, trust me you don't wonna miss this for anything. See You Soon.

          "
          role="Enugu Branch"
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <ReviewCard
          name={"Chidera Ede"}
          review="From meeting old friends and brethren and working together, to spending quality time together in worship, the experience- pure bliss. My story won't be complete without mentioning the Prophecies and Words of our Apostle and Ministers that came through, within the year 2022. I genuinely anticipate the new move of the Holy Spirit in this upcoming annual event: the Young People Love Jesus camp meeting 2022! Be there!"
          role="Lagos Branch"
          src={
            "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          }
        />
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
