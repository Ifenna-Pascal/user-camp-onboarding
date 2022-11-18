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