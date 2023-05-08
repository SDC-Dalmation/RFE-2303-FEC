import React, {useState, useEffect} from "react";
import ReviewTile from "./ReviewTile.jsx";
import Sort from "./Sort.jsx";
import NewReview from "./NewReview.jsx";


function ReviewsList () {
  return(
    <div>
      <h4>Reviews List</h4>
      <div>
        <Sort />
        <ReviewTile />
        <NewReview />
      </div>
    </div>
  );
}

export default ReviewsList;