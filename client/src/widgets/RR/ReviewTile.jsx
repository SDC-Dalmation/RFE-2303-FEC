import React, {useState, useEffect} from "react";

function ReviewTile ({review}) {
  return(
    <div className="tile">
      <div>Rating: {review.rating}</div>
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