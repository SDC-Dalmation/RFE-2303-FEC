import React, {useState, useEffect} from "react";
import StarRatings from "react-star-ratings";
import axios from "axios";

function ReviewTile ({review}) {
  const [rating, setRating] = useState(review.rating);

  const formatDate = (string) => {
    let date = new Date(string);
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    let monthIndex = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();

    return `${months[monthIndex]} ${day}, ${year}`;
  }

  return(
    <div className="tile">
      <StarRatings rating={review.rating} starRatedColor="blue" numberOfStars={5} name="rating" starDimension="20px"
      starSpacing="1px"/>
      <div>Date: {formatDate(review.date)}</div>
      <p style={{"fontWeight": "bold"}}>{review.summary}</p>
      <p>{review.body}</p>
      <div>Recommend? {review.recommend.toString()}</div>
      <div>Name: {review.reviewer_name}</div>
      <div>Response: {review.response}</div>
      <div>Helpfulness: {review.helpfulness}</div>

      </div>
  );
}

export default ReviewTile;