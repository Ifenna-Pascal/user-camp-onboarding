import React from "react";
import Header from "../general/Header";
import ReviewCarousel from "../general/ReviewCarousel";

function Reviews() {
  return (
    <div className="mb-24" id="reviews">
      <Header
        header={"What The People Say..."}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa saepe iusto nisi! Nostrum tempore consequatur rerum! Cumque sequi tenetur ea! Impedit delectus facere est cupiditate, voluptatibus adipisci ipsum consectetur beatae."
      />
      <ReviewCarousel />
    </div>
  );
}

export default Reviews;
