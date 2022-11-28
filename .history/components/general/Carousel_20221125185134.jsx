/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useSetting from "../hooks/useSetting";

const Carousel = ({ setCurrent, current }) => {
  const { settings } = useSetting(current, setCurrent);
  const images = ["/assets/camp7.jpg", "/assets/camp4.jpg", "/assets/camp.jpg"];
  return (
    <div>
      <Slider {...settings}>
        {images.map((image, i) => (
          <div key={i} className={` h-full w-full`}>
            <img
              src={image}
              className={`object-cover  object-center rounded-lg w-full  h-[50%] `}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
