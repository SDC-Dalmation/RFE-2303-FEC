import React, {useState, useEffect} from "react";
import StarRatings from "react-star-ratings";

function NewReview ({reviews, setReviews, setShowModal, currentProduct}) {
  const [rating, setRating] = useState(0);
  const [option, setOption] = useState("");
  const [recommend, setRecommend] = useState(false);


  const changeRating = (newRating, name) => {
    setRating(newRating);
  }

  const handleOptionChange = (e) => {
    e.preventDefault();
    setOption(e.target.value);
  }

  useEffect(() => {
    if (option === "Yes") {
      setRecommend(true);
    } else {
      setRecommend(false);
    }
  }, [option])

  const handleClose = () => {
    setShowModal(false);
  }

  const handleSubmit = () => {
    let form = e.target
  }

  const ratingText = {
    1: "Poor",
    2: "Fair",
    3: "Average",
    4: "Good",
    5: "Great"
  }

  return(
    <div className="modal">
     <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Write Your Review</h4>
        <h5 className="modal-subtitle">{`About the ${currentProduct.name}`}</h5>
      </div>
      <div className="modal-body">

        <form onSubmit={handleSubmit}>

          <div className="modal-rating">Overall rating
          <StarRatings
          rating={rating}
          changeRating={changeRating}
          starRatedColor="blue"
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starSpacing="1px"
          />
          <div style={{"marginLeft": "10px"}}>{ratingText[rating]}</div>
          </div>

          <div className="radio">Do you recommend this product?
            <label>
              <input
                type="radio"
                value="Yes"
                checked={option==="Yes"}
                onChange={handleOptionChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                checked={option==="No"}
                onChange={handleOptionChange}
              />
              No
            </label>
          </div>

          <div>Characteristics</div>
          <input placeholder="enter summary"/>
          <input placeholder="enter review body"/>
          <div>photos</div>
          <input placeholder="enter name"/>
          <input placeholder="enter email"/>
        </form>

      </div>
      <div className="modal-footer">
        <button className="button" type="submit" onClick={handleClose}>Submit Review</button>
      </div>
     </div>
    </div>
  );
}

export default NewReview;