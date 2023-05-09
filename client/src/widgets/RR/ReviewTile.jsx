import React, {useState, useEffect} from "react";

function ReviewTile ({review}) {
  return(
    <div>
      <p>{review.body}</p>
    </div>
  );
}

export default ReviewTile;