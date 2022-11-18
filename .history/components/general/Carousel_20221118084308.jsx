/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ setCurrent, current }) => {
  const images = [
    "https://images.unsplash.com/photo-1579975096649-e773152b04cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcnNoaXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhY2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  ];
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
