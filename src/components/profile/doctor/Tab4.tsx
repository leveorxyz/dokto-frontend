import React from "react";
import StarRatingComponent from "react-star-rating-component";

export default function Tab4() {
  return (
    <>
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={3}
        starColor="#ffd700"
      />
    </>
  );
}
