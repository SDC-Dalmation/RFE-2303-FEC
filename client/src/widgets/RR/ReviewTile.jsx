import React, {useState, useEffect} from "react";
import StarRatings from "react-star-ratings";
import axios from "axios";
import PhotoModal from "./PhotoModal.jsx"

function ReviewTile ({review}) {
  const [rating, setRating] = useState(review.rating);
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  const [clickedYes, setClickedYes] = useState(false);
  const [buttonYesColor, setButtonYesColor] = useState("blue");
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setHelpfulness(review.helpfulness);
  }, [review])

  const body = review.body;

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

  const handleHelpfulClick = () => {
    if (!clickedYes) {
    axios.post('/markReviewHelpful', {review_id: review.review_id})
      .then((res) => {
        console.log('marked review as helpful: ', res.data);
        setHelpfulness(review.helpfulness + 1);
      })
      .catch((err) => {
        console.log('could not mark as helpful: ', err);
      })
      setClickedYes(true);
      setButtonYesColor("grey")
    }
  }

  return(
    <div className="tile">
      <div className="rating-and-date">

        <StarRatings
        rating={review.rating}
        starRatedColor="blue"
        numberOfStars={5}
        name="rating"
        starDimension="20px"
        starSpacing="1px"/>

        <div>
          <div style={{fontSize: "small"}}>
          {formatDate(review.date)}
          </div>
          <div
          style={{fontSize: "small",
          display: "flex",
          justifyContent: "right"}}>
          {review.reviewer_name}
          </div>
        </div>

      </div>

      <div style={{marginBottom: "10px"}}>
        <p style={{"fontWeight": "bold"}}>
        {review.summary}
        </p>

        <p>
          {showMore ? body: `${body.substring(0, 250)}`}
          {body.length>250 ?
            <button
            onClick={()=>{setShowMore(!showMore)}}
            style={{
              textDecoration: "underline",
              border: "none",
              background: "none",
              cursor: "pointer",
              color: "blue"
            }}
            >
            {showMore ? "Show less": "...Show more"}
            </button>: null
          }
        </p>
      </div>

      <PhotoModal review={review}/>

      {review.recommend ? <div>I recommend this product ✔️</div>: null}


      <div style={{display: "flex", fontSize: "small", marginTop: "10px"}}>
        <div style={{marginRight: "5px"}}>Was this review helpful? </div>

        <button
        onClick={handleHelpfulClick}
        style={{ textDecoration: "underline",
        border: "none",
        background: "none",
        cursor: "pointer",
        color: buttonYesColor }}>
          Yes
        </button>

        <div>({helpfulness})</div>
      </div>

      {review.response ? <div style={{backgroundColor:"rgb(187, 185, 185)"}}> Response from seller: {review.response}</div>: null}

    </div>
  );
}

export default ReviewTile;