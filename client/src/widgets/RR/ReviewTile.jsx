import React, {useState, useEffect} from "react";
import StarRatings from "react-star-ratings";

function ReviewTile ({review}) {
  const [rating, setRating] = useState(review.rating);
  return(
    <div className="tile">
      <div>{review.rating}</div>
      <StarRatings rating={review.rating} starRatedColor="blue" numberOfStars={5} name="rating" starDimension="20px"
      starSpacing="1px"/>
      <div>Date: {review.date}</div>
      <p>Summary: {review.summary}</p>
      <p>Body: {review.body}</p>
      <div>Recommend? {review.recommend}</div>
      <div>Name: {review.reviewer_name}</div>
      <div>Response: {review.response}</div>
      <div>Helpfulness: {review.helpfulness}</div>

      </div>
  );
}

export default ReviewTile;