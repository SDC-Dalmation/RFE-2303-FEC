import React, {useState, useEffect} from "react";
import axios from "axios";
import ReviewTile from "./ReviewTile.jsx";
import Sort from "./Sort.jsx";
import NewReview from "./NewReview.jsx";
import PostAPIInteraction from "../PostAPIInteraction.jsx";


function ReviewsList ({currentProduct, metaData, reviews, setReviews}) {

  const [limit, setLimit] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [showMoreReviews, setShowMoreReviews] = useState(true)

  const buttonStyle = {
    "alignSelf": "start",
    "backgroundColor" : "rgb(216,216,216)",
    "color": "black",
    "cursor": "pointer",
    "display": "inline",
    "fontFamily": "Arial",
    "padding": "1vh",
    "marginLeft": "5%",
    "width": "13%",
    "border": "none",
    "textAlign": "center",
    "outline": "1px solid grey",
    "fontSize": "14px",
    "transition": "0.4s",
  };

  const handleClick = () => {
    setShowModal(true);
    PostAPIInteraction('New Review button', 'Ratings and Reviews');
  }



  let handleMoreReviews = () => {
   setLimit(limit + 2);
   PostAPIInteraction('More Reviews button', 'Ratings and Reviews');
  }

  return(
    <div>
      <div>
        <Sort
        currentProduct={currentProduct}
        reviews={reviews}
        setReviews={setReviews}
        metaData={metaData}
        />
        <div
        className="scrollable"
        style={{
          borderLeft: "solid 0.5px black",
          borderRight: "solid 0.5px black",
          height: "600px",
          overflow: "auto",
          textAlign: "justify",
          marginBottom: "20px",
        }}
        >
        {
          reviews.slice(0, limit).map((review, index) => {
            return (<ReviewTile key={index} review={review} reviews={reviews}/>)
          })
        }
        </div>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10%"
        }}
        >
          {
            limit < reviews.length
            ? <span
            onClick={handleMoreReviews}
            style={buttonStyle}
            >More Reviews
            </span>
            : null
          }

          <span
          onClick={handleClick}
          style={buttonStyle}
          >New Review</span>
          {showModal ? <NewReview reviews={reviews} setReviews={setReviews} setShowModal={setShowModal} currentProduct={currentProduct}/>:null}
        </div>
      </div>
    </div>
  );
}

export default ReviewsList;